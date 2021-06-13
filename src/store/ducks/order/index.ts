/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
  price: "",
  dough: "",
  size: "",
  recommendedStatus: false,
  recommended: "",
  points: "",
};

export const setOrderName = createAction<string>("SET_ORDER_NAME");
export const setOrderPrice = createAction<number | string>("SET_ORDER_PRICE");
export const setOrderDough = createAction<string>("SET_ORDER_DOUGH");
export const setOrderSize = createAction<string>("SET_ORDER_SIZE");
export const setRecommended = createAction<string>("SET_ORDER_RECOMMENDED");
export const setRecommendedStatus = createAction<boolean>(
  "SET_ORDER_RECOMMENDED_STATUS"
);
export const setPoints = createAction<number | string>("SET_POINTS");

export default createReducer(INITIAL_STATE, {
  [setOrderName.type]: (state, action: any) => ({
    ...state,
    name: action.payload,
  }),
  [setOrderPrice.type]: (state, action: any) => ({
    ...state,
    price: action.payload,
  }),
  [setOrderDough.type]: (state, action: any) => ({
    ...state,
    dough: action.payload,
  }),
  [setOrderSize.type]: (state, action: any) => ({
    ...state,
    size: action.payload,
  }),
  [setRecommended.type]: (state, action: any) => ({
    ...state,
    recommended: action.payload,
  }),
  [setRecommendedStatus.type]: (state, action: any) => ({
    ...state,
    recommendedStatus: action.payload,
  }),
  [setPoints.type]: (state, action: any) => ({
    ...state,
    points: action.payload,
  }),
});
