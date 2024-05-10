import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../api/movies-api";
import ReviewCard from "./ReviewCard";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await fetchMovieReviews(movieId);
                setMovieReviews(data.results);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovie();
    }, [movieId]);

    return (
        <div>
            <ul>
                {movieReviews.map((review) => {
                    return (
                        <li key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MovieReviews;