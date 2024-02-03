import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchchart = createAsyncThunk('fetchchart', async (arg) => {
//     const { coin, currency, days } = arg;

//     const options = {
//         method: 'GET',
//         url: `https://coingecko.p.rapidapi.com/coins/${coin}/market_chart`,
//         params: {
//             vs_currency: currency,
//             days: days
//         },
//         headers: {
//             'X-RapidAPI-Key': 'dc7178cf8bmshd2d947105f875e3p120d48jsn5e9f4f54af4e',
//             'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await axios.request(options);
//         // console.log(response.data);
//         return response
//     } catch (error) {
//         console.error(error);
//     }


// });


const chartSlice = createSlice({
    name: "chart",
    initialState: {
        isloading: true,
        data: null,
        isError: false
    },
    reducers: {
        setChart: (state, action) => {
            state.data = action.payload
        }
    },

    // extraReducers: (builder) => {
    //     builder.addCase(fetchchart.pending, (state, action) => {
    //         state.isloading = true;
    //     });
    //     builder.addCase(fetchchart.fulfilled, (state, action) => {
    //         state.isloading = false;
    //         state.data = action.payload;
    //     });
    //     builder.addCase(fetchchart.rejected, (state, action) => {
    //         console.log("Error", action.payload)
    //         state.isError = true
    //     })
    // }

})

export const { setChart } = chartSlice.actions;

export default chartSlice.reducer;