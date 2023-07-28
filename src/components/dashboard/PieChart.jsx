import { Chart } from "react-google-charts";
import { AiOutlineInfoCircle, AiTwotoneCalendar } from "react-icons/ai";

const PieChart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
  ];

  const options = {
    pieSliceText: "none",

    //   legend: {
    //     position: "bottom",
    //     alignment: "center",
    //     textStyle: {
    //       color: "blue", // Customize the color of the legend text
    //       fontSize: 12, // Customize the font size of the legend text
    //     },
    //   },
    legend: "none",
    colors: ["#32A583", "#195241", "#0C2920", "#98D2C1"],
  };
  return (
    <div className="bg-white flex justify-around rounded-xl  h-[50%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center  gap-16">
          {" "}
          <p className="font-bold text-3xl ">Job Professions</p>
          <AiOutlineInfoCircle className="text-gray/50" />
        </div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="100%"
          height="300px"
        />
      </div>
      <div className="flex flex-col justify-center item-center gap-4">
        <div className="flex justify-center items-center gap-3 ">
          <div className="bg-[#0C2920] rounded-full w-15 h-2">
            {" "}
            <p className="text-white">color</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-sm text-gray">Domestic Work</p>
            </div>
            <div>
              <p className="font-bold">3,124,908 users</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <div className="bg-[#195241] rounded-full w-15 h-2">
            {" "}
            <p className="text-white">color</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-sm text-gray">Care Giving</p>
            </div>
            <div>
              <p className="font-bold">3,124,908 users</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <div className="bg-[#32A583] rounded-full w-15 h-2">
            {" "}
            <p className="text-white">color</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-sm text-gray">Housemaids</p>
            </div>
            <div>
              <p className="font-bold">3,124,908 users</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <div className="bg-[#98D2C1] rounded-full w-15 h-2">
            {" "}
            <p className="text-white">color</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-sm text-gray">Other</p>
            </div>
            <div>
              <p className="font-bold">3,124,908 users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PieChart;
