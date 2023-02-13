import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

// sim     =  1
// não sei =  0
// não     = -1
export type choice = -1 | 0 | 1;

// null: não sabemos o personagem
// string: é esse personagem
// string[]: é qualquer um desses
type result = null | string | string[];

interface AkinatorChoice {
  label: string;
  choice: choice;
}

interface AddCharacter {
  values: choice[];
  name: string;
}

export interface GlobalContext {
  startNewGame(): void;
  getNextQuestion(): Promise<string>;
  answerQuestion(label: string, choice: choice): Promise<result>;
  addCharacter(name: string, values: choice[]): Promise<AddCharacter>;
  execution?: number;
  gameStatus?: AkinatorChoice[];
}

const defaultContext: GlobalContext = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  startNewGame: () => {},
  getNextQuestion: () => Promise.resolve('exemple'),
  answerQuestion: () => Promise.resolve(null),
  addCharacter: () => Promise.resolve({ name: 'test', values: [] }),
};

const GlobalContext = createContext<GlobalContext>(defaultContext);

export const ContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [execution, setExecution] = useState<number>();
  const [gameState, setGameState] = useState<AkinatorChoice[]>([]);

  const startNewGame = async () => {
    const response = await api.post('/executions');
    setExecution(response.data.requisition_id);
  };

  const arrayIncludes = (
    array: AkinatorChoice[],
    label: string,
  ): AkinatorChoice | undefined => {
    for (const i in array) if (array[i].label === label) return array[i];
  };

  const getNextQuestion = async (): Promise<string> => {
    if (!execution) {
      setTimeout('', 1000);
      return getNextQuestion();
    }

    const response = await api.get(`/questions/${execution}`);

    const alreadyAsked = arrayIncludes(gameState, response.data.result);

    if (alreadyAsked) {
      return answerQuestion(response.data.result, alreadyAsked.choice).then(() =>
        getNextQuestion(),
      );
    }

    return response.data.result;
  };

  const answerQuestion = async (label: string, choice: choice): Promise<result> => {
    const currentQuestion = gameState.pop();
    if (label !== currentQuestion?.label) {
      throw Error;
    }

    const response = await api.post(`/questions/${choice}`, { answer: choice });
    const answeredQuestion: AkinatorChoice = { label, choice };
    setGameState([...gameState, answeredQuestion]);
    return response.data.result;
  };

  // ordem de values:
  // eslint-disable-next-line no-irregular-whitespace
  // ['Died','Dead','Male','Blonde','Fight','Wall','Child','Murder','Wild','King','Love','Honor']
  const addCharacter = async (name: string, values: choice[]) => {
    const request: AddCharacter = {
      name,
      values,
    };

    const response = await api
      .post('/add_character', request)
      .catch((e) => alert(e.message));

    return response?.data as unknown as AddCharacter;
  };

  const context: GlobalContext = {
    startNewGame: startNewGame,
    getNextQuestion: getNextQuestion,
    answerQuestion: answerQuestion,
    addCharacter: addCharacter,
    execution: execution,
    gameStatus: gameState,
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
