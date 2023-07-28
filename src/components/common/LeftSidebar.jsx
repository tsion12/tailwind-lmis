import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiFillAppstore,
  AiFillFolderOpen,
  AiOutlineLeft,
} from "react-icons/ai";
import Bottom from "../../assets/Button.png";

import LocalApplicantsContent from "../../pages/LocalApplicantsSection";

const LeftSidebar = () => {

 

  return (
    <>
      <aside
        className="pb-5 pt-32 z-5 h-full w-230 bg-white  flex flex-col items-center transition-transform duration-300 ease-in-out"
      
      >
        <div className="flex flex-col mt-20 justify-start px-4 w-full">
          {/* eziga react icon asegebi ldasheboard*/}
          <Link
            to="/"
            className="mb-4 flex items-center bg-bgcolor py-2 rounded-md"
          >
            <AiFillAppstore className="text-secondary w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          {/* ezi ga le local applicants */}
          <Link
            to="/local-applicants"
            className="mb-4 flex items-center "
          >
            <AiFillFolderOpen className="w-6 h-6 mr-2 text-gray " />

            <span className="text-sm font-medium">Local Applicants</span>
          </Link>

          {/* ezi ga 3gna icon */}
          <Link
            to="#"
            className="flex items-center "
          >
            <AiFillFolderOpen className="w-6 h-6 mr-2 text-gray " />
            <span className="text-sm font-medium">Foreign Applicants</span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center bg-bgcolor mt-auto rounded-md w-208 h-123 py-1 px-2 space-y-2">
          {" "}
          <p className="text-xs text-black font-bold">Powered by</p>
          {/*lmis logo*/}
          <img src={Bottom} alt="Company Logo" />
        </div>
      </aside>
      
      <div
        className="fixed top-[140px] left-[175px] z-10 h-10 w-10 flex items-center justify-center transition-transform duration-300 ease-in-out ${
            translate-x-0"
      
       
      >
       <AiOutlineLeft size={32} className=" text-secondary font-bold bg-bgcolor rounded-md p-2"/>
      </div>
    </>
  );
};

export default LeftSidebar;
