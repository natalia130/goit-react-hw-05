import css from './HomePage.module.css';
import { useState, useEffect } from 'react';
import MovieList from '../../components/movie_list/MovieList';
import { fetchTrendingMovies } from '../../api/movies-api';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await fetchTrendingMovies();
                setTrendingMovies(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovies();
    }, []);


    return (
        <div className={css.home}>
            <h2>Trending today</h2>
            <MovieList items={trendingMovies}></MovieList>
        </div>
    )
}

export default HomePage;