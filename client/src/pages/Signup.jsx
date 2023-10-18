import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Signup.css';

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: {
          email: formState.email,
          username: formState.username,
          password: formState.password,
        },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register now!</h1>
          <p className='py-6'>
            Signup now to start ordering all of your favorite DnD items.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handleFormSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Username</span>
              </label>
              <input
                type='text'
                placeholder='Username'
                className='input input-bordered'
                required
                name='username'
                value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Email'
                className='input input-bordered'
                required
                name='email'
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
                required
                name='password'
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
