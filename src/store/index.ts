import { configureStore, createStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import categoriesReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';
import productReducer from './products/product.slice';
import cartReducer from './cart/cart.slice';
import orderReducer from './order/order.slice';

// rootReducer로 통합하여 store에 저장하기 위해
// 각각의 reducer 파일로부터 key값과 매치시켜 저장한다.
export const store = configureStore({
    reducer: {
        order: orderReducer,
        product: productReducer,
        cart: cartReducer,
        user: userReducer,
        categories: categoriesReducer,
        products: productsReducer
    }
})

typeof (() => {
    return 'a'
})

type A = ReturnType<() => string>


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
