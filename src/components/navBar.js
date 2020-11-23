import React, { useContext } from 'react';
import './css/navBar.css';
import CartIcon from './cartIcon'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/globalContext';
import logo from '../assets/logoRedoRojo.png';



function NavBar() {

  const cartByContext = useContext(CartContext);
  console.log('navBar')

  return (

    // <div className="div-navBar">
    <nav id='navBar'>
      <span className='quart first'>
        <ul id='ul-navBar'>
          <li className='li-navBar'><NavLink className='link' to='/'>Inicio</NavLink></li>
          <li className='li-navBar' onClick={cartByContext.getProductos()}><NavLink className='link' to='/productos'>Productos</NavLink></li>
        </ul>
      </span>
      <span className='quart second'><img className='logo' src={logo} alt='logo-frodas-burger' /></span>
      <span className='quart third'><NavLink className='link' to='/carrito'><CartIcon /></NavLink>{cartByContext.qty ? cartByContext.qty : ''}</span>
    </nav>
    // </div>
  );
}


export default NavBar;
