import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import s from "./CardsItem.module.scss";

import Pin from "@/assets/icons/Pin.svg";
import Star from "@/assets/icons/Star.svg";

const CardsItem = ({ camper }) => {
  const {
    _id,
    name,
    price,
    description,
    details,
    gallery,
    rating,
    reviews,
    location,
    adults,
    transmission,
    engine,
  } = camper;

  console.log(camper);

  const { beds, airConditioner: AC, kitchen } = details;
  const obj = { adults, transmission, engine, beds, AC, kitchen };
  const normalizedLocation = (str) => {
    const locationArr = str.split(" ");
    const reversedArr = [locationArr[1], locationArr[0]];
    const reversedString = reversedArr.join(", ");
    return reversedString.slice(0, -1);
  };

  return (
    <li className={s.item} key={_id}>
      <img className={s.img} src={gallery[0]} alt={name} />
      <div className={s.textWrapper}>
        <div>
          <div className={s.nameWrap}>
            <h2>{name}</h2>
            <p>${price}</p>
          </div>

          <div className={s.desc}>
            <p className={s.rating}>
            <img src={Star} alt="icon of star" width="16" height="16" />
              {rating}({reviews.length} Reviews)
            </p>

            <p className={s.location}>
              <img src={Pin} alt="icon of pin map" width="16" height="16" />
              <span>{normalizedLocation(location)}</span>
            </p>
          </div>
        </div>

        <p className={s.truncate}>{camper.description}</p>

        <ul className={s.list}>
          {Object.entries(obj).map(([key, value], idx) => (
            <li className={s.filterItem} key={idx}>
              <IconComponent icon={key} text={value} quantity={value} />
              {/*{value && <span>{value}</span>}*/}
            </li>
          ))}
        </ul>

        <button>Show more</button>
      </div>
    </li>
  );
};

export default CardsItem;
