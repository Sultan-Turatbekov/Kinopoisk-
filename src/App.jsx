import { Route, Routes } from 'react-router-dom';
import FilmDetails from './filmFeatures/FilmDetailes/FilmDetails';
import FilmList from './filmFeatures/FilmList/FilmList';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FilmList />} />
      <Route path="/:id" element={<FilmDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
