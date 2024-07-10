import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    cartItems:[],
    cartCount:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
            addToCart(state:any, action){
                state.cartItems.push(action.payload);
                state.cartCount=state.cartItems.length;
            }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;