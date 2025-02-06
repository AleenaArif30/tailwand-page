import React from 'react'

const Footer = () => {
  return (
    


    <>
      <div className="w-full bg-white text-black py-6">
        <div className="max-w-screen-xl w-full px-4 mx-auto flex justify-between items-center flex-wrap">
          {/* Logo on the left */}
          <div className="text-lg font-bold">
            <h4 className="text-black text-3xl">FazizPro</h4>
          </div>

          {/* Centered copyright text */}
          <div className="text-center w-full sm:w-auto">
            <p>&copy; 2025 All Rights Reserved</p>
          </div>

          {/* Social media icons on the right */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
};



export default Footer