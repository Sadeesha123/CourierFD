import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const d = [
  { name: "Jan", Month: 7 },
  { name: "Feb", Month: 10 },
  { name: "Mar", Month: 16 },
  { name: "Apr", Month: 20 },
  { name: "May", Month: 5 },
  { name: "Jun", Month: 12 },
  { name: "Jul", Month: 5 },
  { name: "Aug", Month: 9 },
  { name: "Sep", Month: 1 },
  { name: "Oct", Month: 2 },
  { name: "Nov", Month: 4 },
  { name: "Dec", Month: 5 },
];

const BarChartExample = ({ month }) => {
  const [data, setData] = useState([
    { name: "Jan", Month: 7 },
    { name: "Feb", Month: 10 },
    { name: "Mar", Month: 16 },
    { name: "Apr", Month: 20 },
    { name: "May", Month: 5 },
    { name: "Jun", Month: 12 },
    { name: "Jul", Month: 5 },
    { name: "Aug", Month: 9 },
    { name: "Sep", Month: 1 },
    { name: "Oct", Month: 2 },
    { name: "Nov", Month: 4 },
    { name: "Dec", Month: 5 },
  ]);

  useEffect(() => {
    console.log(data);
  }, [month]);

  useEffect(() => {
    console.log(month);
    if (month != null) {
      let newData = d.map((item) => {
        console.log(item);
        if (item.name == month) {
          return {
            name: item.name,
            Month: item.Month,
          };
        } else {
          return {
            name: item.name,
            Month: 0,
          };
        }
      });

      setData(newData);
    }
  }, [month]);

  return (
    <BarChart width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={"Month"} fill="#1565c0" />
    </BarChart>
  );
};

export default BarChartExample;
