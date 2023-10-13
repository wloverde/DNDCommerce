import { useState } from 'react';

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    username: '',
    password: '',
  });
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register now!</h1>
          <p className='py-6'>
            Signup now to start ordering all of your favorite DnD items.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form
            className='card-body'
            onSubmit={(e) => {
              e.preventDefault();
              console.log(formState);
            }}
          >
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Username</span>
              </label>
              <input
                type='text'
                placeholder='Username'
                className='input input-bordered'
                required
                value={formState.username}
                onChange={(e) => {
                  setFormState({ ...formState, username: e.target.value });
                }}
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
                value={formState.email}
                onChange={(e) => {
                  setFormState({ ...formState, email: e.target.value });
                }}
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
                value={formState.password}
                onChange={(e) => {
                  setFormState({ ...formState, password: e.target.value });
                }}
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
