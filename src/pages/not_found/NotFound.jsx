import css from './NotFound.module.css';
import { Link } from "react-router-dom";
const NotFound = () => {
    
    return (
        <div className={css.notfound}>
            <h1>Page not found!</h1>
            <Link to={'/'}>Back home</Link>
        </div>
    )
}

export default NotFound;