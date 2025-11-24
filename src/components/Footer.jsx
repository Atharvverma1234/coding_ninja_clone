// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: "Courses",
      links: [
        "Full Stack Development",
        "Data Science",
        "Competitive Programming",
        "Machine Learning",
        "Android Development"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Affiliate Program",
        "Privacy Policy",
        "Terms & Conditions"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Events",
        "Campus Ninjas",
        "Scholarships",
        "Placement Cell"
      ]
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Help Center",
        "FAQs",
        "Refund Policy",
        "System Requirements"
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Coding Ninjas</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering students to build successful careers in technology through industry-relevant courses and expert mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition duration-300">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition duration-300">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-600 transition duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Coding Ninjas. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-600 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-600 transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-600 transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;