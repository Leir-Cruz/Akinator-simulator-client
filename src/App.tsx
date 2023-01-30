import './App.css';

import { PageButton } from './components/Buttons/PageButton';
import { InputContainer } from './components/Containers/InputContainer';
import { PageContainer } from './components/Containers/PageContainer';

function App() {
  return (
    <PageContainer>
      <PageButton text="batata"></PageButton>
      <InputContainer />
    </PageContainer>
  );
}

export default App;
