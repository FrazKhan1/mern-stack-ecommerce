import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: null,
  },
  reducers: {
    setCartData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCartData } = cartSlice.actions;
export default cartSlice.reducer;
