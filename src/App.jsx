import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


 

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Blogs from "./admin/Blogs";
// import Settings from "./admin/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="blogs" element={<Blogs />} />
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;