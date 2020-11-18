import { React, useState } from 'react';
// import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import ItemCount from './itemCount'
import './css/items.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// class Item extends React.Component {
function Item({ max, min, id, name, price, detalle, initial, lista }) {

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
        <div className="item-div">
            <ul className="itemUl">
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>price: {price}$</li>
            </ul>

            <ItemCount disminuir={disminuir} sumar={sumar} contador={contador} max={max} min={min} initial={initial} name={name} />

            <Link to={{
                pathname: `/productos/${id}`,
                state: {
                    lista: lista
                }
            }}><Button variant="secondary">
                    Ver descripcion
            </Button></Link>

            {/* <ItemDetailContainer disminuir={this.disminuir} sumar={this.sumar} detalle={detalle} max={max} min={min} contadorDeClick={this.state.contadorDeClick} name={name} price={price} /> */}
        </div >
    )

}
export default Item;