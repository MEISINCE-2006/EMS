import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employeelist = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (err) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employees</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map(employee => (
          <div key={employee._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{employee.name}</h3>
            <p>{employee.email}</p>
            <p>{employee.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employeelist;
