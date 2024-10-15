import { useSelector } from "react-redux";

import LoadingToRedirect from "./LoadingToRedirect";

const VendorRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.roles.includes("vendor") ? (
    <div>{children}</div>
  ) : (
    <LoadingToRedirect to="/login" message="You should be a vendor to access this route." />
  );
};

export default VendorRoute;
