import { Image } from "react-bootstrap";
import "../experience/Card.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import CardBgImg from "../../assets/img/background/card-bg.webp"

const Card = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container d-flex justify-content-center mt-2">
        <div className="card text-center mt-2" id="modal-card">
          <div className="card-header mt-3">
            <Image
              src={props.image}
              height="70px"
              width="110px"
              style={{
                background: "transparent",
                borderRadius: "10px",
              }}
            ></Image>
          </div>
          <div class="card-body">
            <h5 class="card-title">COMPANY: {props.name}</h5>
            <p class="card-text">DESIGNATION: {props.designation}</p>
            {/* description modal */}
            <Modal show={show} onHide={handleClose} id="modal-container">
              <Modal.Header closeButton className="modalHeader">
                <Modal.Title>My Experience with {props.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body id="modalBody">
                {props.experience}
              </Modal.Body>
            </Modal>
            <Button className="btn" variant="outline-dark" id="desc-btn"
            onClick={handleShow} >DESCRIPTION</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
