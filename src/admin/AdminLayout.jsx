import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { useState } from "react";
import { logout } from "../auth/auth";
 
 

const AdminLayout = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="d-flex">
      {/* Mobile toggle */}
      <Button
        variant="dark"
        className="d-md-none m-2"
        onClick={() => setShow(true)}
      >
        ☰
      </Button>

   

      {/* Sidebar */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        responsive="md"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/admin" className="text-white">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/users" className="text-white">
              Users
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/blogs" className="text-white">
              Blogs
            </Nav.Link>

            <Button
              variant="outline-light"
              className="mt-3"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Page content */}
      <main className="flex-grow-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;