import React, { useState, useEffect } from 'react';
import './itemCount.css';



function ItemCount({ max, min, src }) {
    const [contadorDeClick, setContadorDeClicks] = useState(parseInt(min));

    const sumar = () => {
        if (contadorDeClick < max) {
            setContadorDeClicks(contadorDeClick + 1)
        }
    }
    const disminuir = () => {
        if (contadorDeClick > min)
            setContadorDeClicks(contadorDeClick - 1)
    }

    return (

        <div className='div-item'>
            <img src={src} />
            <button className='masMenos' onClick={sumar} max={max} min={min}>+</button>
            <p>{contadorDeClick}</p>
            <button className='masMenos' onClick={disminuir} max={max} min={min}>-</button>
            <button className='agregarCarrito'>Agregar al carrito</button>
        </div>

    )

}
export default ItemCount;