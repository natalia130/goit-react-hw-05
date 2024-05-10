import css from './MoviesPage.module.css'
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/search_bar/SearchBar";
import MovieList from "../../components/movie_list/MovieList";
import { fetchSearchingMovies } from "../../api/movies-api";

const MoviesPage = () => {
    const [searchingMovies, setSearchingMovies] = useState([]);
    // const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get('query'); 

    useEffect(() => {
        if (searchValue == null) {
            return;
        }
        async function fetchMovies() {
            try {
                const data = await fetchSearchingMovies(searchValue);
                setSearchingMovies(data.results);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovies();
    }, [searchValue]);

    const handleSearch = (searchQuery) => {
        setSearchParams({ query: searchQuery})
        // setQuery(searchQuery);
    }
    return (
        <div className={css.movies}>
            <SearchBar onSearch={handleSearch}></SearchBar>
            {searchingMovies && <MovieList items={searchingMovies} />}
        </div>
    )
}

export default MoviesPage;