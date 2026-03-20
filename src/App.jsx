import { BrowserRouter, Routes, Route } from "react-router-dom";

  
 
import Homedashboards  from "./pages/Homedashboards";

 import Home from "./components/Home/Home";
 
  import About from "./components/About/about";  
 import Services from "./components/Services/Services";

  import Contact from "./components/Contact/Contact";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Blogs from "./admin/Blogs";
// import Settings from "./admin/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar/navbar";



function App() {
  return (
    
    <BrowserRouter>
      <Routes>

      
        {/* ADMIN */}
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
        </Route>

        {/* PUBLIC */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/service" element={<><Navbar /><Services /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;