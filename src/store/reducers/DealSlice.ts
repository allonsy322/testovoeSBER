import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProducts";

interface DealState {
  status: string;
  dealBalance: number;
  dealProducts: IProduct[];
}

const initialState: DealState = {
  status: "none",
  dealBalance: 0,
  dealProducts: [],
};

const considerBalance = (state: DealState) => {
  // функция пересчета баланса
  let x = 0;
  state.dealBalance = state.dealProducts
    .map((item) => (x += item.price * item.count), (x = 0))
    .reverse()[0];
};

export const dealSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    addDealProduct(state, action: PayloadAction<IProduct>) {
      let stateProduct = state.dealProducts.filter(
        (product) => product.id === action.payload.id
      )[0];

      if (stateProduct) {
        stateProduct.count = stateProduct.count + action.payload.count;
      } else {
        state.dealProducts.push(action.payload);
      }

      considerBalance(state);
    },
    removeDealProductId(state, action: PayloadAction<number>) {
      state.dealProducts = state.dealProducts.filter(
        (product) => product.id !== action.payload
      );

      considerBalance(state);
    },
    removeAllDealProducts(state) {
      state.dealProducts = [];
      state.status = "none";
      considerBalance(state);
    },
  },
});

export const {
  changeStatus,
  addDealProduct,
  removeAllDealProducts,
  removeDealProductId
} = dealSlice.actions;

export default dealSlice.reducer;
