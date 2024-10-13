import React from 'react';
import banner from '../assets/6920933.jpg';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-gray-100">
      {/* Left: Text Content */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Najaf's Bookstore
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Najaf's Bookstore offers an extensive collection of books that cater to
          every reader's taste, whether you're seeking inspiration, knowledge, or
          pure entertainment. From popular bestsellers to rare, undiscovered gems,
          each book promises to spark curiosity and imagination. No matter your
          preference, you'll find something to fuel your love for reading.
        </p>
        <a
          href="#"
          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Learn More
        </a>
      </div>

      {/* Right: Large Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={banner}
          alt="Banner"
          className="rounded-lg shadow-lg max-w-xs md:max-w-sm lg:max-w-md h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
