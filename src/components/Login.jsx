import { useState } from 'react';

const Login = ({ title, button, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className="auth">
      <p className="auth__header">{title}</p>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <input
          className="auth__input"
          placeholder="Password"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <button className="auth__btn">{button}</button>
      </form>
    </div>
  );
};

export default Login;
