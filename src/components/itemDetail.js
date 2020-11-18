import React from 'react';

import ItemCount from './itemCount';

function ItemDetail({ sumar, disminuir, detalle, max, min, contador, name, price }) {


    return (
        <div>
            {/* <img /> */}
            <h1>{name}</h1>
            <p>{detalle}</p>
            <label>{price}</label>
            <ItemCount sumar={sumar} disminuir={disminuir} max={max} min={min} contador={contador} name={name} />
        </div>
    )
}
export default ItemDetail;