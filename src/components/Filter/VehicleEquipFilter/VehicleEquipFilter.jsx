import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";

import s from './VehicleEquipFilter.module.scss';

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
    <>
      <h2>Vehicle equipment</h2>
      <fieldset className={s.fieldset}>
        {equips.map((item) => (
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
            <IconComponent icon={item.key} text='null' />
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default VehicleEquipFilter;
