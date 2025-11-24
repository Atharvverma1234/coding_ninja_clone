// src/components/Testimonials.jsx
import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Placed at Amazon",
      image: "/api/placeholder/100/100",
      content: "Coding Ninjas changed my life! The DSA course helped me crack Amazon with a package of 40 LPA.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Placed at Microsoft",
      image: "/api/placeholder/100/100",
      content: "The Full Stack Development course provided hands-on experience that was crucial for my interviews.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Placed at Google",
      image: "/api/placeholder/100/100",
      content: "Excellent mentorship and curriculum. The mock interviews were incredibly helpful for preparation.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their careers with Coding Ninjas
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="text-orange-600 absolute top-4 right-4">
                <FaQuoteLeft className="w-6 h-6 opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-orange-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;