import { styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { InputContainer } from '../../components/Containers/InputContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select';
import { useGlobalContext } from '../../contexts/useContext';

export const AddCharacterPage = () => {
  const { addCharacter } = useGlobalContext();
  const navigate = useNavigate();

  const PageTitle = styled(Typography)(() => ({
    fontSize: '64px',
    width: '80%',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Zen Kurenaido',
  }));

  //['Died','Dead','Male','Blonde','Fight','Wall','Child','Murder','Wild','King','Love','Honor']
  const [age, setAge] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [hairColor, setHairColor] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [died, setDied] = useState<number>(0);
  const [dead, setDead] = useState<number>(0);
  const [male, setMale] = useState<number>(0);
  const [blonde, setBlonde] = useState<number>(0);
  const [fight, setFight] = useState<number>(0);
  const [wall, setWall] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const [murder, setMurder] = useState<number>(0);
  const [wild, setWild] = useState<number>(0);
  const [king, setKing] = useState<number>(0);
  const [love, setLove] = useState<number>(0);
  const [honor, setHonor] = useState<number>(0);

  return (
    <PageContainer>
      <PageTitle>Preencha os campos abaixo para adicionar *Nome do Personagem*</PageTitle>

      <InputContainer>
        <Input
          placeholder="Nome do Personagem"
          onChange={(e: string) => setName(e)}
          width="40%"
          height="50px"
          fontSize="16px"
        />
        <Select placeholder="Nome do Personagem" />
        <Select />
        <Select />
        <Input
          placeholder="Nome do Personagem"
          onChange={(e: number) => setDied(e)}
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
      <PageButton text="Confirmar" width="25%" onClick={() => navigate('/')} />
    </PageContainer>
  );
};
