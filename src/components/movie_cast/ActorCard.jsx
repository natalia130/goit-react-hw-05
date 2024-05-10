import css from './ActorCard.module.css';
const ActorCard = ({ actor }) => {
    return (
        <div className={css.actor}>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
        </div>
    );
};

export default ActorCard;