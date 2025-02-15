"use client";

import React from 'react';
import { Timer, Sparkles, ArrowRight, BadgePercent, Shield, Trophy } from 'lucide-react';

const OfferBannerHome = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6">
            <BadgePercent className="w-4 h-4" />
            Limited Time Offers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Exclusive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Property Deals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of our special promotions and discover incredible opportunities in prime locations.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image Side */}
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">Featured Deal</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-sm">
                  <Timer className="w-4 h-4" />
                  <span>Limited Time Offer</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <Sparkles className="w-5 h-5" />
                <span>Premium Package</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                20% Off on Luxury Properties
              </h3>
              <p className="text-gray-600 mb-6">
                Experience luxury living at an unbeatable price. Get exclusive discounts on our premium properties, complete with high-end amenities and prime locations.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Verified Properties</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Timer className="w-4 h-4 text-blue-600" />
                  <span>Fast Processing</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-lg">
                <span>Claim Offer Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Offers */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Offer 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4">
              <BadgePercent className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">First-Time Buyer Discount</h3>
            <p className="text-gray-600 mb-4">Special rates and support for first-time property buyers.</p>
            <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Offer 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Location Deals</h3>
            <p className="text-gray-600 mb-4">Exclusive discounts on properties in prime locations.</p>
            <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Offer 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Loyalty Rewards</h3>
            <p className="text-gray-600 mb-4">Special benefits for our returning customers.</p>
            <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBannerHome;