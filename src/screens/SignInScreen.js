import React from 'react';
import './SignInScreen.css';

const SignInScreen = () => {
  return (
    <div className='signInScreen'>
      <form>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' />
      </form>
    </div>
  );
};

export default SignInScreen;
