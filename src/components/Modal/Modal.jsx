import { useEffect, useState } from "react";

import Features from "@/components/Features/Features.jsx";
import Reviews from "@/components/Reviews/Reviews.jsx";
import OrderForm from "@/components/OrderForm/OrderForm.jsx";

import s from "./Modal.module.scss";

import { normalizeLocation } from "@/utils/helpers/normalizer.js";

import Star from "@/assets/icons/Star.svg";
import Pin from "@/assets/icons/Pin.svg";

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

  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("features");

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const [content, setContent] = useState(
    <Features features={camperInfo} carId={_id} />,
  );

  const handleFeaturesClick = () => {
    setContent(<Features features={camperInfo} carId={_id} />);
    setActiveTab("features");
  };

  const handleReviewsClick = () => {
    setContent(<Reviews reviews={reviews} carId={_id} />);
    setActiveTab("reviews");
  };

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

            <p className={s.price}>${price.toFixed(2)}</p>
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

        <div>
          <p className={s.description}>{description}</p>

          <div className={s.btnWrap}>
            <button
              className={`${s.btn} ${activeTab === "features" ? s.activeBtn : ""}`}
              onClick={handleFeaturesClick}
            >
              Features
            </button>
            <button
              className={`${s.btn} ${activeTab === "reviews" ? s.activeBtn : ""}`}
              onClick={handleReviewsClick}
            >
              Reviews
            </button>
          </div>

          <div className={s.contentFormWrapper}>
            <div className={s.contentWrap}>{content}</div>

            <OrderForm onClose={closeModal} />
          </div>
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
      </div>
    </div>
  );
};

export default Modal;
