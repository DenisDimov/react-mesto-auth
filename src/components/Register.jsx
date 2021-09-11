import {Link} from 'react-router-dom'

const Register = ({title, button}) => {
  return (
    <div className="auth">
      <p className="auth__header">{title}</p>
      <form className="auth__form">
        <input className="auth__input" placeholder='Email' type='email'></input>
        <input className="auth__input" placeholder='Password' type='password'></input>
        <button className='auth__btn'>{button}</button>
      </form>
      <div className="auth__signin">
          <p className='auth__subtitle'>Уже зарегистрированы?</p>
          <Link to="sign-in" className="auth__login-link">Войти</Link>
        </div>
    </div>
  );
};

export default Register;
