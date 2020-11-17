import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import  {CartContext}  from '../context/globalContext';
import ItemCount from './itemCount';
function ItemDetail({ sumar, disminuir, detalle, max, min, contador, name, price }) {

    const [carritoState, setcarritoState] = useState({
        nombreItem: name,
        itemsIn: 0,
        price:price
    });

    const comprar = () => {
        setcarritoState(contador);
        console.log(carritoState.itemsIn)
    }
    return (
        <CartContext.Provider value={{ comprar: comprar, carritoState: carritoState }}>
            <div>
                {/* <img /> */}
                <h1>{name}</h1>
                <p>{detalle}</p>
                <label>{price}</label>
                <ItemCount sumar={sumar} disminuir={disminuir} max={max} min={min} contador={contador} />
            </div>
        </CartContext.Provider>
    )
}
export default ItemDetail;