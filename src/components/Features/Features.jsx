import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import s from './Features.module.scss';

const Features = ({ carId, features }) => {
  const { details, form, length, width, height, tank, consumption } = features;
	// console.log(features)

  const vehicleDetails = { form, length, width, height, tank, consumption };
	// console.log(vehicleDetails)

  return (
    <div>
      <ul className={s.listDetails}>
        {Object.entries(details).map(([key, value], idx) => (
          <li className={s.itemDetails} key={idx}>
            <IconComponent icon={key} text={value} quantity={value} />
          </li>
        ))}
      </ul>
	    <p>Vehicle details</p>
	    <ul>
		    {Object.entries(vehicleDetails).map(([key, value], idx) => (
			    <li key={idx}>
				    <span>{key}</span>
				    <p>{value}</p>
			    </li>
		    ))}
	    </ul>
    </div>
  );
};

export default Features;
