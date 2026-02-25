// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Button, Offcanvas, Nav } from "react-bootstrap";

// const Sidebar = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       {/* Toggle button for mobile */}
//       <Button
//         variant="dark"
//         className="d-md-none m-2"
//         onClick={() => setShow(true)}
//       >
//         ☰ Menu
//       </Button>

//       {/* Sidebar */}
//       <Offcanvas
//         show={show}
//         onHide={() => setShow(false)}
//         responsive="md"
//         className="bg-dark text-white"
//       >
//         <Offcanvas.Header closeButton closeVariant="white">
//           <Offcanvas.Title>Dashboard</Offcanvas.Title>
//         </Offcanvas.Header>

//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={NavLink} to="/" className="text-white">
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/about" className="text-white">
//               About
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/service" className="text-white">
//               Service
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Sidebar;