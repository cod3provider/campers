import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";

import s from "./VehicleEquipFilter.module.scss";

const VehicleEquipFilter = ({ onChange, filters }) => {
  const equips = [
    {
      key: "AC-Equip",
      value: "1",
      text: "AC",
    },
    {
      key: "transmission-Equip",
      value: "automatic",
      text: "Automatic",
    },
    {
      key: "kitchen-Equip",
      value: "1",
      text: "Kitchen",
    },
    {
      key: "TV-Equip",
      value: "1",
      text: "TV",
    },
    {
      key: "bathroom-Equip",
      value: "1",
      text: "Shower/WC",
    },
  ];

  return (
    <div className={s.equip}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <fieldset className={s.fieldset}>
        {equips.map((item) => (
          <div
            className={s.wrap}
            key={item.key}
            style={{
              borderColor:
                filters[item.key] === item.value ? "#E44848" : "rgba(16, 24, 40, 0.2)",
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
            <IconComponent icon={item.key} text="null" width = "32" height = "32" />
            {item.text}
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default VehicleEquipFilter;
