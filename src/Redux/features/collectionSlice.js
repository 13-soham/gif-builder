import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || []
};

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {

            state.items.push(action.payload);
            localStorage.setItem("collection", JSON.stringify(state.items));

        },
        removeCollection: (state, action) => {
            
            state.items = state.items.filter((item) => {
                return item.id !== action.payload.id;
            });

            localStorage.setItem("collection", JSON.stringify(state.items));
        },
        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem("collection");
        },
        addToast: () => {
            toast.success('added in Collection', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },
        removeToast: () => {
            toast.error('remove from collection', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },
        infoToast: () => {
            toast.info('Alerady added', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
});


export const {
    addCollection,
    removeCollection,
    clearCollection,
    addToast,
    removeToast,
    infoToast
} = collectionSlice.actions;

export default collectionSlice.reducer;