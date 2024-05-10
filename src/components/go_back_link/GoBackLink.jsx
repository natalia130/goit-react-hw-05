import { Link } from "react-router-dom";
const GoBackLink = ({ to }) => {
    return (
        <Link to={to}>Go back</Link>
    );
};

export default GoBackLink;
