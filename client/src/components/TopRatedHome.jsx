"use client"
import React, { useEffect, useState } from 'react';
import { Building2, MapPin, ArrowRight, Star, Home, Building, Landmark, Search } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

const TopRatedHome = () => {
  const [isClient, setIsClient] = useState(false);
  const [properties, setProperties] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const propertyTypes = [
    { id: 'all', name: 'All Properties', icon: Building2 },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building },
    { id: 'luxury', name: 'Luxury', icon: Landmark }
  ];

  const handleFetch = async() => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:5900/api/v1/get_properties');
      setProperties(res.data.data);
    } catch (error) {
      console.log("Internal server error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lac`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const filteredProperties = properties.filter(property => {
    if (activeTab === 'all') return true;
    return property.propertyType.name.toLowerCase() === activeTab;
  });

  const EmptyState = () => (
    <div className="col-span-full py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          No Properties Found
        </h3>
        <p className="text-gray-600 mb-8">
          We couldn't find any properties matching your selected criteria. 
          Try changing your filters or check back later for new listings.
        </p>
        <button 
          onClick={() => setActiveTab('all')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
        >
          <Building2 className="w-5 h-5" />
          View All Properties
        </button>
      </div>
    </div>
  );

  const LoadingState = () => (
    <>
      {[1, 2, 3].map((index) => (
        <div 
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse"
        >
          <div className="aspect-[4/3] bg-gray-200" />
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded-full w-full mb-6" />
            <div className="h-20 bg-gray-200 rounded-xl mb-6" />
            <div className="flex justify-between items-center">
              <div className="h-10 bg-gray-200 rounded-xl w-1/3" />
              <div className="h-10 bg-gray-200 rounded-xl w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-6 py-2.5 rounded-full text-indigo-600 font-medium mb-6 shadow-sm">
            <Building2 className="w-5 h-5" />
            Exclusive Properties
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Discover
            <span className="relative mx-4">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">Premium</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100 -rotate-2" />
            </span>
            Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of premium properties in prime locations
          </p>
        </div>

        {/* Property Type Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex gap-3 p-2 bg-white rounded-2xl shadow-lg">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === type.id
                    ? 'bg-indigo-600 text-white shadow-md scale-105'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <type.icon className="w-5 h-5" />
                {type.name}
                {activeTab === type.id && (
                  <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-sm">
                    {filteredProperties.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <LoadingState />
          ) : filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image.url}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                      <span className="font-medium text-indigo-600">{property.status}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-gray-900">{property.rating}</span>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-indigo-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full shadow-lg text-sm">
                      {property.propertyType.name}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span className="text-sm">{property.completeAddress}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {property.description}
                  </p>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-xl font-bold text-indigo-600">
                        {formatPrice(property.startingPrice)}
                      </p>
                    </div>
                    <Link 
                      href={`/properties/${property.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-colors group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        {/* View All Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-16">
            <Link 
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-200"
            >
              <span>Explore All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopRatedHome;