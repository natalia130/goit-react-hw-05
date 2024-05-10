import css from './MovieDetailsPage.module.css';
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../api/movies-api";
import GoBackLink from '../../components/go_back_link/GoBackLink';

const MovieDetailsPage = () => {
    const location = useLocation();
    const backLinkHref = location.state ?? "/movies";

    const { movieId } = useParams();

    const [movieInfo, setMovieInfo] = useState({});
    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await fetchMovieById(movieId);
                setMovieInfo(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovie();
    }, [movieId]);
    
    return (
        <div className={css.container}>
            <GoBackLink to={backLinkHref}/>
            <div className={css.info}>
                <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title}></img>
                <div>
                    <h2>{movieInfo.title}</h2>
                    <p>User score: { movieInfo.vote_average && movieInfo.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movieInfo.overview && movieInfo.overview}</p>
                    <h3>Genres</h3>
                    <p>{movieInfo.genres && movieInfo.genres.map(genre => genre.name).join(", ")}</p>
                </div>
            </div>
            <p>Additional information</p>
            <ul>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default MovieDetailsPage;