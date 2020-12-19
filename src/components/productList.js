import React, { useContext,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Item from './items';
import Loading from './loading';
import NotFoundPage from '../components/NotFoundPage';
import './css/itemList.css';
import { CardDeck } from 'react-bootstrap';
import { ProductContext } from '../context/productContext'


function ItemList() {

    const {id_categories} = useParams();
    const { getByCategorie, lista } = useContext(ProductContext);

    useEffect(() => {
        getByCategorie(id_categories)
    }, [id_categories])



    if (lista === null) {
        return <NotFoundPage />
    }
    else if (!lista) {
        return <div><Loading /></div>
    } else {

        return (
            <CardDeck className='itemListUl'>

                <h1>Productos</h1>
                {lista?.map((producto, key) => (

                    (<Item key={key} lista={producto} id={producto.id} />)
                ))}
            </CardDeck>
        )
    }
}
export default ItemList;