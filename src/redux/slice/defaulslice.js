import { createSlice } from "@reduxjs/toolkit";



const defaultslice = createSlice({
    name: "default",
    initialState: {
        day: '1',
        currency: "usd",
        selectedcurrency: "bitcoin",
        charttype: "Line"
    },
    reducers: {
        setDay: (state, action) => {
            state.day = action.payload
        },
        setCurrency: (state, action) => {
            state.currency = action.payload
        },
        setSelectedcurrency: (state, action) => {
            state.selectedcurrency = action.payload
        },
        setcharttype: (state, action) => {
            state.charttype = action.payload
        }
    }
})

export const { setDay, setCurrency, setSelectedcurrency, setcharttype } = defaultslice.actions

export default defaultslice.reducer;