import React from 'react';
import './itemCount.css';
import { Button } from 'react-bootstrap';



function ItemCount({ max, min, src,sumar,disminuir,contadorDeClick }) {
  
    return ( 
 
        <div className='div-item-count'>
            <div className='div-boton'>
                <Button className='masMenosBoton'  pill="true" variant="info" onClick={sumar} max={max} min={min}>
                    +
                </Button>
                <p>{contadorDeClick}</p>

                <Button className='masMenosBoton'  pill="true" variant="info" onClick={disminuir} max={max} min={min}>
                    -
                </Button>
            </div>
            <Button variant="primary">
                Agregar a Carrito
            </Button>
        </div>

    )

}
export default ItemCount;