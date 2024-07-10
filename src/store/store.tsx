import { configureStore } from "@reduxjs/toolkit";
import likeSlice   from "../slicers/likes-slicer";

export default configureStore({
    reducer:{
        store:likeSlice,
    }
})