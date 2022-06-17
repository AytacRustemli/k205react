import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers/CartReducer";
import { getProductsReducer } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products: getProductsReducer,
    cart: CartReducer,
    user: UserReducer
})


const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    cart:{cartItems:cartItemFromLocalStorage},
    user: {userInfo: userInfoFromLocalStorage}
}


const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;