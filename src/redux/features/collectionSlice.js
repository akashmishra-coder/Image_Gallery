import { createSlice } from "@reduxjs/toolkit"
import { toast, Zoom } from "react-toastify"

const initialState ={
   item: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state, action) =>{
            const alreadyExist = state.item.find(
                item => item.id === action.payload.id
            )
            if(!alreadyExist){
                state.item.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.item));
            }
        
        },
        removeCollection:(state, action) =>{
            state.item = state.item.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.item));
        },
        clearCollection:(state) =>{
            state.item = []
            localStorage.removeItem("collection")
        },
        addedToast:() => {
            toast.success('added to collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                });
        },
        removeToast:() => {
            toast.success('removed from collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                });
        },
        removeAllToast:() => {
            toast.success('Removed All Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                });
        },
    }
}) 

export const {addCollection, removeCollection, clearCollection , addedToast, removeToast, removeAllToast} = collectionSlice.actions;
 
export default collectionSlice.reducer