import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { PageButton } from '../../components/Buttons/PageButton';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Question } from '../../components/Question';
import { choice, useGlobalContext } from '../../contexts/useContext';

export const QuestionPage = () => {
  const { startNewGame, answerQuestion, translateLabel } = useGlobalContext();
  const [title, setTitle] = useState<string>('');

  const postAnswer = async (res: choice) => {
    await answerQuestion(title, res);
  };

  const fetchNextQuestion = async () => {
    const response = await startNewGame();
    setTitle(response);
  };
  useEffect(() => {
    fetchNextQuestion();
  }, []);

  return (
    <PageContainer>
      <Question question={translateLabel(title)} questionNumber={1} fontSize="48px" />
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
            // postAnswer(1);
            const ans: choice = 1;
            const a = answerQuestion(title, ans);
            console.log('fefgefef');
            console.log(a);
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
