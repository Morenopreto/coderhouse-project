import { createContext, useState, useRef, useEffect } from 'react';
import { GetDBFirebase } from '../Tools/firebaseFactory'
export const CartContext = createContext();
export const ProductContext = createContext();


const CartProvider = ({ children }) => {

    // console.log(children)
    let carro = useRef(0)
    const [lista, setLista] = useState();
    const [carritoState, setcarritoState] = useState([]);
    const [carritoQty, setcarritoQty] = useState(0);
    // const [contador, setContador] = useState(0)

    //LLAMADO A LA API
    const DBconnection = GetDBFirebase();


    useEffect(() => {
        console.log('efecto')
        //comentar lineas 26 a 41 si linea 23 descomentada
        setLista([1,2,3,4])
        

        // if (!lista) {
        //     const productos = DBconnection.collection('productos')
        //     productos
        //         .get()
        //         .then((res) => {
        //             console.log('llamo')
        //             if (res.size === 0) {
        //                 console.log('No existe la coleccion')
        //             } else {
        //                 setLista(res.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        //             }
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // }


    })

    //METHODS PARA CARRITO
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
                qty: carritoQty,
                lista: lista
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


// export default { CartProvider, ProductProvider };
export default CartProvider;


