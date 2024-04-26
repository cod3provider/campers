import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Features from './Features';
import ModalForm from './Form';
import Reviews from './Reviews';

import Star from '@/assets/icons/Star.svg';
import MapPin from '@/assets/icons/MapPin.svg';
import Cross from '@/assets/icons/Cross.svg';

import styles from './CamperDetail.module.scss';

import { selectCamperById } from '@/store/selectors';
import { formatRating, formatter, parseDataForFeature } from '@/utils/helpers/utils.js';

const CamperDetail = ({ id, onClick }) => {
  const camperData = useSelector(selectCamperById(id));
  const container = useRef();
  const [extended, setExtended] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleActive = e => {
    const children = Array.from(e.currentTarget.parentNode.children);
    children.forEach(child => {
      if (child !== e.currentTarget) {
        child.classList.remove(styles.active);
      }
    });
    e.currentTarget.classList.toggle(styles.active);
    const extended = e.currentTarget.classList.contains(styles.active);
    container.current?.classList.toggle(styles.extended, extended);
    setExtended(extended);
    if (extended) {
      setIsFeaturesOpen(e.currentTarget.textContent === 'Features');
    }
  };

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{camperData?.name}</h2>
        <button className={styles.btnClose} type="button" onClick={onClick}>
          <img src={Cross} className={styles.cross} alt="icon of cross" />
        </button>
      </div>
      <div className={styles.infoContainer}>
        <img src={Star} alt="icon of star" />
        <span className={styles.rating}>{formatRating(camperData)}</span>
        <img src={MapPin} alt="icon of pin" />
        <span>{camperData?.location}</span>
      </div>
      <p className={styles.price}>{formatter.format(camperData?.price)}</p>
      <div className={styles.scrollingArea}>
        <div className={styles.imageContainer}>
          {camperData?.gallery.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={camperData?.name}
              className={styles.image}
            ></img>
          ))}
        </div>
        <p>{camperData?.description}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={toggleActive}>
          Features
        </button>
        <button className={styles.button} onClick={toggleActive}>
          Reviews
        </button>
      </div>
      <div className={styles.wrapper}>
        {extended && isFeaturesOpen ? (
          <Features data={parseDataForFeature(camperData)} />
        ) : (
          <Reviews data={camperData?.reviews} />
        )}
        {extended && <ModalForm />}
      </div>
    </div>
  );
};
export default CamperDetail;
