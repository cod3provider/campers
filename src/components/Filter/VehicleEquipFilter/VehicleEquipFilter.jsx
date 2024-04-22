import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";

const VehicleEquipFilter = ({ onChange, filters }) => {
  const equips = [
    {
      key: "airConditioner",
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
    <>
      <h2>Vehicle equipment</h2>
      <fieldset>
        {equips.map((item) => (
          <div key={item.key}>
            <input
              name={item.key}
              value={item.value}
              onChange={(e) => onChange(e.target)}
              checked={filters[item.key] === item.value}
              type="checkbox"
            />
            <IconComponent icon={item.key} />
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default VehicleEquipFilter;
