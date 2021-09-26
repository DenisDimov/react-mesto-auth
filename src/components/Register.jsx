import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../hooks/useForm';

const Register = ({ title, button, onRegister }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.email, values.password);
  };

  return (
    <div className="auth">
      <p className="auth__header">{title}</p>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <input
          required
          id="email"
          name="email"
          className={`auth__input ${errors.email && 'auth__input_type_error'}`}
          placeholder="Email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}></input>
        <span
          className={`auth__input-error ${errors.email && 'auth__input-error_active'}`}
          id="email-error">
          {errors.email}
        </span>
        <input
          required
          noValidate
          minLength="4"
          id="password"
          name="password"
          className={`auth__input ${errors.password && 'auth__input_type_error'}`}
          placeholder="Password"
          type="password"
          value={values.password || ''}
          onChange={handleChange}
          autoComplete="off"></input>
        <span
          className={`auth__input-error ${errors.password && 'auth__input-error_active'}`}
          id="password-error">
          {errors.password}
        </span>
        <button className={`auth__btn ${!isValid && 'auth__btn_inactive'}`} disabled={!isValid}>
          {button}
        </button>
      </form>
      <div className="auth__signin">
        <p className="auth__subtitle">Уже зарегистрированы?</p>
        <Link to="sign-in" className="auth__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
