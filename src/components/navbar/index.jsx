import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavSearchBar from "./components/NavSearchBar";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import UserMenu from "./components/UserMenu";
import "./navbar.css";
import BecomeVendor from "../../modals/become-a-vendor";
const Navbar = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [openBecomeVendorModal, setOpenBecomeVendorModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const handleBecomeVendor = () => {
    setOpenBecomeVendorModal(true);
  };
  const handleCreateEvent = () => {
    //
  };

  return (
    <>
      <nav
        id="navbar"
        ref={navbarRef}
        className="glass shadow-md fixed w-full z-10 text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="logo">
                <h1>evently</h1>
              </Link>
            </div>

            {/* Main navigation */}
            <div className="hidden md:flex space-x-20 items-center">
              <NavSearchBar />

              {user && user.role === "vendor" && (
                <button
                  onClick={handleCreateEvent}
                  className=" flex align-middle items-center gap-1 text-white gray-900 hover:text-primary-main border border-primary-dark rounded-full p-2 px-3 "
                >
                  <IoMdAdd /> Create Event
                </button>
              )}
              {user && user.role === "user" && (
                <button
                  onClick={handleBecomeVendor}
                  className=" flex align-middle items-center gap-1 text-white bg-primary-main hover:bg-primary-dark border border-primary-dark rounded-full p-2 px-3 "
                >
                  <IoMdAdd /> Become a Vendor
                </button>
              )}
            </div>

            {/* Right-side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <UserMenu user={user} />
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    className="text-gray-700 hover:text-primary-dark"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/auth/register"
                    className="px-4 py-2 bg-primary-main text-white rounded-full hover:bg-primary-dark"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Hamburger menu for small screens */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-orange-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <input
                type="text"
                placeholder="Search events"
                className="px-4 py-2 w-full rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                value="Greater Accra"
                className="px-4 py-2 w-full rounded-full border focus:outline-none mt-2"
                readOnly
              />

              <Link
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500"
              >
                Create Events
              </Link>

              <Link
                to="/auth/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500"
              >
                Log In
              </Link>
              <Link
                to="/auth/register"
                className="block px-3 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div style={{ height: navbarHeight, backgroundColor: "#fff" }} />
      {user && (
        <BecomeVendor
          user={user}
          open={openBecomeVendorModal}
          closeModal={() => setOpenBecomeVendorModal(false)}
        />
      )}
    </>
  );
};

export default Navbar;
