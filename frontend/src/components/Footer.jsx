import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    // { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    // { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/mimacademyofficial", label: "Instagram" },
    // { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    // { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Courses", href: "/courses" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    // { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const courses = [
    { name: "IELTS Preparation", href: "/courses" },
    { name: "TOEFL Training", href: "/courses" },
    { name: "Grammar & Communication", href: "/courses" },
    { name: "Professional Skills", href: "/courses" },
    { name: "Academic Coaching", href: "/courses" },
    { name: "Career Guidance", href: "/courses" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6">
            <div>
              <img
                src="/images/logo.jpg"
                alt="MiM Academy"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed text-sm">
                Empowering learners with personalized coaching and expert guidance for academic and professional success.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+44 (0) 7404755222</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@mimacademy.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">@mimacademyofficial</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to={course.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Follow us on social media for updates and educational tips.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors duration-200"
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            {/* <div>
              <h5 className="font-semibold mb-3 text-white">Newsletter</h5>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Subscribe to get educational tips and updates.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white text-sm"
                />
                <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 MiM Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a> */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
