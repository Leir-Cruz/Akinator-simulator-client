import { styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { InputContainer } from '../../components/Containers/InputContainer';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select';
import { translationTable, useGlobalContext } from '../../contexts/useContext';

export const AddCharacterPage = () => {
  const { character } = useParams();
  const { addCharacter } = useGlobalContext();
  const navigate = useNavigate();

  const PageTitle = styled(Typography)(() => ({
    fontSize: '64px',
    width: '80%',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Zen Kurenaido',
  }));

  const labels: string[] = Object.keys(translationTable);
  const payloadBase: any = {};
  labels.forEach((l) => {
    payloadBase[l] = 1;
  });

  const [payload, setPayload] = useState(payloadBase);

  const setValue = (label: string, value: number) => {
    setPayload((payload) => {
      payload[label] = value;
      return payload;
    });
  };

  const handleSubmit = () => {
    if (!character) {
      alert('Nome inexistente!');
      return;
    }
    addCharacter(character, Object.values(payload));
    alert(`${character} adicionado!`);
    navigate('/');
  };

  return (
    <PageContainer>
      <PageTitle>Preencha os campos abaixo para adicionar {character}</PageTitle>
      <br />
      <div>
        {labels.map((l: string, i) => (
          <Select key={i} label={l} display={translationTable[l]} setValue={setValue} />
        ))}
      </div>
      <PageButton text="Confirmar" width="25%" onClick={handleSubmit} />
    </PageContainer>
  );
};
