// import {useSelector} from "react-redux";
// import {selectCampers, selectFilter} from "@/store/selectors.js";
import { useNavigate } from "react-router-dom";
import LocationFilter from "@/components/Filter/LocationFilter/LocationFilter.jsx";
import { useStateContext } from "@/components/common/StateContext/StateContext.jsx";
// import s from "@/components/CardsList/CardsItem/CardsItem.module.scss";
// import IconComponent from "@/components/common/IconComponent/IconComponent.jsx";
import { useEffect, useState } from "react";
import { PER_PAGE } from "@/utils/api/api.js";
import VehicleEquipFilter from "@/components/Filter/VehicleEquipFilter/VehicleEquipFilter.jsx";

const Filter = () => {
  const initialState = {
    airConditioner: "",
    bathroom: "",
    kitchen: "",
    location: "",
    transmission: "",
    TV: "",
    form: "",
    limit: PER_PAGE,
    page: 1,
  };

  const navigate = useNavigate();
  const [pickedFilters, setPickedFilters] = useState(initialState);

  const onChange = (value, key) => {
    setPickedFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  // const {searchParams, setSearchParams} = useStateContext();

  // useEffect(() => {
  // 	const updFilters = {};
  //
  // 	Object.keys(pickedFilters).reduce((acc, key) => {
  // 		const valueFromParams = searchParams.get(key);
  // 		acc[key] = valueFromParams || pickedFilters[key];
  // 		return acc;
  // 	});
  //
  // 	setPickedFilters(updFilters);
  // }, [searchParams]);

  // const handleFilter = () => {
  // 	const searchParams = {};
  //
  // 	Object.entries(pickedFilters).forEach(([key, value]) => {
  // 		if (value) {
  // 			searchParams[key] = value;
  // 		}
  // 	});
  //
  // 	searchParams["page"] = 1;
  // 	setSearchParams(searchParams);
  // };

  // const handleFilterChange = (filterKey, value, isChecked) => {
  //   setPickedFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [filterKey]: isChecked ? value : "",
  //   }));
  // };

  // const onChange = (target) => {
  //   let filterKey = "";
  //
  //   if (target.name === "location") {
  //     filterKey = "location";
  //   } else if (target.value === "automatic") {
  //     filterKey = "transmission";
  //   } else {
  //   filterKey = target?.dataset?.equipment ? target.name : "form";
  //
  //   }
  //
  //   handleFilterChange(filterKey, target.value, target.checked);
  // };

  // const handleReset = () => {
  //   setPickedFilters((prevFilters) => ({
  //     ...prevFilters,
  //     ...initialState,
  //   }));
  //   navigate("/catalog");
  // };

  console.log(pickedFilters);

  return (
    <form>
      <h3>Filter</h3>

      <LocationFilter onChange={onChange} filters={pickedFilters} />



      <div>
        <p>Vehicle type</p>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default Filter;
