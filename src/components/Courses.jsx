// src/components/Courses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master MERN stack with live projects and placement assistance",
      duration: "6 months",
      level: "Beginner to Advanced",
      price: "₹35,000",
      originalPrice: "₹50,000",
      rating: 4.8,
      students: 15000,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, ML algorithms, and real-world data analysis",
      duration: "8 months",
      level: "Intermediate",
      price: "₹45,000",
      originalPrice: "₹60,000",
      rating: 4.7,
      students: 8000,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Competitive Programming",
      description: "Ace coding interviews with DSA and problem-solving skills",
      duration: "4 months",
      level: "All Levels",
      price: "₹25,000",
      originalPrice: "₹35,000",
      rating: 4.9,
      students: 20000,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Android Development",
      description: "Build modern Android apps with Kotlin and Jetpack",
      duration: "5 months",
      level: "Beginner",
      price: "₹30,000",
      originalPrice: "₹42,000",
      rating: 4.6,
      students: 6000,
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-relevant courses designed by experts to help you build a successful career in tech
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;