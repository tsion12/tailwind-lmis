import React from "react";

import CountSection from "../components/dashboard/CountSection";

import AssignedTasksSection from "../components/dashboard/AssignedTasksSection";

import TableCard from "../components/dashboard/TableCard";
import CurvedAreaChart from "../components/dashboard/AreaChart";
import PieChart from "../components/dashboard/PieChart";




const DashboardPage = () => {
  return (
    <div className="flex-grow h-full bg-gray-100 ">
      <div className="min-h-screen">
        <div className="px-5 pt-20 ">
          <div className="w-full mt-10 flex gap-4">
            <div className="flex flex-col h-[calc(100vh-140px)] gap-4 w-3/5">
              {/* countSection */}
              <CountSection />
              <AssignedTasksSection />
              <TableCard />
            </div>

            <div className=" flex flex-col h-[calc(100vh-140px)] gap-4 w-2/5">
             
                <PieChart />
              
              
                <CurvedAreaChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default DashboardPage;
