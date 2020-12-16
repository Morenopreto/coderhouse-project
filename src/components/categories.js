
import React, { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import { ProductContext } from '../context/globalContext';
import NotFoundPage from '../components/NotFoundPage';
import Loading from './loading';
import './css/itemDetail.css';
import './css/categories.css';


function Categories() {



    const { categoriesState, getByCategorie } = useContext(ProductContext);



    if (categoriesState === null) {
        return <NotFoundPage />
    }
    else if (!categoriesState) {
        return <div><Loading /></div>
    }
    else {

        return (

            <CardDeck className='itemListUl'>

                <h1>Categorias</h1>
                {categoriesState?.map((item, key) => (
                    // (<Item key={key} lista={item} id={item.id} />)
                    // (<Card className="item-div" onClick={() => getByCategorie(item.id)}>
                    (<Card className="item-div" key={key}>
                        <NavLink className="item-link"
                            onClick={() => { getByCategorie(item.id) }}
                            to={{
                                pathname: `/categories/${item.id}`
                            }}>
                            {/* <div className='img-ctn'> */}
                            <div className='img-ctn'>
                                <Card.Img className='item-img' variant="top" src={`${item.source}`} alt={`img-${item.name}`} />
                            </div>
                            <Card.Body className="cardBody">
                                <h1 className='nombre nombreCat'>{item.name}</h1>
                            </Card.Body>
                        </NavLink>
                    </Card >)
                ))
                }
            </CardDeck >



        )
    }
}
export default Categories;



