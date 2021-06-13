import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./ducks/menu";
import orderReducer from "./ducks/order";
import loadingReducer from "./ducks/loading";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
