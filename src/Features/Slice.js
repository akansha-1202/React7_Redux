import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: [
    { name: "Tarun", age: 26, course: "MERN", batch: "October" },
    { name: "John", age: 25, course: "MEAN", batch: "November" },
    { name: "Ron", age: 27, course: "MERN", batch: "December" },
    { name: "Ami", age: 24, course: "MEAN", batch: "January" },
    { name: "Naman", age: 28, course: "MERN", batch: "February" },
  ],
  reducers: {
    editData: (state, action) => {
      state[action.payload.index] = action.payload.EditData;
    },
    addData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { editData, addData } = dataSlice.actions;
export default dataSlice.reducer;
