import { Outlet, Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthWrapper = ({ isAllowed, redirectPath = "/sign-in", children }) => {
  const location = useLocation();

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};

AuthWrapper.propTypes = {
  isAllowed: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
