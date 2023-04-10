/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import regionReducer from './features/region/regionSlice'
import authReducer from './features/auth/index'
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        region: regionReducer,
    },
    middleware: [logger]
})