import { keyframes, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { ImageContainer } from '../../components/Containers/ImageContainer';
import { PageContainer } from '../../components/Containers/PageContainer';

export const CharacterPage = () => {
  const { character } = useParams();

  const navigate = useNavigate();
  const textFadeLoop = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
  `;
  const PageTitle = styled(Typography)(() => ({
    fontSize: '128px',
    color: '#fff',
    fontFamily: 'Zen Kurenaido',
    animation: `${textFadeLoop} 2s infinite alternate`,
  }));
  return (
    <PageContainer>
      <PageTitle>Seu Personagem é {character}</PageTitle>
      <ImageContainer
        photoUrl="https://cdn.discordapp.com/attachments/750164310315106366/1074526473614020638/latest.png"
        width="300px"
        height="400px"
      />
      <PageButton
        text="Voltar Tela Inicial"
        width="fit-content"
        color="#3BCEAC"
        height="fit-content"
        fontSize="20px"
        onClick={() => navigate(`/`)}
      />
    </PageContainer>
  );
};
