import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { PageButton } from './components/Buttons/PageButton';
import { ImageContainer } from './components/Containers/ImageContainer';
import { InputContainer } from './components/Containers/InputContainer';
import { PageContainer } from './components/Containers/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <PageButton text="batata"></PageButton>
        <InputContainer />
        <ImageContainer
          photoUrl="https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg"
          width="300px"
          height="400px"
        />
      </PageContainer>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
