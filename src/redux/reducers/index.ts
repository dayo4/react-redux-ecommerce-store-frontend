/* Instruments */
import { userApi } from "../queries/userApi";
import counterReducer  from '../slices/counterSlice'
import navReducer  from '../slices/navSlice'

export const reducer = {
  counter: counterReducer,
  nav: navReducer,
  [userApi.reducerPath]: userApi.reducer,
}