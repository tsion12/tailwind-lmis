import { PiNoteBold } from "react-icons/pi";

const CountSection = () => {
  return (
    <div className=" flex justify-around items-center bg-gradient-to-b from-primary via-secondary to-tertiary rounded-xl h-[20%] ">
      <div className="flex gap-4">
        <div className="bg-white flex items-center justify-center w-8 h-8 rounded-full p-2">
          <PiNoteBold color="#036666" size={30} />
        </div>

        <div className="flex flex-col">
          <p className="text-white text-sm font-bold">Total Applicants</p>
          <p className="text-white text-lg font-bold">1000</p>
          <p className="text-white text-xs ">
            <span className="font-bold">+23% </span>from last week
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="bg-white flex items-center justify-center w-8 h-8 rounded-full p-2">
          <PiNoteBold color="#036666" size={30} />
        </div>

        <div className="flex flex-col">
          <p className="text-white text-sm font-bold">Total Applicants</p>
          <p className="text-white text-lg font-bold">1000</p>
          <p className="text-white text-xs ">
            <span className="font-bold">+23% </span>from last week
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="bg-white flex items-center justify-center w-8 h-8 rounded-full p-2">
          <PiNoteBold color="#036666" size={30} />
        </div>

        <div className="flex flex-col">
          <p className="text-white text-sm font-bold">Total Applicants</p>
          <p className="text-white text-lg font-bold">1000</p>
          <p className="text-white text-xs ">
            <span className="font-bold">+23% </span>from last week
          </p>
        </div>
      </div>
    </div>
  );
};
export default CountSection;
