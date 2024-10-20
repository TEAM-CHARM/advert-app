import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add actual newsletter signup logic here
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Evently</h2>
            <p className="mb-4">Discover and share amazing events in your area.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/events" className="hover:text-gray-300">Events</Link></li>
              <li><Link to="/create" className="hover:text-gray-300">Create Event</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Event Street</p>
            <p>Eventville, EV 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@evently.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-2">Stay updated with our latest events!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-2 text-gray-800 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-[#F85339] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Evently. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;