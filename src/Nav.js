import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img
          onClick={() => history.push('/')}
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
          alt=''
        />
        <img
          onClick={() => history.push('/profile')}
          className='nav__avatar'
          src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Nav;
