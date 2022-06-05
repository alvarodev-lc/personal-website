import React from "react";
import { Modal, Button } from "react-bootstrap";
import CVModal from "../CVModal/cvmodal";
import '../.././static/css/bootstrap/bootstrap.min.css'
import '../.././App.min.css'
import './contact_modal.min.css'

import mail_icon from '../.././static/images/icons/mail.svg'
import linkedin_icon from '../.././static/images/icons/linkedin.png'
import user_icon from '../.././static/images/icons/user_icon.png'
import github_icon from '../.././static/images/icons/github_icon.png'
import clipboard_icon from '../.././static/images/icons/clipboard_icon.png'
import mobile_icon from '../.././static/images/icons/mobile_icon.png'

const email = "alvaro.lopez19997@gmail.com"

function showToastr(timeout) {
  var x = document.getElementById("clipboard_toastr");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, timeout);
}

function copyToClipboard() {
  navigator.clipboard.writeText(email);
}

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
            <img src={user_icon} alt="User Icon" width="30" height="20" className="pe-2"/>
            <span>Álvaro López Cruz</span>
          </div>
        </div>
        <div className="row pb-3 offset-md-2">
          <div className="col-12">
            <img src={mail_icon} alt="Mail Icon" width="30" height="25" className="pe-2"/>
            <span>alvaro.lopez19997@gmail.com</span>
            <div className="display-inline ps-2">
              <button type="button" className="smallbutton" onClick={function(event){ copyToClipboard(); showToastr(3000)}} >
                <img src={clipboard_icon} alt="Clipboard Icon" width="20" height="20"/>
              </button>
            </div>
          </div>
        </div>
        <div className="row pb-3 offset-md-2">
          <div className="col-5">
            <img src={mobile_icon} alt="Mobile Icon" width="30" height="20" className="pe-2"/>
            <span>+34 603 623 143</span>
          </div>
        </div>
        <div className="row offset-md-2">
          <div className="col-4">
            <img src={linkedin_icon} alt="LinkedIn Icon" width="30" height="20" className="pe-2"/>
            <a href="https://www.linkedin.com/in/alvaro-lopez-b354321b8" target="#blank" className="link">Alvaro Lopez</a>
          </div>
          <div className="col-4">
            <img src={github_icon} alt="Github Icon" width="30" height="20" className="pe-2"/>
            <a href="https://github.com/alvarodev-lc" target="#blank" className="link">Alvarodev-lc</a>
          </div>
        </div>
      </Modal.Body>
      <div id="clipboard_toastr">Successfully copied email to clipboard!</div>
      <Modal.Footer>
        <div className="col-6">
          <CVModal/>
        </div>
        <div className="w-auto">
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function ContactModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="pb-3" id="contact_modal">
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