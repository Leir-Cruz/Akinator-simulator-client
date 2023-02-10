import './App.css';

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PageButton } from './components/Buttons/PageButton';
import { ImageContainer } from './components/Containers/ImageContainer';
import { InputContainer } from './components/Containers/InputContainer';
import { PageContainer } from './components/Containers/PageContainer';
import { GlobalContext } from './contexts/useContext';
import MainRoutes from './Routes';

//const [copy, setCopy] = useState<string>('exemplo de contexto');

function App() {
  return (
    <BrowserRouter>
      {/* <GlobalContext.Provider value={{ copy, setCopy }}> */}
        <MainRoutes/>
      {/* </GlobalContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;