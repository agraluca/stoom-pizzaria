import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./ducks/menu";
import orderReducer from "./ducks/order";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
