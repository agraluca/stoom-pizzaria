/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
};

export const loadingStatus = createAction<boolean>("LOADING_STATUS");

export default createReducer(INITIAL_STATE, {
  [loadingStatus.type]: (state, action: any) => ({
    ...state,
    loading: action.payload,
  }),
});
