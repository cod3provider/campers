import s from "@/components/common/Modal/Modal.module.scss";
import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";

const Features = ({ carId, features }) => {
  const { details, form, length, width, height, tank, consumption } = features;
	// console.log(features)

  const vehicleDetails = { form, length, width, height, tank, consumption };
	// console.log(vehicleDetails)

  return (
    <div>
      <h3>Features</h3>
      <ul>
        {Object.entries(details).map(([key, value], idx) => (
          <li key={idx}>
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
