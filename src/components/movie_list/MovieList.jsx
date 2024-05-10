import css from './MovieList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieList = ({ items }) => {
    const location = useLocation();
    return (
        <ul className={css.movies}>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`} state={location}>{item.title}</Link>
                    </li>
                );
            })}
        </ul>
    )
    
};

export default MovieList;