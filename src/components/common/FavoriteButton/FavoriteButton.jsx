import EmptyHeart from '@/assets/icons/Heart.svg';
import FullHeart from '@/assets/icons/HeartFull.svg';

import style from './FavoriteButton.module.scss';

const FavoriteButton = ({ onClick, isFavorite }) => {
  const handleClick = () => {
    onClick();
  };

	const HeartEmptyIcon = () => (
		<img src={`${EmptyHeart}`} alt="icon of heart" width="24" height="24" />
	);
	const HeartFullIcon = () => (
		<img src={`${FullHeart}`} alt="icon of heart" width="24" height="24" />
	);

  return (
    <button className={style.FavoriteButton} onClick={handleClick}>
      {isFavorite ? <HeartFullIcon /> : <HeartEmptyIcon />}
    </button>
  );
};

export default FavoriteButton;
