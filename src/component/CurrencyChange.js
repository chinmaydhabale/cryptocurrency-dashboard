import React, { useState } from 'react';

const CurrencyChange = () => {

    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const handleCurrencyChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCurrency(selectedValue);
    };


    return (
        <div className="flex items-center pr-2">
            <select
                className="border p-2 rounded-md"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
            >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="JPY">JPY</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}

export default CurrencyChange