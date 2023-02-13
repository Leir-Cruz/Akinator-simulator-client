import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageButton } from '../../components/Buttons/PageButton';
import { ImageContainer } from '../../components/Containers/ImageContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Question } from '../../components/Question';
import { choice, useGlobalContext } from '../../contexts/useContext';

export const QuestionPage = () => {
  const navigate = useNavigate();
  const { startNewGame, getNextQuestion, answerQuestion, translateLabel, getImage } =
    useGlobalContext();
  const [title, setTitle] = useState<string>('');
  const [questionNumber, setQuesttionNumber] = useState<number>(1);
  const [image, setImage] = useState<string>('');

  const postAnswer = async (res: choice) => {
    console.log('answer' + String(res));
    const result = await answerQuestion(title, res);
    if (!result) {
      fetchNewQuestion();
      return;
    }
    navigate(`/questionCharacter/${result}`);
  };

  const StartGame = async () => {
    const response = await startNewGame();
    console.log('jogo iniciado');
    setImage(getImage());
    setTitle(response);
  };

  const fetchNewQuestion = async () => {
    const response = await getNextQuestion();
    if (response === null) navigate('/NotFound');
    setImage(getImage());
    setTitle(response);
    setQuesttionNumber(questionNumber + 1);
  };

  useEffect(() => {
    StartGame();
  }, []);

  return (
    <PageContainer>
      <Question
        question={translateLabel(title)}
        questionNumber={questionNumber}
        fontSize="48px"
      />
      <ImageContainer photoUrl={image} width="300px" height="400px" />
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
