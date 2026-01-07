import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaveslist = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/leave', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setLeaves(response.data.leaves);
      } catch (err) {
        setError('Failed to fetch leaves');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  if (loading) return <div className="p-6">Loading leaves...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Leaves Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Employee ID</th>
              <th className="py-2 px-4 border-b">Leave Type</th>
              <th className="py-2 px-4 border-b">Start Date</th>
              <th className="py-2 px-4 border-b">End Date</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{leave.employeeId}</td>
                <td className="py-2 px-4 border-b">{leave.leaveType}</td>
                <td className="py-2 px-4 border-b">{new Date(leave.startDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{new Date(leave.endDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaveslist;
