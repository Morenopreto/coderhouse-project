import React, {useContext } from 'react';
import Item from './items';
import Loading from './loading';
import './css/itemList.css';
import { CardDeck } from 'react-bootstrap';
import { CartContext } from '../context/globalContext'


function ItemList() {
    const cartByContext = useContext(CartContext);
    let {lista} = cartByContext;
    console.log('lista')
    console.log(lista)
    if (!lista) {
        return <div><Loading/></div>
    } else {

        return (
            // <ul className="itemListUl">
            <CardDeck className='itemListUl'>
                <h1>Productos</h1>
                {lista?.map((item, key) => (
                    (<Item key={key} lista={item} />)
                ))}
            </CardDeck>
            // {/* </ul> */}
        )
    }
}
export default ItemList;