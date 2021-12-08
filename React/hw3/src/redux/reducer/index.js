import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

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

const initialStore = {
  data: [],
  favorite: [],
  cart: [],
  confirmModal: false,
  regectModal: false,
};

function rootReducer(store = initialStore, action) {
  switch (action.type) {
    case DATA_REQUEST_STARTED:
      return {
        ...store,
        loading: true,
      };
    case DATA_REQUEST_SUCCESS:
      return {
        ...store,
        loading: false,
        data: action.payload,
      };
    case DATA_REQUEST_FAILURE:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    // ======== добавление в избранное
    case ADD_FAVORITE_STARTED:
      return {
        ...store,
        loading: true,
      };
    case ADD_FAVORITE_SUCCESS:
      return {
        ...store,
        loading: false,
        favorite: action.payload,
      };
    case ADD_FAVORITE_FAILURE:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    // =========== удаление из избранного
    case REMOVE_FAVORITE_STARTED:
      return {
        ...store,
        loading: true,
      };
    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...store,
        loading: false,
        favorite: action.payload,
      };
    case REMOVE_FAVORITE_FAILURE:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };

    // ======== добавление в корзину
    case ADD_CART_STARTED:
      return {
        ...store,
        loading: true,
      };
    case ADD_CART_SUCCESS:
      return {
        ...store,
        loading: false,
        cart: action.payload,
      };
    case ADD_CART_FAILURE:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };

    //================удаление из корзины
    case REMOVE_CART_STARTED:
      return {
        ...store,
        loading: true,
      };
    case REMOVE_CART_SUCCESS:
      return {
        ...store,
        loading: false,
        cart: action.payload,
      };
    case REMOVE_CART_FAILURE:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };

    //добавление и удаление модалки confirm
    case ADD_CONFIRM_MODAL:
      return {
        ...store,
        confirmModal: true,
      };

    case REMOVE_CONFIRM_MODAL:
      return {
        ...store,
        confirmModal: false,
      };

    //==============

    //добавление и удаление модалки confirm
    case ADD_REGECT_MODAL:
      return {
        ...store,
        regectModal: true,
      };

    case REMOVE_REGECT_MODAL:
      return {
        ...store,
        regectModal: false,
      };

    //==============

    default:
      return store;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
