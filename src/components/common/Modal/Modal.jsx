import { useEffect } from "react";

import s from "./Modal.module.scss";

const Modal = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    const onEscKeyPress = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onEscKeyPress);

    return () => {
      window.removeEventListener("keydown", onEscKeyPress);
    };
  }, []);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.modal}>
        <button onClick={closeModal}>CLOSE</button>
        <h1>Hello Modal</h1>
      </div>
    </div>
  );
};

export default Modal;
