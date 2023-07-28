import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["", ""],
  ["2014", 10],
  ["2015", 1],
  ["2016", 3],
  ["2017", 2],
];

export const options = {
  chart: {
    title: "Tasks Assigned",
  },
  colors: ["#32A583", "#195241", "#0C2920", "#98D2C1"],
  legend: "none",
};

const BarChart = () => {
  return (
    <Chart
      chartType="Bar"
      width="90%"
      height="100%"
      data={data}
      options={options}
    />
  );
};
export default BarChart;
