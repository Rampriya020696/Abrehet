/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import regionReducer from './features/region/regionSlice'
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        region: regionReducer,
    },
    middleware: [logger]
})