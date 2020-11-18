import React, { useContext, useLayoutEffect, useRef } from 'react';
import './css/navBar.css';
import CartIcon from './cartIcon'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/globalContext'


function NavBar() {
  // let enCarrito = useRef(0);
  // let enCarritoAnt;
  const cartByContext = useContext(CartContext);
  // console.log(cartByContext.qty)
  useLayoutEffect(() => {
    
    console.log('ACTUALIZO')
  });

  
  return (

    <div className="div-navBar">
      <nav id='navBar'>
        <ul id='ul-navBar'>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/productos'>Productos</Link></li>
          <li><Link to='/carrito'><CartIcon /></Link>{cartByContext.qty ? cartByContext.qty : ''}</li>
        </ul>
      </nav>
    </div>
  );
}


export default NavBar;
