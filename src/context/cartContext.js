
import { createContext, useState, useRef } from 'react';
import { GetDBFirebase } from '../Tools/firebaseFactory'


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    let carro = useRef(0)
    const [carritoState, setcarritoState] = useState([]);
    const [carritoQty, setcarritoQty] = useState(0);
    const [buyerState, setbuyerState] = useState({
        name: null,
        surname: null,
        mail: null
    });



    //METHODS PARA CARRITO

    const addItem = (contador, name, id, price, descripcion,source) => {

        if (!carritoState.length) {
            let newEntry = {
                id: id,
                count: contador,
                name: name,
                price: price,
                descripcion: descripcion,
                source:source
            }

            setcarritoState([...carritoState, newEntry]);
            actualizaQty(newEntry.count)

        } else {
            if (carritoState[carritoState.findIndex(item => item.id === id)]) {
                console.log('El producto existe en el carrito')
                carritoState[carritoState.findIndex(item => item.id === id)].count += contador;
                actualizaQty(contador)
                return;
            }

            let newEntry = {
                id: id,
                count: contador,
                name: name,
                price: price,
                descripcion: descripcion,
                source:source
            }

            setcarritoState([...carritoState, newEntry]);
            actualizaQty(newEntry.count)
        }
        
    };
    const sumaUno = (id) => {
        carritoState[carritoState.findIndex(item => item.id === id)].count += 1;
        actualizaQty(1)
        return;
    }
    const restaUno = (id) => {
        carritoState[carritoState.findIndex(item => item.id === id)].count -= 1;
        actualizaQty(-1)
        return;
    }

    const setOrder = async () => {
        if (!buyerState.name) {
            alert('debe inciar sesion')
        } else {

            const DBconnection = GetDBFirebase();
            const order = DBconnection.collection('orders')
            const buyerInfo = {
                name: buyerState.name,
                surname: buyerState.surname,
                mail: buyerState.mail
            }

            const newOrder = {
                date:new Date(),
                buyer: buyerInfo,
                items: carritoState,
                total: carritoState.reduce((total, prod) => total += (prod.price * prod.count), 0)
            }
            try {

                const { id } = await order.add(newOrder);
                alert(`El id de tu compra es ${id}`)
                console.log(id)
                limpiar();
                alert(`Gracias por su compra!`)

            } catch (err) {
                console.log('Error')
            }

        }
    }
    const limpiar = () => {
        setcarritoState([]);
        setcarritoQty(0);
        carro.current = 0;
        actualizaQty(carro.current)
    }
    const actualizaQty = (data) => {
        console.log(data);
        carro.current += data;
        setcarritoQty(carro.current);
    }
    const eliminaProducto = (id, qty) => {
        setcarritoState(carritoState.filter(item => item.id !== id));
        carro.current -= qty;
        setcarritoQty(carro.current);
    }

    return (
        <CartContext.Provider
            value={{
                addItem: addItem,
                setOrder: setOrder,
                limpiar: limpiar,
                eliminaProducto: eliminaProducto,
                sumaUno: sumaUno,
                restaUno: restaUno,
                carritoState: carritoState,
                qty: carritoQty,
                buyerState: buyerState,
                setbuyerState: setbuyerState

            }}
        >
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;