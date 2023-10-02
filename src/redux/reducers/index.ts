/* Api Queries */
import { userApi } from "../queries/userApi";
import { productApi } from "../queries/productsApi";
import { cartApi } from "../queries/cartApi";

/* Reducers */
import counterReducer  from '../slices/counterSlice'
import navReducer  from '../slices/navSlice'
import cartReducer  from '../slices/cartSlice'

export const reducer = {
  counter: counterReducer,
  nav: navReducer,
  cart: cartReducer,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
}