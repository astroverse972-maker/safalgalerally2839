import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 py-8">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} KalaKendra. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;