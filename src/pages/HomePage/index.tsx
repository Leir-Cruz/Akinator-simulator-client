import { keyframes, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import { PageButton } from '../../components/Buttons/PageButton';
import { PageContainer } from '../../components/Containers/PageContainer';

export const HomePage = () => {
  const navigate = useNavigate();

  const textFadeLoop = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
  `;
  const PageTitle = styled(Typography)(() => ({
    fontSize: '128px',
    color: '#fff',
    fontFamily: 'Zen Kurenaido',
    animation: `${textFadeLoop} 2s infinite alternate`,
  }));
  return (
    <PageContainer>
      <PageTitle>Akinator Simulator</PageTitle>
      <PageButton text="jogar" width="30%" onClick={() => navigate(`/question`)} />
    </PageContainer>
  );
};
