import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-4 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="relative h-12 w-[120px] lg:h-24 lg:w-[200px]"> {/* Adjusting width for lg */}
              <Image
                src="/logo.png"
                alt="logo"
                fill
                sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px, (min-width: 1024px) 200px" // Updated for lg
                className="object-contain mb-2 lg:mb-6 mr-10"
              />
            </div>
            <p className="text-gray-400 text-sm ml-2">
              Providing quality service for over 20 years. Your satisfaction is our priority.
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://web.facebook.com/people/Shabab/61568371412418/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shabab. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
