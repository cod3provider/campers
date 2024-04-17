import { useEffect } from "react";

import s from "./Modal.module.scss";
import Star from '@/assets/icons/Star.svg';
import Pin from '@/assets/icons/Pin.svg';
import {normalizeLocation} from "@/utils/helpers/normalizer.js";
import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";

const Modal = ({ camperInfo, onClose }) => {
  const {
    _id,
    name,
    price,
    description,
    details,
    gallery,
    rating,
    reviews,
    location,
    adults,
    transmission,
    engine,
  } = camperInfo;

  const { beds, airConditioner: AC, kitchen } = details;
  const obj = { adults, transmission, engine, beds, AC, kitchen };

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
		    <div  onClick={(e) => e.stopPropagation()}>
			    <img  src={gallery[0]} alt={name}/>
			    <div >
				    <div >
					    <h2>{name}</h2>
					    <p>${price}</p>
				    </div>

				    <div >
					    <p >
						    <img src={Star} alt="icon of star" width="16" height="16"/>
						    {rating}({reviews.length} Reviews)
					    </p>

					    <p >
						    <img src={Pin} alt="icon of pin map" width="16" height="16"/>
						    <span>{normalizeLocation(location)}</span>
					    </p>
				    </div>

				    <p >{description}</p>

				    <ul className={s.list}>
					    {Object.entries(details).map(([key, value], idx) => (
						    <li key={idx}>
							    <IconComponent icon={key} text={value} quantity={value}/>
						    </li>
					    ))}
				    </ul>
			    </div>
			    <button  onClick={onClose}>Close</button>
		    </div>


		    <button onClick={closeModal}>CLOSE</button>
		    <h1>Hello Modal</h1>
	    </div>
    </div>
  );
};

export default Modal;
