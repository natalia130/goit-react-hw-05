const ReviewCard = ({ review }) => {
    return (
        <div>
            <b>{review.author}</b>
            <p>{review.content}</p>
        </div>
    );
};

export default ReviewCard;