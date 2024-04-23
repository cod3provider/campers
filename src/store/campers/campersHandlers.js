export const handlePendingCampers = (state) => {
  state.isLoading = true;
};

export const handleRejectedCampers = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledCampers = (state) => {
  state.isLoading = false;
  state.error = null;
};
