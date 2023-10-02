/* Core */
// import { createLogger } from 'redux-logger'
import { userApi } from "../queries/userApi";
import { productApi } from "../queries/productsApi";
import { cartApi } from "../queries/cartApi";

const middleware = [
  userApi.middleware,
  productApi.middleware,
  cartApi.middleware,
  //   createLogger({
  //     duration: true,
  //     timestamp: false,
  //     collapsed: true,
  //     colors: {
  //       title: () => '#139BFE',
  //       prevState: () => '#1C5FAF',
  //       action: () => '#149945',
  //       nextState: () => '#A47104',
  //       error: () => '#ff0005',
  //     },
  //     predicate: () => typeof window !== 'undefined',
  //   }),
];

export { middleware };
