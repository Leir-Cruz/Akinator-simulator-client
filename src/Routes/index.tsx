import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { QuestionCharacterPage } from '../pages/QuestionCharacterPage';
import { QuestionPage } from '../pages/QuestionPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/questionCharacter" element={<QuestionCharacterPage />} />
    </Routes>
  );
};

export default MainRoutes;
