import React from 'react';
import './css/itemCount.css';
import { Button } from 'react-bootstrap';
import {CartContext} from '../context/globalContext'



function ItemCount({ max, min, src, sumar, disminuir, contador,id,name }) {

    const cartByContext = React.useContext(CartContext)
    
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
                <Button variant="primary" onClick={()=>cartByContext.comprar(contador,name)}>
                    Comprar {`${(contador > 0) ? contador : ''}`}
                </Button>
                
            </div>
        </div>

    )

}
export default ItemCount;