import { createContext, useState, useEffect } from 'react';
import { GetDBFirebase } from '../Tools/firebaseFactory'
export const ProductContext = createContext();


const ProductProvider = ({ children }) => {

    const DBconnection = GetDBFirebase();
    const [lista, setLista] = useState();
    const [categoriesState, setCategoriesState] = useState();
    const [productoById, setproductoById] = useState();
    const productos = DBconnection.collection('productos');
    const categories = DBconnection.collection('categories');


    useEffect(() => {
        
        categories
            .get()
            .then((res) => {
                if (res.size === 0) {
                    console.log('No existe la coleccion')
                } else {
                    setCategoriesState(res.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log(categoriesState)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const getById = (id) => {

        productos.doc(id)
            .get()
            .then((doc) => {

                if (!doc.exists) {
                    console.log('No existe el id')
                    setproductoById(null)
                } else {
                    setproductoById({ ...doc.data(), id: doc.id });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getByCategorie = (categories) => {

        setLista()
        const filter = productos.where("categories", "==", categories);
        filter
            .get()
            .then((result) => {

                if (result.size === 0) {
                    console.log('No existe la categoria')
                    setLista(null)
                } else {
                    setLista(result.docs.map(doc => ({ ...doc.data(), id: doc.id})));
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <ProductContext.Provider
            value={{
                lista: lista,
                productoById: productoById,
                getById: getById,
                categoriesState: categoriesState,
                getByCategorie: getByCategorie
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;


