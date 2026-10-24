import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/admin/Dashboard";
import CreateTask from "./pages/admin/CreateTask";
import ManageTask from "./pages/admin/ManageTask";
import ManageUsers from "./pages/admin/ManageUsers";
import PrivateRoute from "./routes/PrivateRoute";
import UserDashboard from "./pages/users/UserDashboard";
import MyTask from "./pages/users/MyTask";
import TaskDetails from "./pages/users/TaskDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Admin Routes */}

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/tasks" element={<ManageTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/* User Routes */}

          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/task" element={<MyTask />} />
            <Route path="/user/task-details/:id" element={<TaskDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
