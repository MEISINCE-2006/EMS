import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Privateroutes from "./utils/Privateroutes";
import Rolebasedroutes from "./utils/Rolebasedroutes";
import Adminsummary from "./components/dashboard/Adminsummary";
import Departmentlist from "./components/Departments/Departmentlist";
import Adddepartment from "./components/Departments/Adddepartment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route 
        path="/admin-dashboard" 
        element={
          <Privateroutes>
            <Rolebasedroutes requiredRole={["admin"]}>
              <AdminDashboard />
            </Rolebasedroutes>
          </Privateroutes>
        }
      >
        <Route index element={<Adminsummary />}></Route>
        <Route path="departments" element={<Departmentlist />}></Route>
        <Route path="add-department" element={<Adddepartment />}></Route>
      </Route>
      <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
    </Routes>
  );
}

export default App;