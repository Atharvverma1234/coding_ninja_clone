// src/components/Hero.jsx
import React from 'react';
import { FaPlay, FaStar, FaUsers, FaTrophy } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Coding
                <span className="text-orange-600 block">Skills That Matter</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Learn to code from industry experts and get placed in top product-based companies.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400 w-5 h-5" />
                <span className="text-gray-700 font-semibold">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-orange-600 w-5 h-5" />
                <span className="text-gray-700 font-semibold">50,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTrophy className="text-green-600 w-5 h-5" />
                <span className="text-gray-700 font-semibold">1000+ Placements</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300 shadow-lg">
                Explore Courses
              </button>
              <button className="border border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition duration-300 flex items-center justify-center space-x-2">
                <FaPlay className="w-4 h-4" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects</span>
                    <span className="font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Placement Rate</span>
                    <span className="font-semibold">95%</span>
                  </div>
                </div>
                <button className="w-full bg-white text-orange-600 py-3 rounded-lg font-semibold mt-6 hover:bg-gray-100 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg">
              ⭐ Most Popular
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;