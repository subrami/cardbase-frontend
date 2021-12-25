import React from 'react'
import { Line } from 'react-chartjs-2'
import { Line as ChartJS } from 'chart.js/auto'

const data = {
    labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    datasets: [
        {
            label: 'Balance',
            fill: false,
            lineTension: 0.55,
            backgroundColor: '#B57295',
            borderColor: '#E37892',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            borderJoinStyle: '#B57295',
            pointBorderColor: '#B57295',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#B57295',
            pointHoverBorderColor: '#000000',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                6500, 6100, 6400, 6700, 5400, 5800, 6400, 6000, 6600, 6200,
                7000, 7510,
            ],
        },
    ],
}

const options = {
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
            // beginAtZero: true, // this works
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: '#B57295',
        },
    },
}

const BalanceChart = () => <Line data={data} options={options} />

export default BalanceChart
