import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchcoins = createAsyncThunk('fetchcoins', (currency) => {
//     // try {

//     //     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
//     //     return response
//     // } catch (error) {
//     //     console.log(error)
//     // }

//     // axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
//     //     .then((response) => {
//     //         return response;
//     //     })
//     //     .catch((error) => console.log(error))

//     const res = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
//     res.then((res) => console.log(res)).catch((error) => console.log(error))
// });


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
    // extraReducers: (builder) => {
    //     builder.addCase(fetchcoins.pending, (state, action) => {
    //         state.isloading = true;
    //     });
    //     builder.addCase(fetchcoins.fulfilled, (state, action) => {
    //         state.isloading = false;
    //         state.data = action.payload;
    //     });
    //     builder.addCase(fetchcoins.rejected, (state, action) => {
    //         console.log("Error", action.payload)
    //         state.isError = true
    //     })
    // }

})

export const { setData } = coinSlice.actions;

export default coinSlice.reducer;