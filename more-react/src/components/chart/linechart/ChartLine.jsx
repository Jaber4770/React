import React, { use } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, Treemap, XAxis, YAxis } from 'recharts';


const data = [
    { "month": "January", "sales": 400 },
    { "month": "February", "sales": 460 },
    { "month": "March", "sales": 380 },
    { "month": "April", "sales": 500 },
    { "month": "May", "sales": 620 },
    { "month": "June", "sales": 700 },
    { "month": "July", "sales": 670 },
    { "month": "August", "sales": 610 },
    { "month": "September", "sales": 720 },
    { "month": "October", "sales": 690 },
    { "month": "November", "sales": 750 },
    { "month": "December", "sales": 800 }
];
const salesData = [
    { "month": "January", "sales": 320 },
    { "month": "February", "sales": 410 },
    { "month": "March", "sales": 390 },
    { "month": "April", "sales": 580 },
    { "month": "May", "sales": 610 },
    { "month": "June", "sales": 740 },
    { "month": "July", "sales": 690 },
    { "month": "August", "sales": 630 },
    { "month": "September", "sales": 710 },
    { "month": "October", "sales": 670 },
    { "month": "November", "sales": 780 },
    { "month": "December", "sales": 820 }
]


const ChartLine = ({ pricingAxiosPromise }) => {
    const pricingAxiosData = use(pricingAxiosPromise);
    console.log(pricingAxiosData.data);
    return (
        <div className='my-10'>
            <LineChart width={800} height={500} data={data}>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={"sales"} stroke='red'></Line>
            </LineChart>
            <BarChart width={800} height={500} data={salesData}>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"sales"} fill="#8884d8"></Bar>
            </BarChart>
            <Tooltip></Tooltip>
            <PieChart width={800} height={500} >
                <Pie data={salesData} dataKey={'sales'} outerRadius={80} cx="50%" cy="50%" fill='green' label ></Pie>
                <Pie data={salesData} dataKey={'sales'} innerRadius={60} outerRadius={80} cx="50%" cy="50%" fill='green' label ></Pie>
            </PieChart>
            <Treemap data={data} height={500} width={800} dataKey={'sales'} stroke='white' aspectRatio={4/3}>
            <Tooltip></Tooltip>
            </Treemap>
        </div>
    );
};

export default ChartLine;