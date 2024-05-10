import css from './Header.module.css';
import Navigation from '../navigation/Navigation';
const Header = () => {
    return (
        <header className={css.header}>
            <Navigation></Navigation>
        </header>
    );
};

export default Header;