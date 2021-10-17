import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SubModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="modalBack">
      <button className="btn btn-outline-dark btn-lg" onClick={openModal}>
        Request Movie
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="form">
          <label>
            Title: <input />
          </label>
          <label>
            Your Name: <input />
          </label>
          <label>
            Your E-mail: <input />
          </label>
          <label>
            Credit Card Number: <input />
          </label>
          <label>
            CVV Number: <input />
          </label>
        </form>
        <input type="checkbox" className="checkbox" />
        <div className="agreement">
          I hereby agree to all terms and conditions
        </div>
        <Button className="center" variant="outline-success">
          Submit
        </Button>{" "}
      </Modal>
    </div>
  );
};

export default SubModal;
