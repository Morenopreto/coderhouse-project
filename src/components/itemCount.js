import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';
import './css/itemCount.css';



function ItemCount({ stock, min, contador, id, name, disminuir, sumar, setContador, price, descripcion, source }) {

    const { addItem } = useContext(CartContext);

    return (


        <div className='div-item-count'>
            <div className='div-boton'>

                <Button className='masMenosBoton' onClick={sumar} stock={stock} min={min}>
                    +
                </Button>
                <p>{Number(contador)}</p>

                <Button className='masMenosBoton' onClick={disminuir} stock={stock} min={min}>
                    -
                </Button>
            </div>
            <Button variant="primary" onClick={() => { addItem(contador, name, id, price, descripcion, source); setContador(0) }}>
                Comprar {`${(contador > 0) ? contador : ''}`}
            </Button>


        </div>

    )

}
export default ItemCount;