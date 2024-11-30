import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInCard: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      // Ürün zaten varsa, `count` artır.
      const existingProduct = state.productsInCard.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.count =
          Number(existingProduct.count) + Number(action.payload.count);
      } else {
        // Ürün yoksa, yeni ürünü listeye ekle.
        state.productsInCard.push(action.payload);
      }
    },
    deleteItemFromCard: (state, action) => {
      const newCardList = state.productsInCard.filter(
        (item) => item.id != action.payload.id
      );
      state.productsInCard = [...newCardList];
    },
  },
});

export const { addToCard, deleteItemFromCard } = cardSlice.actions;

export default cardSlice.reducer;
