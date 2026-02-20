import { Outlet, Link } from "react-router-dom";
import { logout } from "../auth/auth";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <aside style={{ width: "220px", background: "#111", color: "#fff", minHeight: "100vh" }}>
        <h3 className="p-3">Admin Panel</h3>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/blogs">Blogs</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li>
            <button onClick={() => {
              logout();
              window.location.href = "/login";
            }}>
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Page Content */}
      <main style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;