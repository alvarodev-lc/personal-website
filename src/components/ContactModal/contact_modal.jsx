import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../.././static/css/bootstrap/bootstrap.min.css'

import mail_icon from '../.././static/images/mail.svg'
import linkedin_icon from '../.././static/images/linkedin.png'


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
        <div className="row pb-3 offset-md-2">
          <div className="col-5">
            Name: Álvaro
          </div>
          <div className="col-7">
            Last name: López Cruz
          </div>
        </div>
        <div className="row pb-3 offset-md-2">
          <div className="col-12">
            <img src={mail_icon} alt="Mail Icon" width="25" height="25" className="pe-2"/>
            <span>alvaro.lopez19997@gmail.com</span>
          </div>
        </div>
        <div className="row offset-md-2">
          <div className="col-12">
            <img src={linkedin_icon} alt="LinkedIn Icon" width="30" height="20" className="pe-2"/>
            <span>Username</span>
          </div>
        </div>
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