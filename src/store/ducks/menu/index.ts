import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  pizzas: [],
  recommended: {},
};

export const getPizzaMenu = createAction("GET_PIZZA_MENU");
export const getRecommended = createAction("GET_RECOMMENDED");

export default createReducer(INITIAL_STATE, {
  [getPizzaMenu.type]: (state, action) => ({
    ...state,
    pizzas: action.payload,
  }),
  [getRecommended.type]: (state, action) => ({
    ...state,
    recommended: action.payload,
  }),
});
