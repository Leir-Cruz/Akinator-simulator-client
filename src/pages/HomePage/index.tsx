import { Typography } from '@mui/material';

import { PageButton } from '../../components/Buttons/PageButton';
import { PageContainer } from '../../components/Containers/PageContainer';

export const HomePage = () => {
  console.log('wtf');
  return (
    <PageContainer>
      <Typography sx={{ fontSize: '128px', color: '#fff', fontFamily: 'Zen Kurenaido' }}>
        Akinator Simulator
      </Typography>
      <PageButton text="jogar" width="30%" />
    </PageContainer>
  );
};
