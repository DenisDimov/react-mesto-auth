import Logo from '../image/logo.svg'
import {Link} from 'react-router-dom'

const Header = ({desc}) => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="лого" />
      <Link to="sign-up" className="header__title">{desc}</Link>
    </header>
  );
}
export default Header;
