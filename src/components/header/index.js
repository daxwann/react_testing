import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/logo.png';

const Header = (props) => {
  return (
    <header className="header" data-test="header">
      <div className="wrap">
          <img className="logo" data-test="logo" src={Logo} alt="logo"></img>
      </div>
    </header>
  )
}

export default Header;