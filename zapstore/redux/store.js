import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/product/productSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});