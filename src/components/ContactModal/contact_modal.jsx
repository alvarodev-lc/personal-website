import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../.././static/css/bootstrap/bootstrap.min.css'


function ModalImplementation(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Email, Linkedin...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ContactModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="pb-3">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Contact
      </Button>
      </div>

      <ModalImplementation
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ContactModal