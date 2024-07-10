import { configureStore } from "@reduxjs/toolkit";
import cartSlicers from "../slicers/cart-slicers";

export default configureStore({
    reducer:{
        store:cartSlicers
    }
})