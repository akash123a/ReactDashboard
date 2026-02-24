import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Homedashboards  from "./pages/Homedashboards";


import MainLayout from "./layouts/MainLayout";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";

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

         <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>



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
            {/* <Route path="/" element={<Navbar />} /> */}
            
          
        
        {/* <Route path="*" element={<Homedashboards />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;