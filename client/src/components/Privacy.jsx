import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink, Lock, UserCheck, Database, Cookie, ShieldCheck } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <Shield className="h-16 w-16 text-indigo-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-lg text-gray-600">
                            Welcome to Prop Savvy Realtors. We are committed to protecting your personal information and your right to privacy.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-12">
                        {/* Information Collection Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <UserCheck className="h-6 w-6 text-indigo-600" />
                                <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
                            </div>
                            <div className="pl-9">
                                <p className="text-gray-600 mb-4">We collect personal information that you voluntarily provide to us when you use our website:</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    <li>Personal Identifiers: Name, email address, phone number, and other contact details.</li>
                                    <li>Transaction Data: Details about your real estate preferences and interactions.</li>
                                    <li>Usage Data: Information about how you interact with our website.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Data Usage Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="h-6 w-6 text-indigo-600" />
                                <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
                            </div>
                            <div className="pl-9">
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    <li>To provide real estate consultation services and respond to inquiries</li>
                                    <li>To personalize your experience on our website</li>
                                    <li>To communicate updates and offers</li>
                                    <li>To analyze usage patterns and enhance functionality</li>
                                </ul>
                            </div>
                        </section>

                        {/* Cookies Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Cookie className="h-6 w-6 text-indigo-600" />
                                <h2 className="text-2xl font-semibold text-gray-900">3. Cookies and Tracking</h2>
                            </div>
                            <div className="pl-9">
                                <p className="text-gray-600">
                                    We use cookies and similar tracking technologies to enhance your experience. You can disable cookies through your browser settings.
                                </p>
                            </div>
                        </section>

                        {/* Security Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="h-6 w-6 text-indigo-600" />
                                <h2 className="text-2xl font-semibold text-gray-900">4. Data Security</h2>
                            </div>
                            <div className="pl-9">
                                <p className="text-gray-600">
                                    We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="mt-12 bg-gray-50 rounded-xl p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-indigo-600" />
                                    <p className="text-gray-600">Unit No. 335, Tower A, Spaze i-Tech Park, Sector 49, Gurgaon, 122001 Haryana</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-indigo-600" />
                                    <a href="mailto:propsavvyrealtors@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                                        propsavvyrealtors@gmail.com
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;