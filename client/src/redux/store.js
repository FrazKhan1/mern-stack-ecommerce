import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  user: userSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
