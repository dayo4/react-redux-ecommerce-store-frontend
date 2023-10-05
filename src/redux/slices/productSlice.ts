/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
    currentGategory: null,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<{}>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const productToUpdate = state.find((item) => item.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity = quantity;
      }
    },
  },
});

export default productSlice.reducer;
export const ProductSlice = productSlice.actions;

/* Types */
export interface ProductSliceState {}
