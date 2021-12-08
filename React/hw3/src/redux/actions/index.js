import {
  DATA_REQUEST_STARTED,
  DATA_REQUEST_SUCCESS,
  DATA_REQUEST_FAILURE,
  ADD_FAVORITE_STARTED,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  REMOVE_FAVORITE_STARTED,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_FAILURE,
  ADD_CART_STARTED,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  REMOVE_CART_STARTED,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
  ADD_CONFIRM_MODAL,
  REMOVE_CONFIRM_MODAL,
  ADD_REGECT_MODAL,
  REMOVE_REGECT_MODAL,
} from "../types";
import axios from "axios";

export const dataRequestStarted = () => ({
  type: DATA_REQUEST_STARTED,
});

export const dataRequestSuccess = (data) => ({
  type: DATA_REQUEST_SUCCESS,
  payload: data,
});

export const dataRequestFailure = (error) => ({
  type: DATA_REQUEST_FAILURE,
  payload: error,
});

// ============
//добавление в избранное
export const addFavoriteStarted = () => ({
  type: ADD_FAVORITE_STARTED,
});

export const addFavoriteSuccess = (favorite) => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: favorite,
});

export const addFavoriteFailure = (error) => ({
  type: ADD_FAVORITE_FAILURE,
  payload: error,
});

export const addDataFavorite = (favorite) => {
  return (dispatch) => {
    dispatch(addFavoriteStarted());
    dispatch(addFavoriteSuccess(favorite));
  };
};

// ============

// удаление из избранного

export const removeFavoriteStarted = () => ({
  type: REMOVE_FAVORITE_STARTED,
});

export const removeFavoriteSuccess = (favorite) => ({
  type: REMOVE_FAVORITE_SUCCESS,
  payload: favorite,
});

export const removeFavoriteFailure = (error) => ({
  type: REMOVE_FAVORITE_FAILURE,
  payload: error,
});

export const removeDataFavorite = (favorite) => {
  return (dispatch) => {
    dispatch(removeFavoriteStarted());
    dispatch(removeFavoriteSuccess(favorite));
  };
};

// ============
// ============
//добавление в корзину
export const addCartStarted = () => ({
  type: ADD_CART_STARTED,
});

export const addCartSuccess = (cart) => ({
  type: ADD_CART_SUCCESS,
  payload: cart,
});

export const addCartFailure = (error) => ({
  type: ADD_CART_FAILURE,
  payload: error,
});

export const addDataCart = (cart) => {
  return (dispatch) => {
    dispatch(addCartStarted());
    dispatch(addCartSuccess(cart));
  };
};

// ============
//удаление из корзины

export const removeCartStarted = () => ({
  type: REMOVE_CART_STARTED,
});

export const removeCartSuccess = (cart) => ({
  type: REMOVE_CART_SUCCESS,
  payload: cart,
});

export const removeCartFailure = (error) => ({
  type: REMOVE_CART_FAILURE,
  payload: error,
});

export const removeDataCart = (cart) => {
  return (dispatch) => {
    dispatch(removeCartStarted());
    dispatch(removeCartSuccess(cart));
  };
};

//======================

//добавление и модалки confirm
export const addConfirmModal = () => ({
  type: ADD_CONFIRM_MODAL,
  payload: true,
});

export const removeConfirmModal = () => ({
  type: REMOVE_CONFIRM_MODAL,
  payload: false,
});

//======================

//добавление и модалки regect
export const addRegectModal = () => ({
  type: ADD_REGECT_MODAL,
  payload: true,
});

export const removeRegectModal = () => ({
  type: REMOVE_REGECT_MODAL,
  payload: false,
});

//======================

export const dataRequest = () => {
  return (dispatch, getState) => {
    dispatch(dataRequestStarted());

    axios
      .get("../../items.json", [])
      .then((res) => {
        dispatch(dataRequestSuccess(res.data));
      })
      .catch((err) => {
        dispatch(dataRequestFailure(err.message));
      });
  };
};
