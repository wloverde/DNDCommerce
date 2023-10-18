import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
  // funcitoning login page using react Link
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Login to gain access to your account information and all your
            favorites.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handleFormSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='input input-bordered'
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Password'
                className='input input-bordered'
                name='password'
                required
                value={formState.password}
                onChange={handleChange}
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
              <Link to={'/signup'} className='form-control mt-6'>
                <button type='button' className='btn btn-primary'>
                  or Signup!
                </button>
              </Link>
            </div>
          </form>
          {error && (
            <div className='form-control mt-6'>
              <p className='py-6'>{error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
