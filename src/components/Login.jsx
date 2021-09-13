import { useState } from "react";
import * as Auth from '../utils/Auth'
import { useHistory } from "react-router-dom";

const Login = ({title, button, handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()


  const handleSubmit=(e)=> {
    e.preventDefault()
    if (!email || !password){
      return;
    }

    Auth.authorize(email, password)
    .then((data) => {
      if (data.token) {
        handleLogin()
        history.push('/main')
      }
    })
  }



  return (
    <div className="auth">
      <p className="auth__header">{title}</p>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input className="auth__input" placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="auth__input" placeholder='Password' type='current-password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button className='auth__btn'>{button}</button>
      </form>
    </div>
  );
};

export default Login;
