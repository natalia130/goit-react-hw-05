import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../api/movies-api";
import ActorCard from "./ActorCard";

const MovieCast = () => {

    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await fetchMovieCast(movieId);
                setMovieCast(data.cast);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovie();
    }, [movieId]);

    return (
        <div>
            <ul>
                {movieCast.map((actor) => {
                    return (
                        <li key={actor.cast_id}>
                            <ActorCard actor={actor}></ActorCard>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MovieCast;