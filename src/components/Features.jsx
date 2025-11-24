// src/components/Features.jsx
import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaBriefcase, FaCertificate, FaUsers, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Live Classes",
      description: "Interactive live sessions with industry experts"
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "Expert Mentors",
      description: "1:1 guidance from experienced professionals"
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Placement Assistance",
      description: "Get placed in top companies with our support"
    },
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "Industry Certificates",
      description: "Recognized certificates to boost your career"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Peer Learning",
      description: "Collaborate and learn with fellow students"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock doubt resolution"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Coding Ninjas?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best learning experience with industry-focused curriculum and expert guidance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group"
            >
              <div className="text-orange-600 mb-4 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600">Placements</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Student Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Mentors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;