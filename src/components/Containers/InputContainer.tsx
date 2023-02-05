import { Box } from '@mui/material';
import { useState } from 'react';

import { Input } from '../Input/Input';

export const InputContainer = () => {
  const [input, setInput] = useState<string>('');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '10px',
        width: 'fit-content',
      }}
    >
      <Input
        placeholder="Nome do Personagem"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </Box>
  );
};
