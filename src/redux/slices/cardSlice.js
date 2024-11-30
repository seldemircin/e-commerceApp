import { createSlice } from "@reduxjs/toolkit";

const getCardFromStorage = () => {
  if (localStorage.getItem("card")) {
    return JSON.parse(localStorage.getItem("card"));
  }
  return [];
};

const initialState = {
  productsInCard: getCardFromStorage(),
};

const writeFromCardToStorage = (products) => {
  localStorage.setItem("card", JSON.stringify(products));
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
        writeFromCardToStorage(state.productsInCard);
      }
    },
    deleteItemFromCard: (state, action) => {
      const newCardList = state.productsInCard.filter(
        (item) => item.id != action.payload.id
      );
      state.productsInCard = [...newCardList];
      writeFromCardToStorage(state.productsInCard);
    },
  },
});

export const { addToCard, deleteItemFromCard } = cardSlice.actions;

export default cardSlice.reducer;
