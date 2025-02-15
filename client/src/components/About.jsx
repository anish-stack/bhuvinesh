import React from 'react';
import { FaAward, FaChartLine, FaCity, FaHandshake, FaHome, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')] 
          bg-cover bg-center bg-fixed"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              Prop Savvy Realtors
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Transforming Dreams into Addresses
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Prop Savvy Realtors, we're not just selling properties – we're crafting lifestyles, building communities, 
            and turning your real estate aspirations into reality with unparalleled expertise and dedication.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Properties Sold</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaHome className="text-5xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold mb-4">Residential Sales</h3>
            <p className="text-gray-600">Find your dream home with our expert guidance and market insights.</p>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaCity className="text-5xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold mb-4">Commercial Properties</h3>
            <p className="text-gray-600">Strategic commercial real estate solutions for your business needs.</p>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaChartLine className="text-5xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold mb-4">Investment Advisory</h3>
            <p className="text-gray-600">Maximize your real estate investments with our market expertise.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl opacity-90">
              Our diverse team of professionals brings together decades of experience 
              in real estate, finance, and property management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Expertise', 'Innovation', 'Integrity', 'Results'].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                {[FaUsers, FaLightbulb, FaHandshake, FaAward][index]({ className: "text-4xl mx-auto mb-4" })}
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to guide you 
            through every step of your real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 
              transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold 
              hover:bg-blue-50 transition-colors duration-300">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;