/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: [logger]
})