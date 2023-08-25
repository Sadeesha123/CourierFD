import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 350 },
  { name: 'Mar', value: 100 },
  // Add more data points as needed
];

const MonthlyProgress = () => {
  return (
    <div className="h-full p-3 w-full justify-center text-center rounded-lg flex flex-col  bg-white">
      <span className="font-semibold text-slate-900 text-[18px]">Monthly Progress</span>
      <div className="mt-3 flex flex-row justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyProgress;
