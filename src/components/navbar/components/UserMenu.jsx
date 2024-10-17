import React, { useState } from 'react';
import { FaRegUserCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* User button */}
      <button className='flex align-middle gap-2 items-center text-gray-800'>
        <FaRegUserCircle /> 
        <p>{user.name}</p> 
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">Browse events</li>
            <li className="px-4 py-2 hover:bg-gray-100">Manage my events</li>
            <li className="px-4 py-2 hover:bg-gray-100">Tickets (0)</li>
            <li className="px-4 py-2 hover:bg-gray-100">Liked</li> 
            <li className="px-4 py-2 hover:bg-gray-100">Following</li>
            <li className="px-4 py-2 hover:bg-gray-100">Interests</li>
            <li className="px-4 py-2 hover:bg-gray-100">Account settings</li>
            <li className="px-4 py-2 hover:bg-gray-100">Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
