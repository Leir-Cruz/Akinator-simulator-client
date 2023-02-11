import { Box } from '@mui/system';

interface IInput {
  placeholder: string;
  onChange: (event: any) => void;
  width?: string;
  height?: string;
}
export const Input = ({ placeholder, onChange, width, height }: IInput) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width ? width : '200px',
        height: height ? height : '40px',
        borderRadius: '5px',
        border: '2px solid #868E96',
      }}
    >
      <input
        placeholder={placeholder}
        onChange={onChange}
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
