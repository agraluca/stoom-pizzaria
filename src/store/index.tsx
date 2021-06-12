import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./ducks/menu";
import orderReducer from "./ducks/order";

export default configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
  },
});
