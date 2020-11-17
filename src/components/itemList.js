import React, { useState } from 'react';
import Item from './items';
import './css/itemList.css';

function ItemList() {
    const [lista, setLista] = useState()   

    // const creaLista = () => {
    new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                { 'id': 1, 'price': 200, 'name': "Remera barata", 'max': 3, 'min': 1, 'initial': 0, 'detalle': 'Remera de polyester color rojo' },
                { 'id': 2, 'price': 500, 'name': "Remera medio", 'max': 4, 'min': 2, 'initial': 0, 'detalle': 'Remera de polyester color azul' },
                { 'id': 3, 'price': 1200, 'name': "Remera cara", 'max': 7, 'min': 3, 'initial': 0, 'detalle': 'Remera de polyester color amarillo' }])
        }, 1000)

    })
        .then(response => {
            setLista(response)
        })

        .catch(err => { console.log(err) })
    // }
    if (!lista) {
        return <div>Loading</div>
    } else {

        return (
            <ul className="itemListUl">
                {lista?.map((item, key) => (
                    (<Item key={key} id={item.id} name={item.name} price={item.price} max={item.max} min={item.min} initial={item.initial} detalle={item.detalle} />)
                ))}
            </ul>
        )
    }
}
export default ItemList;