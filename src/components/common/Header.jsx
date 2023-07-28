import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/Layer_1.png";
import User from "../../assets/Ellipse 2.png";
import Ethio from "../../assets/diagonal.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutsideDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-header text-white py-4 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Company Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">
          Ethio Migrant Database Management System (EMDMS)
        </h1>
      </div>

      <div className=" fixed top-0 right-0 w-1/3 bg-white flex items-center p-1 justify-end space-x-4">
        <img
          src={Ethio}
          alt="Company Logo"
          className=" w-64 h-36  absolute top-0 left-1/4 transform -translate-x-64 -translate-y-1/2"
        />

        <div>
          <span className="text-black font-semibold">Abebe Kebede</span>
          <span className="block text-sm text-black">ID: 123456</span>{" "}
        </div>

        <div className="relative flex items-center px-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            className="rounded-full bg-primary "
          >
            <img
              src={User}
              alt="User Profile"
              className="w-16 h-16 rounded-full"
            />
          </button>
          {/* SVG icon for the dropdown */}
          <svg
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            className={`w-6 h-6 ml-1 text-black cursor-pointer ${
              showDropdown ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {showDropdown && (
            <ul
              ref={dropdownRef}
              className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg"
            >
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
