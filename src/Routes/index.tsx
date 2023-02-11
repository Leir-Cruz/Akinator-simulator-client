import { Route, Routes } from 'react-router-dom';

import { CharacterPage } from '../pages/CharacterPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { QuestionCharacterPage } from '../pages/QuestionCharacterPage';
import { QuestionPage } from '../pages/QuestionPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/questionCharacter" element={<QuestionCharacterPage />} />
      <Route path="/Character" element={<CharacterPage />} />
      <Route path="/NotFound" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
