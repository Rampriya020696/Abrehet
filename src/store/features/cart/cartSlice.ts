import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type CartItem = {
    id: string
    qty: number
}


export interface CartState {
    items: [] | [CartItem]
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items.find(product => product.id === action.payload.id)) {
                state.items = state.items.map(product => {
                    if (product.id === action.payload.id) {
                        let newQty = 0;
                        newQty = action.payload.X ? action.payload.X + product.qty : product.qty + 1
                        return { ...product, qty: newQty }
                    }
                    return product
                })
            } else {
                state.items = [...state.items, { qty: 1, ...action.payload }];
            }
        },
        removeToCart: (state, action) => {
            const pro = state.items.find(product => product.id === action.payload.id)
            if (pro?.qty > 1) {
                // decrement
                state.items = state.items.map(pro => {
                    if (pro.id === action.payload.id) {
                        return { ...pro, qty: pro.qty - 1 }
                    }
                    return pro
                });
            } else {
                //remove
                state.items = state.items.filter(pro => pro.id !== action.payload.id);
            }
        },
    },
})

export const { addToCart, removeToCart } = cartSlice.actions

// Selector
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) =>
    state.cart.items.filter((item) => item.id === id);
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => {
        let currentValue = item.price.replaceAll(" ", "")
        total = total + (Number(currentValue.slice(1)) * item.qty)
        return total
    }, 0);

export default cartSlice.reducer


