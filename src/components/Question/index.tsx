import { Grid, Typography } from '@mui/material';

interface IQuestion {
  question: string;
  questionNumber: number;
  width?: string;
  height?: string;
  fontSize?: string;
}

export const Question = ({
  question,
  questionNumber,
  width,
  height,
  fontSize,
}: IQuestion) => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        backgroundColor: '#fff',
        width: width ? width : '50%',
        height: height ? height : '144px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '10px',
      }}
    >
      <Grid
        xs={2}
        sx={{
          backgroundColor: '#313B72',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          height: '100%',
          borderRadius: ' 10px 0 0 10px',
        }}
      >
        <Typography sx={{ color: '#fff', fontSize: '48px', fontWeight: 'bold' }}>
          # {questionNumber}
        </Typography>
      </Grid>
      <Grid
        xs={10}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography
          sx={{
            color: '#000',
            fontSize: fontSize ? fontSize : '36px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {question}
        </Typography>
      </Grid>
    </Grid>
  );
};
