import { Select } from "antd";
import s from "./Location.module.scss";

const LocationFilter = ({ onChange, filters }) => {
  const locationsArr = [
    { label: "Kyiv", value: "Ukraine, Kyiv", key: "Kyiv" },
    { label: "Dnipro", value: "Ukraine, Dnipro", key: "Dnipro" },
    { label: "Kharkiv", value: "Ukraine, Kharkiv" },
    { label: "Lviv", value: "Ukraine, Lviv", key: "Lviv" },
    { label: "Odesa", value: "Ukraine, Odesa", key: "Odesa" },
    { label: "Poltava", value: "Ukraine, Poltava", key: "Poltava" },
    { label: "Sumy", value: "Ukraine, Sumy", key: "Sumy" },
  ];

  const handleLocationChange = (value) => {
    onChange(value, "location");
  };

  // console.log(filters);

  return (
    <div>
      <label className={s.label}>
        Location
        <Select
          defaultValue={filters.location || "Kyiv, Ukraine"}
          onChange={handleLocationChange}
          options={locationsArr}
          style={{ width: 360, textAlign: "start" }}
        />
      </label>
    </div>
  );
};

export default LocationFilter;
