import { campersReducer } from "./campers/campersSlice.js";
import { filterReducer } from "./filter/filterSlice.js";

export const reducer = {
  campers: campersReducer,
  filter: filterReducer,
};
