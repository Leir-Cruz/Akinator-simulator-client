import { Box } from '@mui/material';

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
