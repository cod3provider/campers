import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import s from "./VehicleTypeFilter.module.scss";

const VehicleTypeFilter = ({ onChange, filters }) => {
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
    <div className={s.typeFilter}>
      <h2 className={s.title}>Vehicle type</h2>
      <fieldset className={s.fieldset}>
        {vehicleTypes.map((item) => (
          <div
            className={s.wrap}
            key={item.key}
            style={{
              borderColor:
                filters[item.key] === item.value
                  ? "#E44848"
                  : "rgba(16, 24, 40, 0.2)",
            }}
          >
            <input
              className={s.input}
              name={item.key}
              value={item.value}
              onChange={(e) => onChange(e.target)}
              checked={filters[item.key] === item.value}
              type="checkbox"
            />
            <IconComponent icon={item.key} text={null} width="40" height="28" />
            {item.text}
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default VehicleTypeFilter;
