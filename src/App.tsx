import './App.css';

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PageButton } from './components/Buttons/PageButton';
import { ImageContainer } from './components/Containers/ImageContainer';
import { InputContainer } from './components/Containers/InputContainer';
import { PageContainer } from './components/Containers/PageContainer';
import { GlobalContext } from './components/contexts/useContext';
import MainRoutes from './Routes';

const [copy, setCopy] = useState<string>('exemplo de contexto');

function App() {
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ copy, setCopy }}>
        <PageContainer>
          <PageButton text="batata"></PageButton>
          <InputContainer />
          <ImageContainer
            photoUrl="https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg"
            width="300px"
            height="400px"
          />
        </PageContainer>
      </GlobalContext.Provider>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
