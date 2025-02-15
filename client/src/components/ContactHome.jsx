"use client"

import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, User, Building2, ArrowRight, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://www.apidemo.propsavvyrealtors.com/api/v1/create_inquery', formData);
      toast.success(res.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.log("Internal server error", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-rose-50 relative overflow-hidden py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-rose-100/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 bg-clip-text text-transparent">
            Let's Start Your Real Estate Journey
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with our expert team to find your perfect property. We're here to guide you through every step of your real estate journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative group">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { icon: User, name: 'name', type: 'text', placeholder: 'Your Name' },
                  { icon: Mail, name: 'email', type: 'email', placeholder: 'Email Address' },
                  { icon: Phone, name: 'phone', type: 'tel', placeholder: 'Phone Number' }
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>
                ))}

                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800 placeholder:text-gray-400 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 text-white py-4 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-200 focus:ring-4 focus:ring-blue-100 relative group"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:sticky lg:top-8 space-y-8">
            {/* Image Section */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                alt="Modern luxury home"
                className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Prop Savvy?</h3>
                <ul className="space-y-3">
                  {[
                    "Expert market knowledge",
                    "Personalized service",
                    "Extensive property portfolio",
                    "Seamless buying/selling process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Tower A, Unit No.335, 3rd Floor, Spaze I-Tech Park, Sohna Road, Sector-49, Gurugram 122018"
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday - Friday\n9:00 AM - 6:00 PM"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100 rounded-xl p-8 hover:bg-white transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;