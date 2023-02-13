import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { ImageContainer } from '../../components/Containers/ImageContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Input } from '../../components/Input/Input';

export const NotFoundPage = () => {
  const { character } = useParams();
  const navigate = useNavigate();
  const PageTitle = styled(Typography)(() => ({
    fontSize: '64px',
    width: '80%',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Zen Kurenaido',
  }));

  const [name, setName] = useState<string>('');
  console.log(name);

  return (
    <PageContainer>
      <PageTitle>
        Seu Personagem não está no nosso Banco de Dados, pode nos dizer quem é?
      </PageTitle>
      <ImageContainer
        photoUrl={
          'https://cdn.discordapp.com/attachments/750164310315106366/1074533462192705546/image.png'
        }
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
      ></Box>
      <Input
        placeholder="Nome do Personagem"
        onChange={(e) => setName(e.target.value)}
        width="40%"
        height="50px"
        fontSize="16px"
      />
      <PageButton
        text="Confirmar"
        width="25%"
        onClick={() => navigate(`/AddCharacter/${name}`)}
      />
    </PageContainer>
  );
};
