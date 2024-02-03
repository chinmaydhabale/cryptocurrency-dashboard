import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { fetchchart } from "../../redux/slice/chartslice";
import { setDay, setCurrency, setSelectedcurrency } from "../../redux/slice/defaulslice";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const Horizontalbarchart = () => {

    const dispatch = useDispatch()


    const day = useSelector((state) => state.data.day)
    const chartdata = useSelector((state) => state.chart.data)





    const coinchartvalue = chartdata.data.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
    }));



    const labels = coinchartvalue.map((val) => {
        let date = new Date(val.x);
        let time =
            date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()}PM`
                : `${date.getHours()}:${date.getMinutes()}AM`;
        return day === 1 ? time : date.toLocaleDateString("default", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    })




    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {

            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };





    const data = {
        labels,
        datasets: [
            {
                label: 'Bitcoin',
                data: coinchartvalue.map(val => val.y),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 0,
                pointHoverRadius: 0,
            },
        ],
    };





    return (
        <div>


            <div style={{ height: '500px' }}>
                <Bar data={data} options={options} />
            </div>

        </div>
    )
}

export default Horizontalbarchart;