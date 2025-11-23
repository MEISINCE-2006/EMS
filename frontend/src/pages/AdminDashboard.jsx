  import React from "react";
  import { useAuth } from "../context/authContext";
  import Adminsidebar from "../components/dashboard/Adminsidebar";
  import Navbar from "../components/dashboard/Navbar";
  import Adminsummary from '../components/dashboard/Adminsummary'
  import { Outlet } from "react-router-dom";
  const AdminDashboard = () => {
    const { user } = useAuth();

    return (
      
        <div className="flex">
          <Adminsidebar/>
          <div className="flex-1 ml-64 bg-gray-100 h-screen">
            <Navbar />
            <Outlet/>

          </div>
        </div>
      
    );
  };

  export default AdminDashboard;
