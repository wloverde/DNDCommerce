import { useState } from 'react';
import './Login.css';

const Login = () => {
  // funcitoning login page using react Link
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const emailReg = /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{1,6})$/;

  return (
    <div>
      <div className='content-flex-column login-container'>
        <h2>Returning Users</h2>
        <h3>Login</h3>
        <form>
          <div className='content-flex-column form-input-container'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='login-email'
              value={formState.email}
              onChange={(e) => {
                setFormState({ ...formState, email: e.target.value });
                emailReg.test(formState.email)
                  ? setIsValid(true)
                  : setIsValid(false);
                setIsEmailEmpty(false);
              }}
            />
          </div>
          <div className='content-flex-column form-input-container'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='login-password'
              value={formState.password}
              onChange={(e) => {
                setFormState({ ...formState, password: e.target.value });
                setIsEmailEmpty(false);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
