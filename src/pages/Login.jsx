import { login } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login("dummy_admin_token");
    navigate("/admin");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;