"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Search, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '/public/i.jpeg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Properties',
            path: '/properties',

        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="w-full bg-white">
            {/* Top Info Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center md:justify-start gap-2"
                        >
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">Delhi NCR, India</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center md:justify-end gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            <a href="tel:+919354570057" className="text-sm hover:text-blue-200 transition-colors">
                                +91 9354570057
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src={siteLogo}
                                    priority={true}
                                    className="w-auto h-14 object-contain"
                                    alt="Prop Savvy Realtors"
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.submenu ? (
                                        <div
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className="relative"
                                        >
                                            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 py-2 font-medium">
                                                <span>{item.name}</span>
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 z-50"
                                                    >
                                                        {item.submenu.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.path}
                                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                                        >
                                            {item.name}
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium shadow-lg shadow-blue-200"
                            >
                                <Search className="w-4 h-4" />
                                Search
                            </motion.button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t"
                        >
                            <nav className="flex flex-col px-4 py-4">
                                {menuItems.map((item) => (
                                    <div key={item.name}>
                                        {item.submenu ? (
                                            <div className="py-2">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                    className="flex items-center justify-between w-full py-2 text-gray-700"
                                                >
                                                    <span className="font-medium">{item.name}</span>
                                                    <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                                        }`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pl-4 space-y-2"
                                                        >
                                                            {item.submenu.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.path}
                                                                    className="block py-2 text-gray-600 hover:text-blue-600"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.path}
                                                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full flex items-center justify-center gap-2 font-medium shadow-lg shadow-blue-200"
                                >
                                    <Search className="w-4 h-4" />
                                    Search Properties
                                </motion.button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

export default Header;