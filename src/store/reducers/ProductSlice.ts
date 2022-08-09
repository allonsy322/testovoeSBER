import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProducts";

interface ProductState {
  balance: number;
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  balance: 0,
  products: [],
  isLoading: false,
  error: "",
};

const considerBalance = (state: ProductState) => {
  // функция пересчета баланса
  let x = 0;
  state.balance = state.products
    .map((item) => (x += item.price * item.count), (x = 0))
    .reverse()[0];
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productFetching(state) {
      state.isLoading = true;
    },
    productFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
      // с апи не приходит количество каждого товара у продавца, этот костыль предназначет для рандомного заполнения
      state.products.map((item) => {
        let min = 1;
        let max = 10;

        item.count = Math.floor(Math.random() * (max - min + 1)) + min;
      });

      considerBalance(state);
    },
    productFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      let stateProduct = state.products.filter(
        (product) => product.id === action.payload.id
      )[0];

      if (stateProduct) {
        stateProduct.count = stateProduct.count + action.payload.count;
      } else {
        state.products.push(action.payload);
      }
      considerBalance(state);
    },
    removeProductById(state, action: PayloadAction<Number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      considerBalance(state);
    },
    removeProduct(state, action: PayloadAction<IProduct>) {
      let stateProduct = state.products.filter(
        (product) => product.id === action.payload.id
      )[0];

      if (stateProduct) {
        stateProduct.count = stateProduct.count - action.payload.count;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }

      considerBalance(state);
    },
  },
});

export const { removeProductById, removeProduct,  addProduct} =
  productSlice.actions;

export default productSlice.reducer;
