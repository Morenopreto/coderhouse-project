import { React, useState } from "react";
import ItemDetail from './itemDetail';
import { useParams, useLocation } from 'react-router-dom';

function ItemDetailContainer() {

    const { id_producto } = useParams();
    const [contador, setContador] = useState(0)
    console.log(useLocation())
    // const lista = [1, 2, 3]
    const lista = [
        { 'id': 1, 'price': 200, 'name': "Remera barata", 'max': 3, 'min': 1, 'initial': 0, 'detalle': 'Remera de polyester color rojo' },
        { 'id': 2, 'price': 500, 'name': "Remera medio", 'max': 4, 'min': 2, 'initial': 0, 'detalle': 'Remera de polyester color azul' },
        { 'id': 3, 'price': 1200, 'name': "Remera cara", 'max': 7, 'min': 3, 'initial': 0, 'detalle': 'Remera de polyester color amarillo' }]

    let renderItem, sumar, disminuir;
    // console.log()
    lista.filter(item => {
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
        return (<ItemDetail disminuir={disminuir} sumar={sumar} detalle={renderItem.detalle} max={renderItem.max} min={renderItem.min} contador={contador} name={renderItem.name} price={renderItem.price} />)
    // } else {
        // return (<h1>Nada que ver aqui</h1>)
    // }

}


export default ItemDetailContainer;



