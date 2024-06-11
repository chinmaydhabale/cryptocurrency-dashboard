import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrencyExchange = () => {
    const [cryptos, setCryptos] = useState([]);
    const [fromCrypto, setFromCrypto] = useState('');
    const [toCrypto, setToCrypto] = useState('');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false
            }
        })
            .then(response => {
                setCryptos(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleExchange = () => {
        if (fromCrypto && toCrypto) {
            const fromCryptoData = cryptos.find(crypto => crypto.id === fromCrypto);
            const toCryptoData = cryptos.find(crypto => crypto.id === toCrypto);
            const rate = fromCryptoData.current_price / toCryptoData.current_price;
            setExchangeRate(rate);
        } else {
            setExchangeRate(null);
        }
    };

    if (loading) return <p className="text-center mt-5">Loading...</p>;
    if (error) return <p className="text-center mt-5 text-red-500">Error: {error.message}</p>;

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-xl font-bold mb-5">Cryptocurrency Exchange</h1>
            <div className="mb-5">
                <label htmlFor="from-crypto" className="block text-xl mb-2">From:</label>
                <select
                    id="from-crypto"
                    value={fromCrypto}
                    onChange={(e) => setFromCrypto(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded mb-5"
                >
                    <option value="">--Select a cryptocurrency--</option>
                    {cryptos.map(crypto => (
                        <option key={crypto.id} value={crypto.id}>
                            {crypto.name} ({crypto.symbol.toUpperCase()})
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-5">
                <label htmlFor="to-crypto" className="block text-xl mb-2">To:</label>
                <select
                    id="to-crypto"
                    value={toCrypto}
                    onChange={(e) => setToCrypto(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded mb-5"
                >
                    <option value="">--Select a cryptocurrency--</option>
                    {cryptos.map(crypto => (
                        <option key={crypto.id} value={crypto.id}>
                            {crypto.name} ({crypto.symbol.toUpperCase()})
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleExchange}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Get Exchange Rate
            </button>
            {exchangeRate !== null && (
                <div className="mt-5 p-5 border border-gray-300 rounded shadow">
                    <h2 className="text-2xl font-bold mb-3">Exchange Rate</h2>
                    <p className="text-xl">
                        1 {cryptos.find(crypto => crypto.id === fromCrypto).name} = {exchangeRate.toFixed(6)} {cryptos.find(crypto => crypto.id === toCrypto).name}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CurrencyExchange;
