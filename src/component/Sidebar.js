// src/Sidebar.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Sidebar = () => {
    const currency = useSelector((state) => state.data.currency);
    const [coin, setcoin] = useState([]);

    useEffect(() => {
        const fetchcoins = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

                setcoin(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchcoins();
    }, [currency]);

    const formatMarketCap = (marketCap) => {
        return (marketCap / 1_000_000).toFixed(2) + 'M';
    };

    return (
        <div className="overflow-y-auto h-screen p-5">
            {coin && coin.map((value, k) => (
                <div key={k} className='flex border mb-2 p-3 rounded'>
                    <div className='flex flex-col w-2/3'>
                        <div className="font-bold">{value.name}</div>
                        <div>{formatMarketCap(value.market_cap)}</div>
                    </div>
                    <div className='flex justify-center items-center w-1/3'>
                        {value.price_change_percentage_24h > 0 && (
                            <span className="text-green-500 mr-1">▲</span>
                        )}
                        {value.price_change_percentage_24h < 0 && (
                            <span className="text-red-500 mr-1">▼</span>
                        )}
                        <span className={value.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                            {value.price_change_percentage_24h}%
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
