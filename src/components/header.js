import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../App.css';
import logo from '../includes/imgs/logo.png'

function Header() {
  return (
    <div className="header"> 
        <img src={logo} alt='logo'  height="20"/>
        <Link to="/home">Home</Link>
    </div>
  );
}

export default Header;
