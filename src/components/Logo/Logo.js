import React from 'react';
import classes from './Logo.css';
import Logo from '../../assets/images/burger-logo.png';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={Logo} alt='Burger Logo' />
    </div>
  );
};

export default Logo;
