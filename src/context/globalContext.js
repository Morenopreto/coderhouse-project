import { createContext, useState, useRef } from 'react';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    let carro = useRef(0)


    const [carritoState, setcarritoState] = useState([]);
    const [carritoQty, setcarritoQty] = useState(0)

    const addItem = (contador, name) => {
        let newEntry = {
            count: contador,
            name: name
        }
        setcarritoState([...carritoState, newEntry]);
        actualizaQty(newEntry.count)

    };
    const actualizaQty = (data) => {
        console.log(data);
        carro.current += data;
        setcarritoQty(carro.current);
    }

    return (
        <CartContext.Provider

            value={{
                comprar: addItem,
                carritoState: carritoState,
                qty: carritoQty

            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;