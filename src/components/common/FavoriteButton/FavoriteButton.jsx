import EmptyHeart from "@/assets/icons/Heart.svg";
import FullHeart from "@/assets/icons/HeartRed.svg";

import s from './FavoriteButton.module.scss';

const FavoriteButton = ({ onClick, isFavorite }) => {
	const handleClick = () => {
		onClick();
	};

	const Heart = () => (
    <img src={`${EmptyHeart}`} alt="icon of heart" width="24" height="24" />
  );
	const RedHeart = () => (
    <img src={`${FullHeart}`} alt="icon of heart" width="24" height="24" />
  );
  return (
    <button className={s.btn} onClick={handleClick}>
      {isFavorite ? <RedHeart /> : <Heart />}
    </button>
  );
};

export default FavoriteButton;
