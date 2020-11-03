import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ItemCount from './itemCount/itemCount'

function ItemDetail({ handleClose, sumar, disminuir, detalle,max,min,contadorDeClick,name,price }) {

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>{detalle}</li>
                    <li>{price}$</li>
                </ul>

            </Modal.Body>
            <Modal.Footer>
                <ItemCount sumar={sumar} disminuir={disminuir} max={max} min={min} contadorDeClick={contadorDeClick} />
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
            </Button>
            </Modal.Footer>
        </div>
    )
}
export default ItemDetail;