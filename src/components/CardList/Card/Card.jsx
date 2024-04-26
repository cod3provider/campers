import { useDispatch, useSelector } from 'react-redux';

import Star from '@/assets/icons/Star.svg';
import MapPin from '@/assets/icons/MapPin.svg';

import styles from './Card.module.scss';

import IconComponent from '@/components/common/IconComponent/index.js';
import Button from '@/components/common/Button/index.js';
import FavoriteButton from '../../common/FavoriteButton/index.js';
import { toggleFavorite } from '@/store/campers/campersSlice.js';
import { selectFavoriteCampers } from '@/store/selectors.js';

const Card = ({
  attributes,
  description,
  image,
  location,
  name,
  price,
  rating,
  id,
  showMoreClick,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteCampers);
  const isFavorite = favorites.includes(id);
  const attributesArray = Object.entries(attributes);
  const handelClick = () => {
    dispatch(toggleFavorite(id));
  };
  const handelShowMoreClick = () => {
    showMoreClick(id);
  };
  return (
    <li className={styles.Card}>
      <div className={styles.containerImage}>
        <img className={styles.cardImage} src={image} alt={name} />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{name}</h2>
          <div>
            <span className={styles.price}>{price}</span>
            <FavoriteButton onClick={handelClick} isFavorite={isFavorite} />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <img src={Star} alt="icon of star"  />
          <span className={styles.rating}>{rating}</span>
          <img
            src={MapPin}
            alt="icon of heart"
          />
          <span>{location}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.attributes}>
          {attributesArray.map(([key, value]) => (
            <li key={key}>
              <IconComponent attribute={key} text={value} />
            </li>
          ))}
        </ul>
        <Button
          text={"Show more"}
          type={"button"}
          onClick={handelShowMoreClick}
        />
      </div>
    </li>
  );
};

export default Card;
