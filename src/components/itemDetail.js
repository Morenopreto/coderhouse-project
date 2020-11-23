import React, { useContext } from 'react';
import { CartContext } from '../context/globalContext'
import ItemCount from './itemCount';

function ItemDetail({ sumar, disminuir, descripcion, max, min,id, contador, name, price }) {
// function ItemDetail() {
    console.log('imteDetail')
    // const cartByContext = useContext(CartContext);
    // let { lista } = cartByContext;

    return (
        <div>
            {/* <img /> */}
            <h1>{name}</h1>
            <p>{descripcion}</p>
            <label>{price}</label>
            <ItemCount max={max} min={min} sumar={sumar} disminuir={disminuir} contador={contador} id={id} name={name} />
        </div>
    )
}
export default ItemDetail;

