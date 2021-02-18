import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import ProfilePic from './img/profile.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counterSlice';
import { auth } from '../firebase';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit profile</h1>
        <div className='profileScreen__info'>
          <img src={ProfilePic} alt='' />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <button
                onClick={() => auth.signOut()}
                className='profileScreen__signOut'>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
