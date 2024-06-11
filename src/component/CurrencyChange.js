import React from 'react';
import { setCurrency } from '../redux/slice/defaulslice';
import { useDispatch } from 'react-redux';

const CurrencyChange = () => {

    const dispatch = useDispatch()


    return (
        <div className="flex pr-2 ">
            <select
                className="border rounded-md p-2"
                onChange={(e) => dispatch(setCurrency(e.target.value))}
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