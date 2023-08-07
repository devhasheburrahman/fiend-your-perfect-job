import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Tooltip, Pie, CartesianGrid, XAxis, Bar, YAxis, BarChart, Legend } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='text-center p-8'>
            <h1 className='text-4xl mb-20 ' >All Assignment Marks</h1>



            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />

            </BarChart>


        </div>
    );
};

export default Statistics;