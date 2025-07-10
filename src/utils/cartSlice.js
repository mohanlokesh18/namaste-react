import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop();
    },
    deleteItem: (state) => {
      state.item.length = 0;
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
