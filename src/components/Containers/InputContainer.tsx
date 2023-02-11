import { Box } from '@mui/material';
import { useState } from 'react';

import { Input } from '../Input/Input';

interface IInputContainer {
  children: JSX.Element[];
}

export const InputContainer = ({ children }: IInputContainer) => {
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
      {children}
    </Box>
  );
};
