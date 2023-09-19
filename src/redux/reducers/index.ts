/* Instruments */
import { userApi } from "../queries/userApi";
import counterReducer  from '../slices/counterSlice'

export const reducer = {
  counter: counterReducer,
  [userApi.reducerPath]: userApi.reducer,
}