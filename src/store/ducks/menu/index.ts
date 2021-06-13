/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  pizzas: [
    {
      id: "",
      name: "",
      description: "",
      price: "",
      img: "",
    },
  ],
  doughs: [
    {
      id: "",
      name: "",
      description: "",
    },
  ],
  sizes: [
    {
      id: "",
      name: "",
      description: "",
    },
  ],
  recommended: [
    {
      id: "",
      name: "",
      description: "",
      price: "",
      img: "",
      points: "",
    },
  ],
  points: "",
};

type PizzaMenuProps = {
  id: string;
  name: string;
  price: number | string;
  description: string;
  img: string;
};

type PizzaDoughProps = {
  id: string;
  name: string;
  description: string;
};

type PizzaSizeProps = {
  id: string;
  name: string;
  description: string;
};

type RecommendedProps = {
  id: string;
  name: string;
  price: number | string;
  description: string;
  img: string;
  points: number | string;
};

export const getPizzaMenu = createAction<PizzaMenuProps[]>("GET_PIZZA_MENU");
export const getPizzaDough = createAction<PizzaDoughProps[]>("GET_PIZZA_DOUGH");
export const getPizzaSize = createAction<PizzaSizeProps[]>("GET_PIZZA_SIZE");
export const getRecommended =
  createAction<RecommendedProps[]>("GET_RECOMMENDED");

export default createReducer(INITIAL_STATE, {
  [getPizzaMenu.type]: (state, action: any) => ({
    ...state,
    pizzas: action.payload,
  }),
  [getPizzaDough.type]: (state, action: any) => ({
    ...state,
    doughs: action.payload,
  }),
  [getPizzaSize.type]: (state, action: any) => ({
    ...state,
    sizes: action.payload,
  }),
  [getRecommended.type]: (state, action) => ({
    ...state,
    recommended: action.payload,
  }),
});
