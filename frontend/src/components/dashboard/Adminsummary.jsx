import React from "react";
import Summarycard from "./Summarycard";
import { 
  FaUsers, 
  FaBuilding, 
  FaMoneyBillWave,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle
} from "react-icons/fa";

const Adminsummary = () => {
  return (
    <div className="p-6 bg-gray-100 h-screen overflow-hidden flex flex-col animate-fadeIn">

      {/* Dashboard Title */}
      <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md tracking-wide">
        Dashboard Overview
      </h3>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0 mb-12">
        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaUsers/>} text="Total Employees" number={15} color="bg-gradient-to-br from-teal-500 to-teal-700" />
        </div>

        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaBuilding/>} text="Departments" number={3} color="bg-gradient-to-br from-yellow-500 to-orange-600" />
        </div>

        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaMoneyBillWave/>} text="Monthly Salary" number="₹35,000" color="bg-gradient-to-br from-blue-500 to-blue-700" />
        </div>
      </div>

      {/* Leave Title */}
      <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md tracking-wide">
        Leave Details
      </h3>

      {/* Leave Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-shrink-0">
        
        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaFileAlt/>} text="Applied" number={7} color="bg-gradient-to-br from-cyan-500 to-teal-600" />
        </div>

        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaCheckCircle/>} text="Approved" number={2} color="bg-gradient-to-br from-green-500 to-green-700" />
        </div>

        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaHourglassHalf/>} text="Pending" number={4} color="bg-gradient-to-br from-yellow-400 to-yellow-600" />
        </div>

        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
          <Summarycard icon={<FaTimesCircle/>} text="Rejected" number={1} color="bg-gradient-to-br from-red-500 to-red-700" />
        </div>
      </div>

    </div>
  );
};

export default Adminsummary;
