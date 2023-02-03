import { Paper } from '@mui/material';

interface IImageContainer {
  photoUrl: string;
}

export const ImageContainer = ({ photoUrl }: IImageContainer) => {
  return (
    <Paper
      sx={{
        width: '332px',
        height: '415px',
        background: 'transparent',
      }}
      elevation={2}
    >
      <img
        src={photoUrl}
        alt=""
        style={{ width: '100%', height: '100%', borderRadius: '10px' }}
      />
    </Paper>
  );
};
