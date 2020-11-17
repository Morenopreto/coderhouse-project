import React, { useContext } from 'react';
import { CartContext } from '../context/globalContext'


function Cart() {

    const cartByContext = useContext(CartContext)
    console.log('cartByContext', CartContext)
    return (
        <div>
            cantidad de item comrpados
            {cartByContext.}
        </div>

    )
}
export default Cart;