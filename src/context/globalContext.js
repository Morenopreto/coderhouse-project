import { createContext, useState, useRef } from 'react';
import { GetDBFirebase } from '../Tools/firebaseFactory'
export const CartContext = createContext();
export const ProductContext = createContext();


const CartProvider = ({ children }) => {
    let carro = useRef(0)
    const [lista, setLista] = useState()
    const [carritoState, setcarritoState] = useState([]);
    const [carritoQty, setcarritoQty] = useState(0);
    // const [contador, setContador] = useState(0)

    //LLAMADO A LA API
    const DBconnection = GetDBFirebase();

    function getProductos() {
        const productos = DBconnection.collection('productos')
        productos
            .get()
            .then((res) => {
                if (res.size === 0) {
                    console.log('No existe la coleccion')
                } else {
                    setLista(res.docs.map(doc => ({ ...doc.data(), id: doc.id })));

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function getProducto(productoFiltrado) {
        // let citiesRef = db.collection('cities');
        const producto = DBconnection.collection('productos')
        producto.where('id', '==', productoFiltrado).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }

                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }


    // new Promise((resolve, reject) => {

    //     setTimeout(() => {
    //         resolve([
    //             { 'id': 1, 'price': 2200, 'name': "Caja Frodas x6", 'max': 3, 'min': 1, 'initial': 0, 'detalle': '6 frodas 6 panes 12 cheddar 12 bacons' },
    //             { 'id': 2, 'price': 500, 'name': "Ryan Fox", 'max': 4, 'min': 2, 'initial': 0, 'detalle': 'Lata ipa' },
    //             { 'id': 3, 'price': 500, 'name': "Ryan Fox", 'max': 4, 'min': 2, 'initial': 0, 'detalle': 'Lata ipa' },
    //             { 'id': 4, 'price': 500, 'name': "Ryan Fox", 'max': 4, 'min': 2, 'initial': 0, 'detalle': 'Lata ipa' },
    //             { 'id': 5, 'price': 500, 'name': "Ryan Fox", 'max': 4, 'min': 2, 'initial': 0, 'detalle': 'Lata ipa' },
    //             { 'id': 6, 'price': 110, 'name': "4 Panes extra", 'max': 7, 'min': 1, 'initial': 0, 'detalle': 'Pan de papa' }])
    //     }, 3000)

    // })
    //     .then(response => {
    //         setLista(response)
    //         // console.log(lista)
    //     })

    //     .catch(err => { console.log(err) })


    /// METHODS PARA ITEM COUNT 
    // const sumar = () => {

    //     if (contador < lista.max) {
    //         setContador(contador + 1)
    //     }
    // }
    // const disminuir = () => {

    //     if (contador > lista.min)
    //         setContador(contador - 1)
    // }

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
                getProducto: getProducto,
                // lista: lista ? lista : null
                lista: lista,
                getProductos: getProductos
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


// export default { CartProvider, ProductProvider };
export default CartProvider;


