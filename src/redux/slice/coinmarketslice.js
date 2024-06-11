import { createSlice } from "@reduxjs/toolkit";


const coinSlice = createSlice({
    name: "coin",
    initialState: {
        isloading: true,
        data: null,
        isError: true
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
            state.isError = false
        }
    },
})

export const { setData } = coinSlice.actions;

export default coinSlice.reducer;