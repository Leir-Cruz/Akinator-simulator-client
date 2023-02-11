import { styled, Typography } from '@mui/material';
import { useState } from 'react';

import { PageButton } from '../../components/Buttons/PageButton';
import { InputContainer } from '../../components/Containers/InputContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Input } from '../../components/Input/Input';

export const AddCharacterPage = () => {
  const PageTitle = styled(Typography)(() => ({
    fontSize: '64px',
    width: '80%',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Zen Kurenaido',
  }));

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [hairColor, setHairColor] = useState<string>('');

  return (
    <PageContainer>
      <PageTitle>Preencha os campos abaixo para adicionar *Nome do Personagem*</PageTitle>

      <InputContainer>
        <Input
          placeholder="Nome do Personagem"
          onChange={(e) => setName(e)}
          width="40%"
          height="50px"
          fontSize="16px"
        />
        <Input
          placeholder="Idade do Personagem"
          onChange={(e) => setAge(e)}
          width="40%"
          height="50px"
          fontSize="16px"
        />
        <Input
          placeholder="Trabalho/Função do Personagem"
          onChange={(e) => setJob(e)}
          width="40%"
          height="50px"
          fontSize="16px"
        />
        <Input
          placeholder="Cor de Personagem"
          onChange={(e) => setHairColor(e)}
          width="40%"
          height="50px"
          fontSize="16px"
        />
      </InputContainer>
      <PageButton text="Confirmar" width="25%" />
    </PageContainer>
  );
};
