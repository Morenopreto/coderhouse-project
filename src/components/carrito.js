import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';
import Triste from '../assets/triste.png';
import TrashCan from './icons/trashCan';
import './css/carrito.css'

function Cart() {

    const { setOrder, limpiar, eliminaProducto, sumaUno, restaUno, buyerState, carritoState } = useContext(CartContext)

    let total = 0;
    // USED TO CALCULATE TOTAL
    carritoState?.map((item) => (total += item.price * item.count));

    // IF THERE ARE NO ITEMS IN CART IT RENDERS
    if (!carritoState.length) {
        return (
            <div className='carritoDiv'>No tenes items en el carrito..
                <img src={Triste} alt='sad-empty-cart' />
            </div>

        )
    } else {

        return (
            <div className='carritoDiv'>
                <Button onClick={() => limpiar()}>Limpiar carrito</Button>

                <ul className="carritoUl" >
                    {carritoState?.map((item, key) => (
                        <>
                            <Card className='cardsCart' key={`${key}-Card`} style={{ width: '18rem' }}>
                                <span className='imgCartSpan'>
                                    <Card.Img key={`${key}-Img`} className='imgCart' variant="top" src={item.source} />
                                </span>
                                <Card.Body key={`${key}-CardBody`} className='gridCart'>
                                    <Card.Title className='tituloCart' key={`${key}-CardTitle`}>{item.name}</Card.Title>
                                    <button className='buttonTrash' onClick={() => eliminaProducto(item.id, item.count)}><TrashCan /></button>

                                    <Card.Text key={`${key}-CardText`} className='cartTextCart'>
                                        {item.descripcion}
                                    </Card.Text>
                                    <label>Cantidad</label>
                                    <div className='div-boton sumadorCart'>

                                        <Button className='masMenosBoton' onClick={() => sumaUno(item.id)} >
                                            +
                                        </Button>
                                        <p>{item.count}</p>

                                        <Button className='masMenosBoton' onClick={() => item.count > 1 ? restaUno(item.id) : alert('No puede restar, elimine producto')}>
                                            -
                                        </Button>
                                    </div>
                                    <span className='priceCart'>
                                        ${item.price * item.count}
                                    </span>
                                </Card.Body>

                            </Card>
                        </>
                    ))}
                </ul>
                <Card className='totalCard'>

                    <label className='labelComprar'>Subtotal:</label>
                    <label className='labelComprar'>{total}.00$</label>

                    <Button className={`botonComprar ${buyerState.name ? 'muestraComprar' : 'ocultaComprar'}`} onClick={() => setOrder()}>Realizar compra</Button>
                </Card>
            </div>
        )
    }


}
export default Cart;