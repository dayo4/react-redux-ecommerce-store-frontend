/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action:PayloadAction<{}>) => {
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
})

export default cartSlice.reducer;
export const CartSlice  = cartSlice.actions

/* Types */
export interface CartSliceState {
 
}