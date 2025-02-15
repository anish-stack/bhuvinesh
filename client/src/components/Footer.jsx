"use client"

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  Youtube,
  ChevronRight,
  Send
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-200 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
      
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Prop Savvy</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in real estate, making property dreams come true with expertise and dedication.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/people/Prop-Savvy-Realtors/61563832266689/' },
                { icon: Youtube, href: 'https://www.youtube.com/@PropSavvyRealtors' },
                { icon: Instagram, href: 'https://www.instagram.com/propsavvyrealtors/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/propsavvyrealtors/' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary/20 hover:text-primary transition-all group"
                  >
                    <Icon className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Properties', href: '/properties' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Properties', href: '/properties' },
                { name: 'Blog', href: '/blogs' },
                { name: 'Privacy Policy', href: '/privacy-policy' }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a className="text-gray-400 hover:text-white flex items-start gap-3 group">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="group-hover:text-gray-300 transition-colors">
                    Tower A, Unit No.335, 3rd Floor, Spaze I-Tech Park, Sohna Road, Sector-49, Gurugram 122018
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+91 9354570057"
                  className="text-gray-400 hover:text-white flex items-center gap-3 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>+91 9354570057</span>
                </a>
              </li>
              {[
                { icon: Mail, text: 'propsavvyrealtors@gmail.com', href: 'mailto:propsavvyrealtors@gmail.com' },
                { icon: Mail, text: 'info@propsavvyrealtors.com', href: 'mailto:info@propsavvyrealtors.com' }
              ].map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-gray-400 hover:text-white flex items-center gap-3 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prop Savvy Realtors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;