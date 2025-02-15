"use client";import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Star, 
  ArrowRight, 
  Home, 
  Bed, 
  Bath, 
  Square,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  User
} from "lucide-react";
import toast from "react-hot-toast";

const SingleProperty = ({ slug }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    property: "",
  });

  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProperty = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5900/api/v1/get_property_slug/${slug}`
      );
      setProperty(data.data);
    } catch (error) {
      console.log("Internal server error", error);
      toast.error("Failed to load property details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [slug]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const propertyData = {
        ...formData,
        property: property._id,
      };

      await axios.post(
        "http://localhost:5900/api/v1/create_property_inquery",
        propertyData
      );

      toast.success("Inquiry submitted successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        property: "",
      });
    } catch (error) {
      console.log("Internal server error", error);
      toast.error("Failed to submit inquiry");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Hero Section with Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={property?.image?.url}
          alt={property?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-end p-8 md:p-16">
          <div className="text-white max-w-4xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-4"
            >
              <span className="px-4 py-1.5 bg-green-500/90 rounded-full text-sm font-medium backdrop-blur-sm">
                {property?.status}
              </span>
              <span className="px-4 py-1.5 bg-white/90 text-gray-900 rounded-full text-sm font-medium backdrop-blur-sm">
                Rs.{property.startingPrice}
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-shadow"
            >
              {property?.name}
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-white/90"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{property.completeAddress}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Features */}
          

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                About this property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Interested in this property?
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Full Name</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>Phone Number</span>
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>Your Message</span>
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Send Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;