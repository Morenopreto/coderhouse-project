import { React, useState } from 'react';
// import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import ItemCount from './itemCount'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './css/items.css';
import congeladas from '../assets/congeladas.jpg'

function Item({ lista }) {

    // let { id, name, price, max, min, initial } = lista;
    let { id, title, price, max, min, initial } = lista;
    console.log('itemList')
    const [contador, setContador] = useState(0)
    const sumar = () => {

        if (contador < max) {
            setContador(contador + 1)
        }
    }
    const disminuir = () => {

        if (contador > min)
            setContador(contador - 1)
    }


    return (
        <Card className="item-div">
            <NavLink className="item-link" to={{
                pathname: `/productos/${id}`
            }}>
                <span className='img-ctn'>
                    <Card.Img className='item-img' variant="top" src={congeladas} />
                </span>
                <Card.Body className="cardBody">
                    <ul className="itemUl">
                        <li className='nombre'>{title}</li>
                        <li className='precio'>${price}</li>
                    </ul>

                </Card.Body>
            </NavLink>
            <Card.Footer className='cardFooter'>
                <ItemCount disminuir={disminuir} sumar={sumar} contador={contador} max={max} min={min} initial={initial} name={title} />

                {/* <Button variant="secondary">
                        Ver descripcion
                     </Button> */}

            </Card.Footer>

            {/* <ItemDetailContainer disminuir={this.disminuir} sumar={this.sumar} detalle={detalle} max={max} min={min} contadorDeClick={this.state.contadorDeClick} name={name} price={price} /> */}
        </Card >

    )

}
export default Item;