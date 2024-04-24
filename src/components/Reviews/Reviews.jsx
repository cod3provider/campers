import { Rate } from 'antd';
import s from "./Reviews.module.scss";

const Reviews = ({ reviews }) => {
  return (
    <ul className={s.list}>
      {reviews.map(({ comment, reviewer_name, reviewer_rating }, idx) => (
        <li className={s.item} key={idx}>
          <div className={s.reviewers}>
            <div className={s.reviewerLogo}>{reviewer_name.slice(0, 1)}</div>
            <div className={s.wrap}>
              <p>{reviewer_name}</p>
              <p>
	              {/*{reviewer_rating}*/}
	              <Rate disabled defaultValue={reviewer_rating} />
							</p>
            </div>
          </div>
          <p className={s.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
