import { useFormWithValidation } from '../hooks/useForm';

const Login = ({ title, button, onLogin }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values.email, values.password);
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
          id="password-error">
          {errors.email}
        </span>
        <input
          id="password"
          noValidate
          required
          minLength="4"
          name="password"
          className={`auth__input ${errors.password && 'auth__input_type_error'}`}
          placeholder="Password"
          type="password"
          autoComplete="off"
          value={values.password || ''}
          onChange={handleChange}></input>
        <span
          className={`auth__input-error ${errors.password && 'auth__input-error_active'}`}
          id="password-error">
          {errors.password}
        </span>
        <button className={`auth__btn ${!isValid && 'auth__btn_inactive'}`} disabled={!isValid}>
          {button}
        </button>
      </form>
    </div>
  );
};

export default Login;
