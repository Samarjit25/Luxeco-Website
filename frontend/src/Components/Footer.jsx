import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 border-t border-gray-200 font-inter">
      <div className="container mx-auto px-6 space-y-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="text-2xl font-semibold tracking-tight text-emerald-600">
            LuxeEco Fashion
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>GS Road, Guwahati, Assam, India</p>
            <p>+91 8638721106</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-500">Designed and Developed by Samarjit</p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
