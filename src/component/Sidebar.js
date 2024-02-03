import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchcoins } from '../redux/slice/coinmarketslice'
import { setData } from '../redux/slice/coinmarketslice'
import axios from 'axios'




const Sidebar = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const currency = useSelector((state) => state.data.currency)
    const [coin, setcoin] = useState()

    useEffect(() => {
        const fetchcoins = async () => {
            try {
                const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-5zPBrvdUpqNomnMh2DqBjeHi`)

                // console.log(res)
                // dispatch(setData(res))
                setcoin(res)
            } catch (error) {
                console.log(error)
            }

        }
        fetchcoins()


    }, [currency])

    console.log(coin)

    // console.log(state)
    // if (state.coininfo.isloading) {
    //     return <h1>Loading....</h1>
    // }

    return (
        <>
            {coin.data.map((value) => {
                return (<div className='flex border'>
                    <div className='flex flex-col border p-3 w-1/2'>
                        <div>{value.name}</div>
                        <div>{value.market_cap}</div>
                    </div>
                    <div className='flex justify-center	aling-center items-center border p-3 w-1/2'>{value.price_change_percentage_24h}%</div>
                </div>)
            })}
        </>
    )
}

export default Sidebar