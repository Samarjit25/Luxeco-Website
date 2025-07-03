import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 border-t border-gray-200 font-inter">
      <div className="container mx-auto px-6 space-y-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="text-2xl font-semibold tracking-tight text-emerald-600">
            LuxeEco Fashion
            <div className="text-sm font-light text-gray-600 space-y-1">
            
            <p>Ethical & Stylish</p>
          </div>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>GS Road, Guwahati, Assam, India</p>
            <p>+91 8638721106</p>
          </div>
        </div>

{/* Bottom Row */}
<div className="pt-6 border-t border-gray-300 flex flex-col items-center gap-2">
  <div className="flex items-center gap-3 text-sm text-gray-500">
    <span>Designed and Developed by Samarjit</span>
    <div className="flex items-center gap-3 text-lg text-gray-500">
      <a href="https://github.com/Samarjit25" target="_blank" rel="noopener noreferrer" className="hover:text-black">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/samarjit-roy-368071257/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
        <FaLinkedin />
      </a>
      <a href="https://x.com/SamarjitRoy25" target="_blank" rel="noopener noreferrer" className="hover:text-black">
        <FaTwitter />
      </a>
    </div>
  </div>

  <p className="text-sm text-gray-500">
    <p className="text-sm text-gray-500">
  &copy; {new Date().getFullYear()} LuxeEco • All Rights Reserved
</p>
  </p>
</div>


      </div>
    </footer>
  );
};

export default Footer;
