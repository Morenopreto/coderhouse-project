import React from 'react';
import ItemCount from './itemCount';
import './css/itemDetail.css';
function ItemDetail({ sumar, disminuir, descripcion, stock, min, id, contador, name, price,setContador, source, detailSource }) {


    return (
        <div className='itemDetailDiv'>
            <div className='imgDetailCtn'>
            <img className='imgDetail' src={detailSource} alt={`img-${name}`}/>
            </div>
            <h1>{name}</h1>
            <p>{descripcion}</p>
            <label className='priceDetail'>${price}</label>
            <ItemCount setContador={setContador} sumar={sumar} disminuir={disminuir} stock={stock} min={min}  contador={contador} id={id} name={name} price={price} source={source} descripcion={descripcion} />
        </div>
    )
}
export default ItemDetail;

