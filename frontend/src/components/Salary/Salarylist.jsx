import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Salarylist = () => {
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/salary');
        setSalaries(response.data);
      } catch (err) {
        setError('Failed to fetch salaries');
      } finally {
        setLoading(false);
      }
    };

    fetchSalaries();
  }, []);

  if (loading) return <div className="p-6">Loading salaries...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Salary Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Employee ID</th>
              <th className="py-2 px-4 border-b">Basic Salary</th>
              <th className="py-2 px-4 border-b">Allowances</th>
              <th className="py-2 px-4 border-b">Deductions</th>
              <th className="py-2 px-4 border-b">Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary) => (
              <tr key={salary._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{salary.employeeId}</td>
                <td className="py-2 px-4 border-b">{salary.basicSalary}</td>
                <td className="py-2 px-4 border-b">{salary.allowances}</td>
                <td className="py-2 px-4 border-b">{salary.deductions}</td>
                <td className="py-2 px-4 border-b">{salary.netSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Salarylist;
