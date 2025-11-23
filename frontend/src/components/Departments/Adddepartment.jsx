import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adddepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                alert('Please login first');
                navigate('/login');
                return;
            }
            const response = await axios.post(
                'http://localhost:5000/api/department/add',
                department,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.data.success) {
                alert('Department added successfully!');
                navigate("/admin-dashboard/departments");
            } else {
                alert(response.data.error || "Failed to add department");
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                alert('Unauthorized. Please login again.');
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                alert("An error occurred while adding the department");
            }
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
            <h3 className="text-2xl font-bold mb-6">Add Department</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="dep_name"
                        className="text-sm font-medium text-gray-700">
                        Department Name
                    </label>

                    {/* Replaced text input with dropdown */}
                    <select
                        name="dep_name"
                        value={department.dep_name}
                        onChange={handleChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="Welding">Welding</option>
                        <option value="Office">Office</option>
                        <option value="Assistant Labour">Assistant Labour</option>
                        <option value="Helper">Helper</option>
                    </select>
                </div>

                {/* Removed description field (as per request) */}

                <button
                    type="submit"
                    className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Department
                </button>
            </form>
        </div>
    );
}

export default Adddepartment;
