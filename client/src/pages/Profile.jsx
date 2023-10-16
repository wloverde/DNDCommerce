import { useState } from 'react';
import userProfile from '../assets/images/user-profile.png';
import './Profile.css';

const Profile = ({ currentUser }) => {
  return (
    <div className='profile'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              <img
                src={userProfile}
                style={{ maxWidth: '96px', maxHeight: '96px' }}
              />
            </div>
          </div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Welcome {currentUser.username}!</h2>
          <h3 className='card-text'>Email: {currentUser.email}</h3>
          <h3 className='card-text'>Username: {currentUser.username}</h3>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
