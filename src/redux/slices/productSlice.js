import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getSelectedProductFromStorage = () => {
  if (localStorage.getItem("selected")) {
    return JSON.parse(localStorage.getItem("selected"));
  }
  return {};
};

const initialState = {
  products: [],
  selectedProduct: getSelectedProductFromStorage(),
  loading: false,
};

const writeSelectedProductToStorage = (product) => {
  localStorage.setItem("selected", JSON.stringify(product));
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      writeSelectedProductToStorage(state.selectedProduct);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
