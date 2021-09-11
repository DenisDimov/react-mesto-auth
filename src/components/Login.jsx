const Login = ({title, button}) => {
  return (
    <div className="auth">
      <p className="auth__header">{title}</p>
      <form className="auth__form">
        <input className="auth__input" placeholder='Email' type='email'></input>
        <input className="auth__input" placeholder='Password' type='current-password'></input>
        <button className='auth__btn'>{button}</button>
      </form>
    </div>
  );
};

export default Login;
