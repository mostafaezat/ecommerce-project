import { createSlice } from "@reduxjs/toolkit";

export const CartProductSlice = createSlice({
  name: "Cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeItem, resetCart } = CartProductSlice.actions;

export default CartProductSlice.reducer;
