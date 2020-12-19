import React, { useContext, useState } from 'react';
import logo from '../assets/logoRedoRojo.png';
import CartIcon from './icons/cartIcon'
import SignIn from './SignIn';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { ProductContext } from '../context/productContext';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import './css/navBar.css';




function NavBar() {

  const { qty } = useContext(CartContext);
  const { categoriesState } = useContext(ProductContext);

  const [show, setShow] = useState(false);
  const [time, setTimeState] = useState(5000);
  const [showTooltip, setshowTooltip] = useState(false);
  const [buttonLabel, setbuttonLabel] = useState('REGISTRATE');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const timeControl = () => {
    setshowTooltip(false)
  };


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <ul className='downHoverUl'>
        {categoriesState?.map((item, key) => (
          (
            <NavLink key={`${key}-Navlink`} className="downHover" to={{
              // pathname: `categories/${item.id}/${item.name}`
              pathname: `/categories/${item.id}`
            }}>
              <li key={`${key}-li`} className='downHoverLi' onClick={() => { timeControl() }}>{item.name} </li>

            </NavLink>
          )
        ))
        }
      </ul>
    </Tooltip>
  );


  return (

    // <div className="div-navBar">
    <nav id='navBar'>
      <span className='quart first'>
        <ul id='ul-navBar'>
          <li className='li-navBar'><NavLink className='link' to='/'>Inicio</NavLink></li>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: time }}
            overlay={renderTooltip}
            show={showTooltip}

          >
            <li className='li-navBar'><NavLink className='link' to='/categories' onMouseEnter={() => { setshowTooltip(categoriesState ? true : false); setTimeout(() => { timeControl() }, time); setTimeState(5000) }}>Categorias</NavLink></li>
          </OverlayTrigger>
        </ul>
      </span>
      <span className='quart second'><img className='logo' src={logo} alt='logo-frodas-burger' /></span>
      <div className='quart third'>
        <button className='butNavBar' onClick={handleShow}>{buttonLabel}</button>
        <NavLink to='/carrito' className='linkCart'><button className='butNavBar butNavBarReves'><span className='spanCartNav'><CartIcon /><span className='qty'>{qty ? qty : ' '}</span></span></button></NavLink>
      </div>
      <SignIn show={show} handleClose={handleClose} setbuttonLabel={setbuttonLabel} />
    </nav>
    // </div>
  );
}


export default NavBar;


