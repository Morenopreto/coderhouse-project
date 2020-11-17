import React from 'react';
import './css/itemCount.css';
import { Button } from 'react-bootstrap';
import {CartContext} from '../context/globalContext'



function ItemCount({ max, min, src, sumar, disminuir, contador }) {

    const cartByContext = React.useContext(CartContext)
    console.log(cartByContext)
    return (


        <div className='div-item-count'>
            <div className='div-boton'>
                <Button className='masMenosBoton' pill="true" variant="info" onClick={sumar} max={max} min={min}>
                    +
                </Button>
                <p>{contador}</p>

                <Button className='masMenosBoton' pill="true" variant="info" onClick={disminuir} max={max} min={min}>
                    -
                </Button>
                <Button variant="primary" onClick={cartByContext.comprar}>
                    Comprar {`${(contador > 0) ? contador : ''}`}
                </Button>
                <p>prueba {cartByContext.carritoState}</p>
            </div>
        </div>

    )

}
export default ItemCount;