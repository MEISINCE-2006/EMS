import React from "react";
import { useAuth } from "../../context/authContext";
const Navbar = () => {
    const { user } = useAuth();
    return (
        <div className="flex items-center justify-center h-12 bg-teal-600 px-5">
  <p className="text-white text-xl font-pacific tracking-wide">KANDA GURU HYDRAULICS</p>
</div>

    )
}
export default Navbar