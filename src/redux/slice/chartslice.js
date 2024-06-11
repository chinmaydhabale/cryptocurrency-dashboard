import { createSlice } from "@reduxjs/toolkit";


const chartSlice = createSlice({
    name: "chart",
    initialState: {
        isloading: true,
        data: [],
        isError: false
    },
    reducers: {
        setChart: (state, action) => {
            state.data = action.payload
        }
    },

})

export const { setChart } = chartSlice.actions;

export default chartSlice.reducer;