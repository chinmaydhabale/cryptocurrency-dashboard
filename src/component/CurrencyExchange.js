import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import { getcoins } from '../redux/actions/action'

const CurrencyExchange = () => {

    const dispatch = useDispatch();
    const exchangeresult = useSelector((state) => state)

    const [CoinOne, setCoinOne] = useState("")
    const [CoinSecond, setCoinSecond] = useState("")
    const [coinValue, SetcoinValue] = useState("")
    const [coinValue2, SetcoinValue2] = useState("")
    const [units, setUnits] = useState([]);

    // const coin = exchangeresult.coininfo.rates;


    useEffect(() => {
        if (exchangeresult.coininfo.length === 0) {
            dispatch(getcoins());
        }
    }, []);


    const exchange = () => {
        e.preventDefault()
        const unit = Object.values(coin).find((unit) => {
            return unit.coinValue == coinValue2
        })
        // console.log('unit',unit,'value2',value2)
        // console.log("value", Object.values(coin))
        setUnits(unit.unit)
        let result = (coinValue2 / coinValue) * CoinOne;
        setCoinSecond(result);

    }

    return (
        <div className='border border-current'>
            <form className='m-3 text-xl'>
                <div className='m-3'>Exchange Coins</div>
                <div className='flex m-3 gap-4 py-2'>
                    <div className='flex flex-col gap-4'><div className='text-green-500'>Buy</div> <div className='text-red-500'>Sell</div></div>
                    <div className='flex flex-col gap-4'>
                        <div className='border'>
                            <label>

                                <select onChange={(e) => SetcoinValue(e.target.value)}>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                    <option value="BNB">BNB</option>
                                </select>
                            </label>
                        </div>
                        <div className='border'>
                            <label>
                                <select onChange={(e) => SetcoinValue2(e.target.value)}>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                    <option value="BNB">BNB</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div><input type="text" placeholder='Avl: 0.0004Btc' onChange={(e) => setCoinOne(e.target.value)} className='border rounded' /></div>
                        <div><input type="text" onChange={(e) => setCoinSecond(e.target.value)} placeholder='23000 Eth' className='border rounded' /></div></div>
                </div>
                <div className='m-3'>
                    <input type="submit" value='Exchange' onChange={() => exchange()} className='border border-current rounded-lg bg-blue-500 px-4 py-1' />
                </div>
            </form>
        </div>
    )
}

export default CurrencyExchange