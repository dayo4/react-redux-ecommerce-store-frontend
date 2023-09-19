/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
// import { userApi } from "../queries/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

/* Instruments */
import { reducer } from "../reducers";
import { middleware } from '../middlewares'

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

setupListeners(reduxStore.dispatch);


/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
