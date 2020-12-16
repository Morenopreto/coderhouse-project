import React, { useContext,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Item from './items';
import Loading from './loading';
import './css/itemList.css';
import { CardDeck } from 'react-bootstrap';
import { ProductContext } from '../context/globalContext'


function ItemList() {

    // const { lista } = useContext(ProductContext);

    // const {id_categories} = useParams();
    

    // const { productoById, getById } = useContext(ProductContext);
    const { getByCategorie, lista } = useContext(ProductContext);

    // useEffect(() => {
    //     getByCategorie(id_categories);
    //     console.log('id_categories')
    //     console.log(id_categories)
    //     console.log('id_categories')
    // }, [id_categories])



    if (!lista) {
        return <div><Loading /></div>
    } else {

        return (
            // <ul className="itemListUl">
            <CardDeck className='itemListUl'>

                <h1>Productos</h1>
                {lista?.map((producto, key) => (
                    
                    (<Item key={key} lista={producto} id={producto.id} />)
                ))}
            </CardDeck>
            // {/* </ul> */}
        )
    }
}
export default ItemList;