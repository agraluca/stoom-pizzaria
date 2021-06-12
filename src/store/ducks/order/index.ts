import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  order: [],
};

export const setOrder = createAction("SET_ORDER");

export default createReducer(INITIAL_STATE, {
  [setOrder.type]: (state, action) => ({
    ...state,
    order: action.payload,
  }),
});
