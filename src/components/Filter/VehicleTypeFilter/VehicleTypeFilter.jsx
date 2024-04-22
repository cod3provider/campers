import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import s from "./VehicleTypeFilter.module.scss";

const VehicleTypeFilter = ({ onChange ,filters}) => {
  const vehicleTypes = [
    {
      key: "panelTruck",
      value: "panelTruck",
      text: "Van",
    },
    {
      key: "fullyIntegrated",
      value: "fullyIntegrated",
      text: "Fully Integrated",
    },
    {
      key: "alcove",
      value: "alcove",
      text: "Alcove",
    },
  ];

  return (
    <>
      <h2>Vehicle type</h2>
      <fieldset className={s.fieldset}>
        {vehicleTypes.map((item) => (
          <div className={s.wrap} key={item.key}>
            <input
              className={s.input}
              name={item.key}
              value={item.value}
              onChange={(e) => onChange(e.target)}
              checked={filters[item.key] === item.value}
              type="checkbox"
            />
	          {item.text}
            <IconComponent icon={item.key} text={null} />
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default VehicleTypeFilter;
