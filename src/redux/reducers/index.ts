/* Api Queries */
import { userApi } from "../queries/userApi";
import { authApi } from "../queries/authApi";
import { productApi } from "../queries/productApi";
import { cartApi } from "../queries/cartApi";

/* Reducers */
import counterReducer  from '../slices/counterSlice'
import navReducer  from '../slices/navSlice'
import cartReducer  from '../slices/cartSlice'
import productReducer  from '../slices/productSlice'

export const reducer = {
  counter: counterReducer,
  nav: navReducer,
  cart: cartReducer,
  product: productReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
}