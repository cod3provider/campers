import { useEffect, useState } from "react";

import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import Features from "@/components/Features/Features.jsx";
import Reviews from "@/components/Reviews/Reviews.jsx";
import OrderForm from "@/components/OrderForm/OrderForm.jsx";

import s from "./Modal.module.scss";

import { normalizeLocation } from "@/utils/helpers/normalizer.js";

import Star from "@/assets/icons/Star.svg";
import Pin from "@/assets/icons/Pin.svg";
// import {
//   Link,
//   Outlet,
//   Route,
//   Routes,
//   useLocation,
//   useParams,
// } from "react-router-dom";

const Modal = ({ camperInfo, onClose }) => {
  const {
    _id,
    name,
    price,
    description,
    gallery,
    rating,
    reviews,
    location: location_camper,
  } = camperInfo;

  // const { beds, airConditioner: AC, kitchen } = details;

  // const features = {length, width, height, tank, transmission}
  // const obj = { adults, transmission, engine, beds, AC, kitchen };

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

  const [isOpen, setIsOpen] = useState(true);

  const [content, setContent] = useState(
    <Features features={camperInfo} carId={_id} />,
  );

  const handleFeaturesClick = () => {
    setContent(<Features features={camperInfo} carId={_id} />);
  };

  const handleReviewsClick = () => {
    setContent(<Reviews reviews={reviews} carId={_id} />);
  };

  //
  // const { carId } = useParams();

  // useEffect(() => {
  // 	setIsOpen(true);
  // }, [carId]);

  // const location = useLocation();
  //
  // const from = location.state?.from ?? "/";

  return (
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.modal}>
        {/*<div onClick={(e) => e.stopPropagation()}>*/}
        <div className={s.titleWrap}>
          <h2 className={s.title}>{name}</h2>

          <div className={s.wrapper}>
            <div className={s.locationWrap}>
              <span className={s.rating}>
                <img src={Star} alt="icon of star" width="16" height="16" />
                {rating}({reviews.length} Reviews)
              </span>

              <div className={s.location}>
                <img src={Pin} alt="icon of pin map" width="16" height="16" />
                <span>{normalizeLocation(location_camper)}</span>
              </div>
            </div>

            <p className={s.price}>${price}</p>
          </div>
          {/*</div>*/}
        </div>

        <div>
        <ul className={s.gallery}>
          {gallery.map((item, idx) => (
            <li className={s.galleryItem} key={idx}>
              <img className={s.galleryImg} src={item} alt={name} />
            </li>
          ))}
        </ul>
        </div>

        <button className={s.closeBtn} onClick={closeModal}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 8L8 24"
              stroke="#101828"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#101828"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/*<Suspense fallback={<p>...Loading</p>}>*/}
        {/*  <Outlet />*/}
        {/*</Suspense>*/}

        <div>
          <p className={s.description}>{description}</p>

          <div className={s.btnWrap}>
            <button className={s.btn} onClick={handleFeaturesClick}>Features</button>
            <button className={s.btn} onClick={handleReviewsClick}>Reviews</button>
          </div>

          <div>
            <div>{content}</div>

            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
