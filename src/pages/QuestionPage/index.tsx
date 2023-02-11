import { Box } from '@mui/material';

import { PageButton } from '../../components/Buttons/PageButton';
import { PageContainer } from '../../components/Containers/PageContainer';
import { Question } from '../../components/Question';

export const QuestionPage = () => {
  return (
    <PageContainer>
      <Question question="Seu Personagem é fulano?" questionNumber={1} fontSize="48px" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '80%',
          margin: '0 auto',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <PageButton text="sim" width="250px" height="50px" color="#3BCEAC" />
        <PageButton text="Não" width="250px" height="50px" color="#CE3B3B" />
        <PageButton text="Não sei" width="250px" height="50px" color="#868E96" />
      </Box>
    </PageContainer>
  );
};
