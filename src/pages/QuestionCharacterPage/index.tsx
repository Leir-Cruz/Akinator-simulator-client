import { Box } from '@mui/material';
import { useNavigate } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { ImageContainer } from '../../components/Containers/ImageContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Question } from '../../components/Question';

export const QuestionCharacterPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Question question="Seu Personagem é fulano?" questionNumber={1} fontSize="48px" />
      <ImageContainer
        photoUrl="https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg"
        width="300px"
        height="400px"
      />
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
          onClick={() => navigate(`/Character`)}
        />
        <PageButton text="Não" width="250px" height="50px" color="#CE3B3B" />
      </Box>
    </PageContainer>
  );
};
