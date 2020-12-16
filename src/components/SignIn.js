import { Form, Button, Modal } from 'react-bootstrap';
import { CartContext } from '../context/cartContext';
import React, { useState, useEffect, useContext } from 'react';

function SignIn({ show, handleClose,setbuttonLabel }) {


  const [status, setStatus] = useState(true);
  const { setbuyerState } = useContext(CartContext);

  const handleActive = () => {

    document.getElementById('formEmailValidation').value === document.getElementById('formEmail').value
      && !!document.getElementById('formName').value
      && !!document.getElementById('formSurname').value
      && !!document.getElementById('formBasicPassword').value
      ?
      setStatus(false) : setStatus(true);

  }
  const submit = () => {
    setbuyerState({
      name: document.getElementById('formName').value,
      surname: document.getElementById('formSurname').value,
      mail: document.getElementById('formEmail').value
    })
    handleClose();
    setbuttonLabel(`HOLA ${document.getElementById('formNickname').value.length?document.getElementById('formNickname').value:document.getElementById('formName').value}! `)
  }


  return (

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>INICIO DE SESION</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Gonzalo" onBlur={() => handleActive()} />
          </Form.Group>
          <Form.Group controlId="formNickname">
            <Form.Label>Apodo</Form.Label>
            <Form.Control type="text" placeholder="Frodo"/>
          </Form.Group>

          <Form.Group controlId="formSurname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Perez" onBlur={() => handleActive()} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Gonzalo.peres@frodas.com" onBlur={() => handleActive()} />
          </Form.Group>
          <Form.Group controlId="formEmailValidation">

            <Form.Text className="text-muted align-items-center">
            --------------------------- Ingrese su mail nuevamente ---------------------------
            </Form.Text>

            <Form.Label>Validacion Email</Form.Label>
            <Form.Control type="email" placeholder="Gonzalo.perez@frodas.com" onBlur={() => handleActive()} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contrasena</Form.Label>
            <Form.Control type="password" placeholder="Password" onBlur={() => handleActive()} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={() => submit()} disabled={status} >
            Submit
  </Button>
        </Modal.Footer>
      </Form>
    </Modal >)

}
export default SignIn;



// return (
//   <>
//     <Button variant="primary" onClick={handleShow}>
//       Launch demo modal
//     </Button>


//     
//    
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//         </Button>
//       <Button variant="primary" onClick={handleClose}>
//         Save Changes
//         </Button>
//     </Modal.Footer>

//   </>
// );