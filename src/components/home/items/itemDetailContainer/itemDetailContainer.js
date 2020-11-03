import React, { useState } from "react";

import { Button, Modal} from 'react-bootstrap';
import ItemDetail from './itemDetail'

function ItemDetailContainer({ detalle,max,min,contadorDeClick,name,price,sumar,disminuir }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Ver descripcion
        </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <ItemDetail handleClose={handleClose} disminuir={disminuir} sumar={sumar} detalle={detalle} max={max} min={min} contadorDeClick={contadorDeClick} name={name} price={price} />
            </Modal>
        </>)

}


export default ItemDetailContainer;



