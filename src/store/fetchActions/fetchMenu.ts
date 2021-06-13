import { loadingStatus } from "store/ducks/loading";
import api from "config/axios";
import { AppDispatch } from "store";
import {
  getPizzaMenu,
  getPizzaDough,
  getPizzaSize,
  getRecommended,
} from "store/ducks/menu";

export const fetchGetMenu = () => {
  return (dispatch: AppDispatch) => {
    dispatch(loadingStatus(true));
    api
      .get(`pizza`)
      .then((res) => {
        console.log(res.data);
        dispatch(getPizzaMenu(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        dispatch(loadingStatus(false));
      });
  };
};

export const fetchGetDough = () => {
  return (dispatch: AppDispatch) => {
    dispatch(loadingStatus(true));
    api
      .get(`dough`)
      .then((res) => {
        console.log(res.data);
        dispatch(getPizzaDough(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        dispatch(loadingStatus(false));
      });
  };
};

export const fetchGetSize = () => {
  return (dispatch: AppDispatch) => {
    dispatch(loadingStatus(true));
    api
      .get(`size`)
      .then((res) => {
        console.log(res.data);
        dispatch(getPizzaSize(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        dispatch(loadingStatus(false));
      });
  };
};

export const fetchGetRecommended = () => {
  return (dispatch: AppDispatch) => {
    dispatch(loadingStatus(true));
    api
      .get(`recommended`)
      .then((res) => {
        console.log(res.data);
        dispatch(getRecommended(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        dispatch(loadingStatus(false));
      });
  };
};
