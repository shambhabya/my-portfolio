// Sidebar.js
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4 ">
      <div className="flex flex-col items-center mb-8">
        {/* Profile Photo */}
        <img
          src="path/to/your/profile-photo.jpg"
          alt="Profile"
          className="rounded-full w-16 h-16 mr-4"
        />
        {/* Profile Name */}
        <div>
          <p className="text-lg font-bold">Your Name</p>
          <p className="text-gray-500">Job Title</p>
        </div>
      </div>
      {/* Social Links */}
      <div className="flex flex-col items-center space-x-4 mb-8">
        <a
          href="https://www.instagram.com/your_instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/your_linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      {/* Other Sidebar Content Goes Here */}
    </div>
  );
};

export default Sidebar;
