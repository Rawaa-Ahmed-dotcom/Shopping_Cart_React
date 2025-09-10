
import {createSlice} from "@reduxjs/toolkit";

const cartItems = createSlice({
    name : "cartItems",
    initialState : {items : []},
    reducers : {
        addToCart : (state,action) => {
            const exisitingItem = state.items.find((item) => item.id === action.payload.id);
            if(exisitingItem) {
                exisitingItem.quantity += 1;
            }else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart : (state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);

        },
        updateQuantity : (state,action) => {
            const {operation,cartItem} = action.payload;
            if(cartItem.quantity <= 0) {
                state.items = state.items.filter(item => item.id !== cartItem.id);
            }else {
                const exisitingItem = state.items.find((item) => item.id === cartItem.id);
                if(exisitingItem) {
                    if(operation === "increment") {
                        exisitingItem.quantity += 1;
                    }else if(operation=== "decrement") {
                        exisitingItem.quantity -= 1;
                        if(exisitingItem.quantity <= 0) {
                            state.items = state.items.filter(item => item.id !== cartItem.id);
                        }
                    }
                }
            }
        },

        clearCart : (state,action) => {
            state.items = [];
        }
    }
})

export default cartItems.reducer;
export const {addToCart,removeFromCart,updateQuantity,clearCart} = cartItems.actions;