import { Navigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

function ProtectedRoute({ children }) {
  const { userId } = useAppContext();
  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
