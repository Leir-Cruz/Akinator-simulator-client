import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { ImageContainer } from '../../components/Containers/ImageContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Question } from '../../components/Question';
import { useGlobalContext } from '../../contexts/useContext';

export const QuestionCharacterPage = () => {
  const { character } = useParams();
  const { getImage } = useGlobalContext();

  const navigate = useNavigate();
  return (
    <PageContainer>
      <Question
        question={`Seu Personagem é ${character}?`}
        fontSize="48px"
        questionNumber={1}
      />
      <ImageContainer photoUrl={getImage()} width="300px" height="400px" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '80%',
          margin: '0 auto',
          justifyContent: 'space-around',
          marginBottom: '10px',
        }}
      >
        <PageButton
          text="sim"
          width="250px"
          height="50px"
          color="#3BCEAC"
          onClick={() => navigate(`/Character/${character}`)}
        />
        <PageButton
          text="Não"
          width="250px"
          height="50px"
          color="#CE3B3B"
          onClick={() => {
            navigate('/notFound');
          }}
        />
      </Box>
    </PageContainer>
  );
};
