// src/components/CourseCard.jsx
import React from 'react';
import { FaStar, FaUsers, FaClock } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
      {/* Course Image */}
      <div className="h-48 bg-gradient-to-r from-orange-400 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Bestseller
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaClock className="w-4 h-4 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaUsers className="w-4 h-4 mr-2" />
            <span>{course.students.toLocaleString()}+ students</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              {course.level}
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400 w-4 h-4" />
            <span className="font-semibold">{course.rating}</span>
            <span className="text-gray-500 text-sm">({(course.students/1000).toFixed(0)}k)</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">{course.price}</span>
            <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
          </div>
        </div>

        {/* Enroll Button */}
        <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;