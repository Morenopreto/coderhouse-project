import React from 'react';
import './css/navBar.css';
import CartIcon from './cartIcon'
import {Link } from 'react-router-dom';


function NavBar() {
  return (

    <div className="div-navBar">
      <nav id='navBar'>
        <ul id='ul-navBar'>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/productos'>Productos</Link></li>
          <li><Link to='/carrito'><CartIcon /></Link></li>
        </ul>
      </nav>
    </div>
  );
}


export default NavBar;
