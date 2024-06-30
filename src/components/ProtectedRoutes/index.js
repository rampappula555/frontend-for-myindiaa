import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const jwtToken = Cookies.get("JWT_TOKEN");
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default ProtectedRoutes;
