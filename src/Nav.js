import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

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
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
          alt=''
        />
        <img
          className='nav__avatar'
          src='https://lh3.googleusercontent.com/proxy/dGIa6iFWH-iJuzQ6ZfyKBhaJkrd09YiVHkxntH6EfR2HbV4JhTxGIVpUKWGrYf8PPv2LjcUxSCvzyt9GNkryzi5r2jNGyGy_khCXhtI2P6Vdcxb8jVqJzYzvb5LZ'
          alt=''
        />
      </div>

      <h1>This is the nav</h1>
    </div>
  );
};

export default Nav;
