import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { QuestionPage } from '../pages/QuestionPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage />} />
    </Routes>
  );
};

export default MainRoutes;
