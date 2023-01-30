import { Box } from '@mui/system';
import { useState } from 'react';

interface IInput {
  placeholder: string;
}
export const Input = ({ placeholder }: IInput) => {
  const [input, setInput] = useState<string>('');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '200px',
        height: '40px',
        borderRadius: '5px',
        border: '2px solid #868E96',
      }}
    >
      <input
        placeholder={placeholder}
        style={{
          border: 'transparent',
          width: '100%',
          height: '100%',
          borderRadius: '5px',
          padding: '0 4px',
          outline: 'none',
        }}
      />
    </Box>
  );
};
