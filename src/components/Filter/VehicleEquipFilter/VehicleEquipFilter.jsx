import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";

import s from "./VehicleEquipFilter.module.scss";

const VehicleEquipFilter = ({ onChange, filters }) => {
  const equips = [
    {
      key: "AC",
      value: "1",
      text: "AC",
    },
    {
      key: "transmission",
      value: "automatic",
      text: "Automatic",
    },
    {
      key: "kitchen",
      value: "1",
      text: "Kitchen",
    },
    {
      key: "TV",
      value: "1",
      text: "TV",
    },
    {
      key: "bathroom",
      value: "1",
      text: "Shower/WC",
    },
  ];

  return (
    <div className={s.equip}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <fieldset className={s.fieldset}>
        {equips.map(({ key, text, value }) => (
          <div
            className={s.wrap}
            key={key}
            style={{
              borderColor:
                filters[key] === value ? "#E44848" : "rgba(16, 24, 40, 0.2)",
            }}
          >
            <input
              className={s.input}
              name={key}
              value={value}
              onChange={(e) => onChange(e.target)}
              checked={filters[key] === value}
              type="checkbox"
            />
            <IconComponent
              className={s.iconComponent}
              icon={key}
              text={text}
              width="32"
              height="32"
            />
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default VehicleEquipFilter;
