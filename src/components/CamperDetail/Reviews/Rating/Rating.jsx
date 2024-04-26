import Star from '@/assets/icons/Star.svg';
import StarEmpty from '@/assets/icons/StarEmpty.svg';

import styles from './Rating.module.scss';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return i < Math.floor(rating) ? <Star key={i} /> : <StarEmpty key={i} />;
  });
  return <div className={styles.Container}>{stars}</div>;
};

export default Rating;
