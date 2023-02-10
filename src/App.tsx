import './App.css';

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

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