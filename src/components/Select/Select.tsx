import { Box } from '@mui/system';

interface IInput {
  width?: string;
  height?: string;
  fontSize?: string;
  label: string;
  display: string;
  setValue: (label: string, value: number) => void;
}
export const Select = ({ label, display, setValue, width, height, fontSize }: IInput) => {
  const handleOnChange = (e: any) => {
    setValue(label, e.target.value);
  };

  return (
    <>
      <div style={{ color: '#fff' }}>
        <span
          style={{
            border: 'transparent',
            fontSize: fontSize ? fontSize : '30px',
            width: '100px',
            height: '100%',
            borderRadius: '5px',
            padding: '0 4px',
            outline: 'none',
          }}
        >
          {display}
        </span>
        <div onChange={handleOnChange} style={{ color: '#fff' }}>
          <span
            style={{
              border: 'transparent',
              fontSize: fontSize ? fontSize : '14px',
              width: '100%',
              height: '100%',
              borderRadius: '5px',
              padding: '0 4px',
              outline: 'none',
            }}
          >
            Sim
          </span>
          <input
            type="radio"
            value={1}
            name={label}
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
          <span
            style={{
              border: 'transparent',
              fontSize: fontSize ? fontSize : '14px',
              width: '100%',
              height: '100%',
              borderRadius: '5px',
              padding: '0 4px',
              outline: 'none',
            }}
          >
            Não
          </span>
          <input
            type="radio"
            value={-1}
            name={label}
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
      </div>
    </>
  );
};
