import { configureStore } from '@reduxjs/toolkit'
import coinreducer from './slice/coinmarketslice'
import chartslice from './slice/chartslice';
import defaulslice from './slice/defaulslice';

const store = configureStore({
    reducer: {
        coininfo: coinreducer,
        chart: chartslice,
        data: defaulslice
    }
})

export default store;