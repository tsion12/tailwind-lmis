import React from "react";
import { Chart } from "react-google-charts";
import { AiOutlineInfoCircle, AiTwotoneCalendar } from "react-icons/ai";
const CurvedAreaChart = () => {
  const data = [
    ["", ""],
    ["Jan", 100],
    ["Feb", 200],
    ["Mar", 300],
    ["Apr", 100],
    ["June", 30],
    ["July", 10],
    ["Aug", 30],
    ["Jun", 10],
  ];

  const options = {
    curveType: "function", // This makes the line curved
    legend: { position: "bottom" },
    colors: ["#32A583"],

    areaOpacity: 0.1, // Opacity of the shaded area under the curve
  };

  return (
    <div className="bg-white flex flex-col justify-around rounded-xl   h-[50%]">
      <div className="flex justify-center items-center gap-16">
        {" "}
        <p className="font-bold text-3xl">Monthly Activity</p>
        <AiOutlineInfoCircle className="text-gray/50" />
        <div className="flex justify-between items-center border border-gray rounded-md">
          <p className="font-bold px-4 ">March 2023 </p>
          <AiTwotoneCalendar className="text-[#005656]" />
        </div>
      </div>
      <div>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default CurvedAreaChart;
