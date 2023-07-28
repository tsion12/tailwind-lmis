import BarChart from "./BarChart";

const AssignedTasksSection = () => {
  return (
    <div className="bg-white rounded-xl h-[80%] flex justify-between px-8">
      <div className="flex flex-col justify-center item-center gap-4">
        <p className="text-lg w-60 mb-2">Total Assigned Documents this month</p>
        <p className="text-4xl font-bold">2460</p>
        <p className=" text-xs ">
          <span className="font-bold text-secondary ">+23% </span>from last week
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <BarChart />
      </div>
    </div>
  );
};
export default AssignedTasksSection;
