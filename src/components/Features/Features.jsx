import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import s from "./Features.module.scss";

const Features = ({ carId, features }) => {
  const { details, form, length, width, height, tank, consumption } = features;
  // console.log(features)

  const vehicleDetails = { form, length, width, height, tank, consumption };
  // console.log(vehicleDetails)

  return (
    <div className={s.listsWrap}>
      <ul className={s.listDetails}>
        {Object.entries(details).map(([key, value], idx) => (
          <li className={s.itemDetails} key={idx}>
            <IconComponent
              className={s.iconComponent}
              icon={key}
              text={key}
              quantity={value}
            />
          </li>
        ))}
      </ul>

      <div>
        <p>Vehicle details</p>
        <ul className={s.listFeatures}>
          {Object.entries(vehicleDetails).map(([key, value], idx) => (
            <li className={s.featuresItem} key={idx}>
              <span className={s.textValue}>{key}</span>
              <p className={s.value}>
	              {value}
							</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
