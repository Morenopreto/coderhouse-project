import { React, useState, useContext } from 'react';
// import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import ItemCount from './itemCount'
import { Card } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { ProductContext } from '../context/globalContext'
import './css/items.css';


function Item({ lista }) {
    
    let { id, title, price, stock, min, descripcion, source } = lista;
    const { getById } = useContext(ProductContext);
    const {id_categories} = useParams()
    const [contador, setContador] = useState(0)

    const sumar = () => {

        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const disminuir = () => {

        if (contador > min)
            setContador(contador - 1)
    }


    return (
        <Card className="item-div" onClick={() => getById(id)}>
            <NavLink className="item-link" to={{
                pathname: `/categories/${id_categories}/${id}`
                // pathname: `/productos/${id}`
            }}>
                <span className='img-ctn'>
                    <Card.Img className='item-img' variant="top" src={source} alt={`imagen-${title}`} />
                </span>
                <Card.Body className="cardBody">
                    <ul className="itemUl">
                        <li className='nombre'>{title}</li>
                        <li className='precio'>${price}</li>
                    </ul>

                </Card.Body>
            </NavLink>
            <Card.Footer className='cardFooter'>
                <ItemCount disminuir={disminuir} sumar={sumar} setContador={setContador} contador={contador} stock={stock} min={min} name={title} id={id} price={price} descripcion={descripcion} source={source} />

            </Card.Footer>
        </Card >

    )

}
export default Item;