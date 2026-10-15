import useAuth from "./../hooks/useAuth";
import {Navigate} from "react-router-dom"

const Protected = ({ children }) => {
  const { user, loading } = useAuth();

  if (!user) {
    return <Navigate to={"/"}></Navigate>;
  }
  return children;
};

export default Protected;
