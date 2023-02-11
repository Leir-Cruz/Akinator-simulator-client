import { keyframes, styled, Typography } from '@mui/material';

import { PageButton } from '../../components/Buttons/PageButton';
import { ImageContainer } from '../../components/Containers/ImageContainer';
import { PageContainer } from '../../components/Containers/PageContainer';

interface ICharacterPage {
  characterName?: string;
}

export const CharacterPage = ({ characterName }: ICharacterPage) => {
  //from { opacity: 0 }
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
      <PageTitle>Seu Personagem é {characterName}</PageTitle>
      <ImageContainer
        photoUrl="https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg"
        width="300px"
        height="400px"
      />
      <PageButton
        text="Voltar Tela Inicial"
        width="fit-content"
        color="#3BCEAC"
        height="fit-content"
        fontSize="20px"
      />
    </PageContainer>
  );
};
