import Review from './Review';

import style from './Reviews.module.scss';

const Reviews = ({ data }) => {

  return (
    <ul className={style.reviews}>
      {data.map((review, index) => (
        <Review key={index} {...review} />
      ))}{' '}
    </ul>
  );
};

export default Reviews;
