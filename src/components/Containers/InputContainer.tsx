import { Box } from '@mui/material';

import { Input } from '../Input/Input';

export const InputContainer = () => {
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
      <Input placeholder="Nome do Personagem" />
    </Box>
  );
};
