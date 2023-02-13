import { Box } from '@mui/system';
import { useState } from 'react';

interface IInput {
  placeholder: string;
  onChange: (event: any) => void;
  width?: string;
  height?: string;
  fontSize?: string;
}
export const Select = ({ placeholder, width, height, fontSize }: IInput) => {
  const [service, setService] = useState([false, false, false]);

  const handleOnChange = (position) => {
    const updatedCheckedState = service.map((item, index) =>
      index === position ? true : false,
    );

    setService(updatedCheckedState);
  };

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
      <div placeholder={placeholder}>
        <input
          type="checkbox"
          placeholder={placeholder}
          checked={service[0]}
          onChange={() => handleOnChange(0)}
          style={{
            border: 'transparent',
            fontSize: fontSize ? fontSize : '14px',
            width: '100%',
            height: '100%',
            borderRadius: '5px',
            padding: '0 4px',
            outline: 'none',
          }}
        />
        <input
          type="checkbox"
          placeholder={placeholder}
          checked={service[0]}
          onChange={() => handleOnChange(0)}
          style={{
            border: 'transparent',
            fontSize: fontSize ? fontSize : '14px',
            width: '100%',
            height: '100%',
            borderRadius: '5px',
            padding: '0 4px',
            outline: 'none',
          }}
        />
      </div>
    </Box>
  );
};
