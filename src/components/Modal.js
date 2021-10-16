import React from "react";
import Modal from "react-modal";
import { useState } from "react";

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
            Social Security Number: <input />
          </label>
          <label>
            Mother's Maiden Name: <input />
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default SubModal;
