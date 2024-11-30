import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import appReducer from "./slices/appSlice";
import cardReducer from "./slices/cardSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    app: appReducer,
    card: cardReducer,
  },
});
