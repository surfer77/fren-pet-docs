// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// initial chart
export let initialDistributionChart = [];
const initialPrice = 1;

for (let i = 0; i < 200; i++) {
  let name = `$${initialPrice + (initialPrice * i + 1) / 100}`;
  let x = 0;
  if (i == 0) {
    x = 100000;
    name = "current price";
  } else if (i % 5 === 0) {
    x = 100000;
    name = "";
  }

  initialDistributionChart.push({
    name: name,
    usd: 0,
    x: x,
    price: (initialPrice + (initialPrice * i + 1) / 100).toFixed(3),
  });
  i++;
}

// after rebalance chart

export let exampleRebalancedChart = [];

for (let i = 0; i < 200; i++) {
  let name = `$${initialPrice + (initialPrice * i + 1) / 100}`;
  let x = 100000;
  let usd = 0;
  if (i % 5 === 0) {
    name = "";
  }

  if (i == 70) {
    x = 50000;
    usd = 50000;
  }

  if (i < 69) x = 0;
  if (i < 70 && i > 65) usd = 100000;

  if (i == 30) usd = 1000000;

  exampleRebalancedChart.push({
    name: name,
    usd: usd,
    x: x,
    price: (initialPrice + (initialPrice * i + 1) / 100).toFixed(3),
  });

  i++;
}

export default function Chart({ dataPassed }) {
  const CustomTooltip = ({ active, payload, label }) => {
    // {
    //     name: "$1",
    //     eth: 4000,
    //     x: 2400,
    //     price: $1,
    //   },
    if (active && payload && payload.length) {
      console.log(payload);
      return (
        <div
          className="custom-tooltip"
          style={{
            padding: "1rem 1rem",
            borderColor: "#257a63",
            backgroundColor: "black",
            border: "2rem",
            opacity: "80",
            zIndex: "50",
            color: "white",
          }}
        >
          <div className="label">{`Price (USD / X)`}</div>
          <div className="label"> ${payload[2].value}</div>
          <div className="totalEth">{`Total USD`}</div>
          <div className="totalEth">{`${payload[0].value}`}</div>
          <div className="totalX">{`Total $LOTUS`}</div>
          <div className="totalX">{`${payload[1].value}`}</div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        barCategoryGap={0.8}
        cursor="pointer"
        // width={760}
        // height={300}
        data={dataPassed}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" / >} */}
        <XAxis dataKey="name" />
        {/* { <YAxis / >} */}
        {/* <Tooltip cursor={{ fill: "transparent", cursor: "pointer" }} /> */}

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "transparent", cursor: "pointer" }}
        />

        <Legend />
        <Bar dataKey="usd" stackId="a" fill="#3c296c" />
        <Bar dataKey="x" stackId="a" fill="#257a63" />
        <Bar dataKey="price" stackId="a" fill="transparent" />
      </BarChart>
    </ResponsiveContainer>
  );
}
