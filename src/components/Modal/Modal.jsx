import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ onClose, children }) => {

	useEffect(() => {
    const closeModalEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeModalEsc);
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = '22px';

    return () => {
      window.removeEventListener('keydown', closeModalEsc);
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.paddingRight = '0';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      {children}
	    </div>,
	  document.body
  );
};

export default Modal;
