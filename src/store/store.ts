import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/ProductSlice'
import dealReducer from './reducers/DealSlice'
import buyerReducer from './reducers/BuyerSlice'

const rootReducer = combineReducers({
    productReducer,
    dealReducer,
    buyerReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']