import { React, useState, useContext } from "react";
import ItemDetail from './itemDetail';
import { useParams, useLocation } from 'react-router-dom';
import { CartContext } from '../context/globalContext'


function ItemDetailContainer() {
    console.log('itemDetailContainer')
    const { id_producto } = useParams();
    const [contador, setContador] = useState(0)
    // console.log(useLocation())
    // // const lista = [1, 2, 3]
    const cartByContext = useContext(CartContext);
    let { lista } = cartByContext;

    let renderItem, sumar, disminuir;
    // console.log()
    lista?.filter(item => {
        if (item.id == id_producto) {
            renderItem = item;
            sumar = () => {
                if (contador === 0) {
                    setContador(item.min)
                } else if (contador < item.max) {
                    setContador(contador + 1)
                }
            }
            disminuir = () => {
                if (contador === item.min) {
                    setContador(0);
                } else if (contador > item.min)
                    setContador(contador - 1)
            }
        }
    })

    // if (renderItem) {
    // return (<ItemDetail disminuir={disminuir} sumar={sumar} detalle={renderItem.descripcion} max={renderItem.max} min={renderItem.min} contador={contador} name={renderItem.name} price={renderItem.price} />)
    return (<ItemDetail disminuir={disminuir} sumar={sumar} detalle={renderItem.descripcion} max={4} min={0} contador={contador} name={renderItem.title} price={renderItem.price} />)
    // } else {
    // return (<h1>Nada que ver aqui</h1>)
    // }

}


export default ItemDetailContainer;



