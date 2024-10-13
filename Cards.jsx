import React from 'react';

const Cards = ({ course }) => {
  return (
    <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl transition-transform transform hover:scale-105 mx-auto my-4">
      <figure>
        <img
          src={course.Image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} // Use course image
          alt={course.title || "Course Image"} // Use course title for alt text
          className="h-48 w-full object-cover rounded-t-lg" // Improved image styling
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          <span>{course.title}</span> {/* Use course title */}
          {course.Price === 0 ? (
            <div className="badge badge-secondary">FREE</div> // Conditional rendering for FREE badge
          ) : (
            <div className="badge badge-primary">${course.Price}</div> // Display price for paid courses
          )}
        </h2>
        <p className="text-gray-700">{course.name || "No description available."}</p> {/* Use course description (name) */}
        <div className="card-actions justify-end mt-4">
          {course.Price === 0 ? (
            <button className="btn btn-primary">Download Free</button> // Button for free courses
          ) : (
            <div className="text-gray-500">Purchase for ${course.Price}</div> // Display purchase message for paid courses
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
