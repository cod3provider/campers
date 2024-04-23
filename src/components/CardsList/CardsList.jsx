import CardsItem from "./CardsItem/CardsItem.jsx";

import s from "./CardsList.module.scss";

const CardsList = ({ campers }) => {
  return (
    <>
      <ul className={s.list}>
        {campers?.length ? (
          campers.map((camper) => (
            <CardsItem key={camper._id} camper={camper} />
          ))
        ) : (
          <p>Not found</p>
        )}
      </ul>
    </>
  );
};

export default CardsList;
