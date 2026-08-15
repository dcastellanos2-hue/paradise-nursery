import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeItem: (state, action) => {
      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product) {
        state.totalQuantity -= product.quantity;
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);

      if (product && quantity > 0) {
        const quantityDifference = quantity - product.quantity;
        product.quantity = quantity;
        state.totalQuantity += quantityDifference;
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;