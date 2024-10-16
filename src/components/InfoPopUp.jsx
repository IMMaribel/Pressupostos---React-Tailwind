import React, { useState } from 'react';

function InfoPopup({ title, message, buttonText }) {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative flex items-center">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mr-3 px-2 border border-gray-400 rounded-full shadow"
        onClick={handleClick}>
        {buttonText || 'i'}
      </button>

      {showPopup && (
        <div className="absolute top-full right-0 mt-2 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-6 py-3 shadow-md w-96 z-10">
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm">{message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPopup;
