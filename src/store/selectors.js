import { createSelector } from "@reduxjs/toolkit";

export const selectCampersItems = (state) => state.campers.items;
export const selectFavorites = (state) => state.campers.favorites;
export const selectError = (state) => state.campers.error;
export const isLoading = (state) => state.campers.isLoading;
export const selectFilter = (state) => state.filter;
export const selectPage = (state) => state.campers.page;

export const selectCampers = createSelector(
  [selectCampersItems, selectFilter, selectPage],
  (campers, filter, page) => {
    const step = 4;
    const isFiltered =
      Boolean(filter.location) ||
      Boolean(filter.type) ||
      Boolean(filter.details?.length);

    let filteredData = [...campers];

    if (isFiltered) {
      const filterLocation = filter.location.toLowerCase();
      const filterType = filter.type.toLowerCase();
      const filteredDetails = filter.details;

      filteredData = filteredData.filter((camper) => {
        const locationMatch =
          !filterLocation ||
          camper.location.toLowerCase().includes(filterLocation);
        const typeMatch =
          !filterType || camper.form.toLowerCase() === filterType;
        const detailsMatch =
          filteredDetails.length === 0 ||
          filteredDetails.every((detail) => {
            if (detail === "AC") {
              return camper.details["airConditioner"];
            }
            if (detail === "Automatic") {
              return camper.transmission === detail.toLowerCase();
            }
            if (detail === "Kitchen") {
              return camper.details[detail.toLowerCase()];
            }
            if (detail === "Shower/WC") {
              return camper.details["shower"] || camper.details["toilet"];
            }
            return camper.details[detail];
          });
        return locationMatch && typeMatch && detailsMatch;
      });
    }

    const isLoadMoreBtn = filteredData.length > step * page;

    return {
      campers: filteredData.slice(0, step * page),
      isShowBtn: isLoadMoreBtn,
    };
  },
);
