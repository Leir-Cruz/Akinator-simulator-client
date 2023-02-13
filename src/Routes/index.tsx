import { Route, Routes } from 'react-router-dom';

import { AddCharacterPage } from '../pages/AddCharacterPage';
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
      <Route path={`/questionCharacter/:character`} element={<QuestionCharacterPage />} />
      <Route path="/Character/:character" element={<CharacterPage />} />
      <Route path="/NotFound" element={<NotFoundPage />} />
      <Route path="/AddCharacter/:character" element={<AddCharacterPage />} />
    </Routes>
  );
};

export default MainRoutes;
