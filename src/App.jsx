import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
const HomePage = lazy(() => import('./pages/home_page/HomePage'));
const MoviesPage = lazy(() => import ('./pages/movies_page/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/movie_details_page/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/movie_cast/MovieCast'));
const MovieReviews = lazy(() => import('./components/movie_reviews/MovieReviews'));
const NotFound = lazy(() => import('./pages/not_found/NotFound'));

const App = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<Loader/>}>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App;
