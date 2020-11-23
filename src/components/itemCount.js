import React from 'react';
import './css/itemCount.css';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/globalContext'



// function ItemCount() {
// function ItemCount({ max, min, src, sumar, disminuir, contador, id, name }) {
function ItemCount({ max, min, src, contador, id, name, disminuir, sumar }) {
    console.log('itemm count')
    const cartByContext = React.useContext(CartContext);
    const { comprar } = cartByContext;
    return (


        <div className='div-item-count'>
            <div className='div-boton'>

                <Button className='masMenosBoton' onClick={sumar} max={max} min={min}>
                    +
                </Button>
                <p>{contador}</p>

                <Button className='masMenosBoton' onClick={disminuir} max={max} min={min}>
                    -
                </Button>
            </div>
            <Button variant="primary" onClick={() => comprar(contador, name)}>
                Comprar {`${(contador > 0) ? contador : ''}`}
            </Button>


        </div>

    )

}
export default ItemCount;