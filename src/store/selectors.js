import { createSelector } from 'reselect';

export const selectAllCampers = state => state.campers.items;
export const selectFavoriteCampers = state => state.campers.favorites;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectPage = state => state.campers.page;
export const selectFilter = state => state.filter;
export const selectCamperById = id => state => {
  return state.campers.items.find(camper => camper._id === id);
};
export const selectFavorites = createSelector(
  selectAllCampers,
  state => state.campers.favorites,
  (campers, favorites) =>
    campers.filter(camper => favorites.includes(camper._id))
);

export const selectCampers = createSelector(
  [selectAllCampers, selectFilter, selectPage],
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

      filteredData = filteredData.filter(camper => {
        const locationMatch =
          !filterLocation ||
          camper.location.toLowerCase().includes(filterLocation);
        const typeMatch =
          !filterType || camper.form.toLowerCase() === filterType;
        const detailsMatch =
          filteredDetails.length === 0 ||
          filteredDetails.every(detail => {
            if (detail === 'AC') {
              return camper.details['airConditioner'];
            }
            if (detail === 'Automatic') {
              return camper.transmission === detail.toLowerCase();
            }
            if (detail === 'Kitchen') {
              return camper.details[detail.toLowerCase()];
            }
            if (detail === 'Shower/WC') {
              return camper.details['shower'] || camper.details['toilet'];
            }
            return camper.details[detail];
          });
        return locationMatch && typeMatch && detailsMatch;
      });
    }
    const isShowBtn = filteredData.length > step * page;
    return {
      campers: filteredData.slice(0, step * page),
      isShowBtn,
    };
  }
);
