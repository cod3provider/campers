import Card from './Card';

import styles from './CardList.module.scss';

import { parseDataForCatalog } from '@/utils/helpers/utils.js';

const CardList = ({ campers, showMoreClick }) => {
  return (
    <>
      <ul className={styles.cardList}>
        {campers.map(data => (
          <Card
            key={data._id}
            {...parseDataForCatalog(data)}
            showMoreClick={showMoreClick}
          />
        ))}
      </ul>
    </>
  );
};

export default CardList;
