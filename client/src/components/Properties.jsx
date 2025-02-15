"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search, MapPin, Star, ArrowRight, Building2, Home, Hotel } from "lucide-react";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Properties", icon: Building2 },
    { id: "residential", name: "Residential", icon: Home },
    { id: "commercial", name: "Commercial", icon: Hotel },
  ];

  const handleFetch = async () => {
    try {
      const res = await fetch("https://www.apidemo.propsavvyrealtors.com/api/v1/get_properties");
      const data = await res.json();
      setProperties(data.data);
      setFilteredProperties(data.data);
    } catch (error) {
      console.log("Internal server error", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProperties(query, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProperties(searchQuery, category);
  };

  const filterProperties = (query, category) => {
    const keywords = query.toLowerCase().split(" ");
    
    let filtered = properties;

    if (category !== "all") {
      filtered = filtered.filter((property) =>
        property.propertyType.name.toLowerCase() === category
      );
    }

    if (query) {
      filtered = filtered.filter((property) => {
        const matchesType = keywords.some((keyword) =>
          property.propertyType.name.toLowerCase().includes(keyword)
        );
        const matchesLocation = keywords.some((keyword) =>
          property.location.name.toLowerCase().includes(keyword)
        );
        const matchesTitle = keywords.some((keyword) =>
          property.name.toLowerCase().includes(keyword)
        );

        return matchesType || matchesLocation || matchesTitle;
      });
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Discover Your Dream Property
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-12 text-lg">
            Explore our curated collection of premium properties tailored to your lifestyle
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-2 rounded-2xl shadow-xl">
              <div className="flex items-center bg-white rounded-xl shadow-inner p-2">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or title..."
                  className="flex-1 px-4 py-3 focus:outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-8">
       

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={property.image.url}
                      alt={property?.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {property?.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{property?.location?.name}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{property.startingPrice}
                      </p>
                    </div>
                    <Link
                      href={`/properties/${property?.slug}`}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white transform transition-transform hover:scale-110 hover:shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <Building2 className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-xl text-gray-600 text-center">
                No properties match your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;