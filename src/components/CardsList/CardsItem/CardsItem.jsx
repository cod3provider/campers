import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import PortalButton from "@/components/common/PortalButton/PortalButton.jsx";
import s from "./CardsItem.module.scss";

import Pin from "@/assets/icons/Pin.svg";
import Star from "@/assets/icons/Star.svg";
import { normalizeLocation } from "@/utils/helpers/normalizer.js";

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

  // console.log(location)

  // console.log(camper);

  const { beds, airConditioner: AC, kitchen } = details;
  const obj = { adults, transmission, engine, beds, AC, kitchen };

  return (
    <li className={s.item} key={_id}>
      <img className={s.img} src={gallery[0]} alt={name} />
      <div className={s.textWrapper}>
        <div className={s.titleWrap}>
          <div className={s.nameWrap}>
            <h2>{name}</h2>
            <p className={s.price}>${price.toFixed(2)}</p>
          </div>

          <div className={s.desc}>
            <p className={s.rating}>
              <img src={Star} alt="icon of star" width="16" height="16" />
              {rating}({reviews.length} Reviews)
            </p>

            <p className={s.location}>
              <img src={Pin} alt="icon of pin map" width="16" height="16" />
              <span>{normalizeLocation(location)}</span>
            </p>
          </div>
        </div>

        <p className={s.truncate}>{camper.description}</p>

        <ul className={s.list}>
          {Object.entries(obj).map(([key, value], idx) => (
            <li className={s.filterItem} key={idx}>
              <IconComponent
                className={s.iconComponent}
                icon={key}
                text={typeof value === "string" ? value : key}
                quantity={value}
              />
            </li>
          ))}
        </ul>

        <div className={s.backdropContainer}>
          <PortalButton camper={camper} btnText="Show more" />
        </div>
      </div>
    </li>
  );
};

export default CardsItem;
