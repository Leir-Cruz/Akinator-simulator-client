import './App.css';

import { BrowserRouter } from 'react-router-dom';

import { ContextProvider } from './contexts/useContext';
import MainRoutes from './Routes';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
