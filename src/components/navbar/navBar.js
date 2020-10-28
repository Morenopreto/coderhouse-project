import React from 'react';
import './navBar.css';
import CartIcon from './cartIcon'


function NavBar() {
  return (
    
    <div className="div-navBar">
      <nav id='navBar'>
          <ul id='ul-navBar'>
              <li>Inicio</li>
              <li>Productos</li>
              <li>FAQ</li>
              <li><CartIcon/></li>
              
          </ul>
      </nav>
    </div>
  );
}


export default NavBar;
