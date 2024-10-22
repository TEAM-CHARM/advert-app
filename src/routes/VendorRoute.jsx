import { useSelector } from "react-redux";

import LoadingToRedirect from "./LoadingToRedirect";

const VendorRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user?.role === "vendor" ? (
    <div>{children}</div>
  ) : (
    <LoadingToRedirect to="/auth/login" message="You should be a vendor to access this route." />
  );
};

export default VendorRoute;
