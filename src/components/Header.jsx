import Logo from '../image/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="лого" />
    </header>
  );
}
export default Header;
