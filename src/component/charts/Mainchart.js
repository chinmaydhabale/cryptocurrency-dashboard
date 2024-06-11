import React, { useEffect, useState } from 'react';
import Linecharts from './LInecharts';
import Horizontalbarchart from './HorizontalBarchart';
import VerticalBarchart from './VerticalBarchart';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDay, setSelectedcurrency } from '../../redux/slice/defaulslice';
import { setcharttype } from '../../redux/slice/defaulslice';

const Mainchart = () => {
    const dispatch = useDispatch();
    const day = useSelector((state) => state.data.day);
    const coinname = useSelector((state) => state.data.selectedcurrency);
    const currency = useSelector((state) => state.data.currency);
    const charttype = useSelector((state) => state.data.charttype);

    const [chart, setChart] = useState([]);
    const [coinidlist, setCoinIdList] = useState([]);

    useEffect(() => {
        const fetchChart = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinname}/market_chart?vs_currency=${currency}&days=${day}`);
                setChart(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (coinname) {
            fetchChart();
        }
    }, [coinname, currency, day]);

    useEffect(() => {
        const getCoinIdList = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`);
                setCoinIdList(data);
            } catch (error) {
                console.error(error);
            }
        };

        getCoinIdList();
    }, [currency]);

    return (
        <div>
            <div className="lg:flex gap-6 flex-wrap">
                <div className='flex gap-6'>
                    <button className={day === "1" ? "border-solid border-2 border-indigo-600 rounded-sm p-2 text-red-500" : "text-black-500"} onClick={() => dispatch(setDay("1"))}>1 Day</button>
                    <button className={day === "7" ? "border-solid border-2 border-indigo-600 rounded-sm p-2 text-red-500" : "text-black-500"} onClick={() => dispatch(setDay("7"))}>1 Week</button>
                    <button className={day === "30" ? "border-solid border-2 border-indigo-600 rounded-sm p-2 text-red-500" : "text-black-500"} onClick={() => dispatch(setDay("30"))}>1 Month</button>
                    <button className={day === "180" ? "border-solid border-2 border-indigo-600 rounded-sm p-2 text-red-500" : "text-black-500"} onClick={() => dispatch(setDay("180"))}>6 Month</button>
                    <button className={day === "365" ? "border-solid border-2 border-indigo-600 rounded-sm p-2 text-red-500" : "text-black-500"} onClick={() => dispatch(setDay("365"))}>1 Year</button>
                </div>

                <div>
                    <select
                        onChange={(e) => dispatch(setcharttype(e.target.value))}
                        name='ChartType'
                        className="mt-4 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="" disabled selected>Chart Type</option>
                        <option value="Line">Line</option>
                        <option value="Horizontal">Horizontal</option>
                        <option value="Vertical">Vertical</option>
                    </select>
                </div>

                <div>
                    <select
                        onChange={(e) => dispatch(setSelectedcurrency(e.target.value))}
                        name='SelectCryptocurrency'
                        className="mt-4 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="" disabled selected>Select Cryptocurrency</option>
                        {coinidlist.map((coin) => (
                            <option key={coin.id} value={coin.id} className="text-gray-600">
                                {coin.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                {charttype === "Line" && <Linecharts chartdata={chart} />}
                {charttype === "Horizontal" && <Horizontalbarchart chartdata={chart} />}
                {charttype === "Vertical" && <VerticalBarchart chartdata={chart} />}
            </div>
        </div>
    );
};

export default Mainchart;
