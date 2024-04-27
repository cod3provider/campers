import { Rate } from "antd";

import Avatar from "../Avatar";

import styles from "./Review.module.scss";

const Review = ({ reviewer_name, reviewer_rating, comment }) => {
  return (
    <li className={styles.review}>
      <div className={styles.header}>
        <Avatar name={reviewer_name} />
        <div className={styles.container}>
          <p className={styles.name}>{reviewer_name}</p>
          {/*<Rating rating={rating} />*/}
          <Rate disabled defaultValue={reviewer_rating} />
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </li>
  );
};

export default Review;
