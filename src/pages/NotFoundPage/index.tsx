import { styled, Typography } from '@mui/material';
import { useState } from 'react';

import { PageButton } from '../../components/Buttons/PageButton';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Input } from '../../components/Input/Input';

export const NotFoundPage = () => {
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
      <Input
        placeholder="Nome do Personagem"
        onChange={(e) => setName(e)}
        width="40%"
        height="50px"
        fontSize="16px"
      />
      <PageButton text="Confirmar" width="25%" />
    </PageContainer>
  );
};
