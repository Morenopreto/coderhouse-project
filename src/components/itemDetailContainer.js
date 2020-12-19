import { React, useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/productContext';
import ItemDetail from './itemDetail';
import Loading from './loading';
import NotFoundPage from '../components/NotFoundPage';



function ItemDetailContainer() {

    let { id_producto } = useParams();
    const [contador, setContador] = useState(0)
    const { productoById, getById } = useContext(ProductContext);
    
    useEffect(() => {
        getById(id_producto);
    }, [])

    let sumar = () => {
        
        if (contador === 0) {
            setContador(productoById.min)
        } else if (contador < productoById.stock) {
            setContador(contador + 1)
        }

    }
    let disminuir = () => {
        if (contador === productoById.min) {
            setContador(0);
        } else if (contador > productoById.min)
            setContador(contador - 1)
        

    }

        
    if(productoById===null){
        return <NotFoundPage/>
    }
    else if (!productoById) {
        return <div><Loading /></div>
    }
    else {
        return (<ItemDetail disminuir={disminuir} sumar={sumar} descripcion={productoById.descripcion} stock={productoById.stock} min={0} contador={contador} name={productoById.title} price={productoById.price} source={productoById.detailSource} id={id_producto} setContador={setContador} />)
    }

}


export default ItemDetailContainer;



