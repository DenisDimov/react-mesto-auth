import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react';
import * as Auth from '../utils/Auth'

const Register = ({title, button}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleChange=(e)=> {
    e.preventDefault()
    Auth.register(email, password)
    .then((res) => {
      if(res.statusCode !== 400) {
        history.push('/sign-in')
      }
    })
  }

  return (
    <div className="auth">
      <p className="auth__header">{title}</p>
      <form className="auth__form" onSubmit={handleChange}>
        <input className="auth__input" placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="auth__input" placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"></input>
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
