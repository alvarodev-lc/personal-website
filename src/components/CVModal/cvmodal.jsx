import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../.././static/css/bootstrap/bootstrap.min.css'
import '../.././App.min.css'


function ModalImplementation(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Curriculum Vitae
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row pb-3">
            <iframe title="CV" src="https://drive.google.com/file/d/1BB3uKem7OzP1KHZqLTCOm8gh8OQkpVps/preview" width="640" height="600" allow="autoplay"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CVModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Check out my CV!
      </Button>


      <ModalImplementation
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CVModal