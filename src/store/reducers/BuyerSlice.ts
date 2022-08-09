import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProducts";

interface BuyerState {
  buyerBalance: number;
  buyerProducts: IProduct[];
}

const initialState: BuyerState = {
  buyerBalance: 300, // изначальный баланс покупателя
  buyerProducts: [],
};

const considerBalance = (state: BuyerState) => {
  // функция пересчета баланса
  let x = 0;
  const products = state.buyerProducts;

  if (products.length !== 0) {
    state.buyerBalance =
      initialState.buyerBalance -
      state.buyerProducts
        .map((item) => (x += item.price * item.count), (x = 0))
        .reverse()[0];
  } else {
    state.buyerBalance = initialState.buyerBalance;
  }
};

export const buyerSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addBuyerProduct(state, action: PayloadAction<IProduct>) {
      let stateProduct = state.buyerProducts.filter(
        (product) => product.id === action.payload.id
      )[0];

      if (stateProduct) {
        stateProduct.count = stateProduct.count + action.payload.count;
      } else {
        state.buyerProducts.push(action.payload);
      }

      considerBalance(state);
    },
    removeBuyerProductById(state, action: PayloadAction<Number>) {
      state.buyerProducts = state.buyerProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    removeBuyerProduct(state, action: PayloadAction<IProduct>) {
      let stateProduct = state.buyerProducts.filter(
        (product) => product.id === action.payload.id
      )[0];

      if (stateProduct) {
        stateProduct.count = stateProduct.count - action.payload.count;
      } else {
        state.buyerProducts = state.buyerProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    cnangeBuyerBalance(state) {
      considerBalance(state);
    },
  },
});

export const {
  addBuyerProduct,
  cnangeBuyerBalance,
  removeBuyerProductById,
  removeBuyerProduct,
} = buyerSlice.actions;

export default buyerSlice.reducer;
