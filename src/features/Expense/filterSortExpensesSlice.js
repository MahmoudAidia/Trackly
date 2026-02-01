import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  sort: "",
};
const filterSortExpenses = createSlice({
  initialState,
  name: "filterSortExpenses",
  reducers: {
    addSort(state, action) {
      if (state.sort !== action.payload) state.sort = action.payload;
      else state.sort = "";
    },
    removeSort(state) {
      state.sort = "";
    },
    addFilter(state, action) {
      if (action.payload === "No Filter") state.filter = "";
      else state.filter = action.payload;
    },
    removeFilter(state) {
      state.filter = "";
    },
  },
});

export const selectSortType = (state) => state.filterSortExpenses.sort;
export const selectFilterType = (state) => state.filterSortExpenses.filter;

export const { addSort, removeSort, addFilter, removeFilter } =
  filterSortExpenses.actions;
export default filterSortExpenses.reducer;
