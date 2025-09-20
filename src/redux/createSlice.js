import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        item : [],
    },
    reducers : {
        addToCart :(state,action)=>{
            const item = action.payload;
            const existing = state.item.find((i) => i.id === item.id);

            if (existing) {
                existing.quantity += 1;
            }else {
                state.item.push({...item,quantity: 1});
            }
        },

        removeFromCart :(state, action)=>{
            state.item.filter((i)=> i.id !== action.payload);
        },

        increaseQty : (state, action) =>{
            const item = state.item.find((i) => i.id === action.payload);
            if(item) item.quantity += 1;
        },

        decreaseQty : (state, action) => {
            const item = state.item.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity += 1;
            }else{
                state.item = state.item.filter((i) => i.id !== action.payload);
            }
        },
    },
});

export const {addToCart, removeFromCart, increaseQty,decreaseQty} = cartSlice.actions;

export default cartSlice.reducer;

