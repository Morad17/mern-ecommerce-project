import { configureStore, createSlice } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReducer, productDetailsReducer } from './Reducers/ProductReducers'


const store = configureStore({
    reducer: {
        productList : productListReducer,
        productDetails : productDetailsReducer
    }
})

export default store