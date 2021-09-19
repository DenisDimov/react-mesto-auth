import Logo from '../image/logo.svg';
import { Link, Route } from 'react-router-dom';

const Header = ({ userData, signOut }) => {
  const { email } = userData;

  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="лого" />
      <Route exact path="/sign-in">
        <Link to="sign-up" className="header__title">
          Регистрация
        </Link>
      </Route>
      <Route exact path="/sign-up">
        <Link to="sign-in" className="header__title">
          Войти
        </Link>
      </Route>
      <Route exact path="/main">
        <p className="header__profile">{email}</p>
        <button onClick={signOut} className="header__title">
          Выйти
        </button>
      </Route>
    </header>
  );
};
export default Header;
