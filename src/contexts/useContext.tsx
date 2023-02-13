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

export const translationTable: { [key: string]: string } = {
  Died: 'O seu personagem morreu?',
  Murder: 'O seu personagem já matou alguem?',
  Dead: 'O seu personagem está morto?',
  Male: 'O seu personagem é um homem?',
  Blonde: 'O seu personagem é loiro?',
  Fight: 'O seu personagem luta?',
  Wall: 'O seu personagem esteve na muralha?',
  Child: 'O seu personagem é uma criança?',
  Wild: 'O seu personagem vive depois da muralha?',
  King: 'O seu personagem é um Rei?',
  Love: 'O seu personagem amou alguém?',
  Honor: 'O seu personagem tinha honra?',
};

export interface GlobalContext {
  startNewGame(): Promise<string>;
  getNextQuestion(): Promise<string>;
  answerQuestion(label: string, choice: choice): Promise<result>;
  addCharacter(name: string, values: choice[]): Promise<AddCharacter>;
  translateLabel(label: string): string;
  getImage(): string;
  execution?: number;
  gameStatus?: AkinatorChoice[];
}

const defaultContext: GlobalContext = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  startNewGame: () => Promise.resolve('exemple'),
  getNextQuestion: () => Promise.resolve('exemple'),
  answerQuestion: () => Promise.resolve(null),
  addCharacter: () => Promise.resolve({ name: 'test', values: [] }),
  translateLabel: () => 'exemplo',
  getImage: () =>
    'https://cdn.discordapp.com/attachments/750164310315106366/1074526473614020638/latest.png',
};

const GlobalContext = createContext<GlobalContext>(defaultContext);

export const ContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [execution, setExecution] = useState<number>();
  const [gameState, setGameState] = useState<AkinatorChoice[]>([]);

  const startNewGame = async () => {
    const response = await api.post('/executions');
    setExecution(response.data.requisition_id);

    const question = await api.get(`/questions/${response.data.requisition_id}`);
    return question.data.result;
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
    const response = await api.post(`/questions/${execution}`, { answer: choice });
    const answeredQuestion: AkinatorChoice = { label, choice };
    setGameState([...gameState, answeredQuestion]);
    return response.data.result;
  };

  const getImage = () => {
    const images = [
      'https://media.discordapp.net/attachments/750164310315106366/1074526473614020638/latest.png?width=640&height=678',
      'https://cdn.discordapp.com/attachments/750164310315106366/1074526566517850112/latest.png',
      'https://cdn.discordapp.com/attachments/750164310315106366/1074526733828636724/aladdin-genio-clipart-001.png',
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  type ObjectKey = keyof typeof translationTable;

  const translateLabel = (label: string): string => translationTable[label as ObjectKey];

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
    translateLabel: translateLabel,
    execution: execution,
    gameStatus: gameState,
    getImage: getImage,
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
