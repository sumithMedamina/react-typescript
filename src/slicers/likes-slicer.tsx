import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    likes:0,
    views:0,
    library:[]
}

const likesSlice = createSlice({
    name:'likes',
    initialState,
    reducers:{
        likesCounter(state:any, action){
            state.likes= state.likes + 1;
            state.views++;
        },
        saveToView(state:any, action){
            state.library.push(action.payload);
        }
    }
})

export const {likesCounter, saveToView} = likesSlice.actions;
export default likesSlice.reducer ;