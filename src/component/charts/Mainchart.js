import React, { useEffect } from 'react'
import Linecharts from './LInecharts'
import Horizontalbarchart from './HorizontalBarchart'
import VerticalBarchart from './VerticalBarchart'
import { useDispatch, useSelector } from 'react-redux'
import { setChart } from '../../redux/slice/chartslice'
import axios from 'axios'
import { setDay } from '../../redux/slice/defaulslice'
import { setcharttype } from '../../redux/slice/defaulslice'

const Mainchart = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const day = useSelector((state) => state.data.day)
    const coinname = useSelector((state) => state.data.selectedcurrency)
    const currency = useSelector((state) => state.data.currency)
    const charttype = useSelector((state) => state.data.charttype)

    const typeofchart = ["Line", "Horizontal", "Vertical"]

    useEffect(() => {
        const fetchart = async () => {
            // const options = {
            //     method: 'GET',
            //     url: `https://coingecko.p.rapidapi.com/coins/${coinname}/market_chart`,
            //     params: {
            //         vs_currency: currency,
            //         days: day
            //     },
            //     headers: {
            //         'X-RapidAPI-Key': 'dc7178cf8bmshd2d947105f875e3p120d48jsn5e9f4f54af4e',
            //         'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            //     }
            // };

            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinname}/market_chart?vs_currency=${currency}&days=${day}&x_cg_demo_api_key=CG-5zPBrvdUpqNomnMh2DqBjeHi`);
                // console.log(response.data);
                dispatch(setChart(response))

            } catch (error) {
                console.error(error);
            }
        }

        fetchart()

    }, [dispatch, coinname, currency, day])

    console.log(state)

    return (
        <div>
            <div>
                <div>
                    <button className='border' onClick={() => dispatch(setDay("1"))}>1 Day</button>
                    <button onClick={() => dispatch(setDay("7"))}>1 Week</button>
                    <button onClick={() => dispatch(setDay("30"))}>1 Month</button>
                    <button onClick={() => dispatch(setDay("365"))}>1 Year</button>
                </div>

                <div>
                    <select
                        onChange={(e) => dispatch(setcharttype(e.target.value))}

                    >
                        <option value={`Line`}>Line</option>
                        <option value={`Horizontal`}>Horizontal</option>
                        <option value={`Vertical`}>Vertical</option>

                    </select>
                </div>

            </div>
            <div>
                {
                    charttype === "Line" ? <Linecharts /> : charttype === "Horizontal" ? <Horizontalbarchart /> : <VerticalBarchart />
                }
            </div>
        </div>
    )
}

export default Mainchart