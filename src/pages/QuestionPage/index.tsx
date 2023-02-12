import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { PageButton } from '../../components/Buttons/PageButton';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Question } from '../../components/Question';
import { choice, useGlobalContext } from '../../contexts/useContext';

export const QuestionPage = () => {
  const { startNewGame, getNextQuestion, answerQuestion } = useGlobalContext();
  const [title, setTitle] = useState<string>('');

  const postAnswer = async (res: choice) => {
    console.log('Teste');
    console.log(res);
    await answerQuestion(title, res);
  };

  const fetchNextQuestion = async () => {
    await startNewGame();
    const response = await getNextQuestion();
    setTitle(response);
  };

  useEffect(() => {
    fetchNextQuestion();
  }, []);

  return (
    <PageContainer>
      <Question question={title} questionNumber={1} fontSize="48px" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '80%',
          margin: '0 auto',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <PageButton
          text="sim"
          width="250px"
          height="50px"
          color="#3BCEAC"
          onClick={() => {
            postAnswer(1);
          }}
        />
        <PageButton
          text="Não"
          width="250px"
          height="50px"
          color="#CE3B3B"
          onClick={() => {
            postAnswer(-1);
          }}
        />
        <PageButton
          text="Não sei"
          width="250px"
          height="50px"
          color="#868E96"
          onClick={() => {
            postAnswer(0);
          }}
        />
      </Box>
    </PageContainer>
  );
};
