import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = () => {
    const data = {
        datasets: [
            {
                label: 'Sales, Profits, Expenses'
                data: [
                    {x: 5000, y: 3000, r: 10},
                    {x: 7000, y: 4000, r: 15},
                    {x: 4000, y: 2000, r: 8},
                    {x: 8000, y: 5000, r:20},
                ],
                backgroundColor: 'rgb(248, 219, 210)'
            },
        ],
    }
};

const options = {
    responsive: true,
    plugins: {
        legend: {postion: 'top'},
        title: {display: true, text: 'Sales, Profits, and Expenses'},
    },
};

return <ChartComponent type="bubble" data={data} options={options} />;

export default BubbleChart;