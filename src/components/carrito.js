import React, { useContext } from 'react';
import { CartContext } from '../context/globalContext'
import './css/carrito.css'

function Cart() {
console.log('carrito')
    const cartByContext = useContext(CartContext)

    if (!cartByContext.carritoState.length) {
        return <div>No hay items en el carrito</div>
    } else {

        return (
            <ul className="carritoUl" >
                {cartByContext.carritoState?.map((item, key) => (
                    <>
                        <li key={key}>Producto: {item.name}</li>
                        <li key={key}>Cantidad: {item.count}</li>
                    </>
                ))}
            </ul>
        )
    }


}
export default Cart;