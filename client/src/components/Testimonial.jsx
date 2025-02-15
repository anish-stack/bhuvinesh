"use client"
import { motion } from "framer-motion"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Star, Quote, ThumbsUp, Clock, Heart } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "Prop Savvy Realtors made my dream of owning a home a reality. Their expertise and dedication throughout the entire process was exceptional. I couldn't be happier with my new home!",
    rating: 5,
    location: "Beverly Hills, CA",
    stats: {
      experience: "First-time buyer",
      timeToClose: "45 days",
      satisfaction: "100%",
    },
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "As an investor, I appreciate their market knowledge and professional approach. They helped me find properties with great potential and handled everything seamlessly.",
    rating: 5,
    location: "Manhattan, NY",
    stats: {
      experience: "Multiple properties",
      timeToClose: "30 days",
      satisfaction: "100%",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team at Prop Savvy Realtors went above and beyond to help me find my first home. Their patience and guidance made the process stress-free and enjoyable.",
    rating: 5,
    location: "Miami, FL",
    stats: {
      experience: "First-time buyer",
      timeToClose: "60 days",
      satisfaction: "100%",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team at Prop Savvy Realtors went above and beyond to help me find my first home. Their patience and guidance made the process stress-free and enjoyable.",
    rating: 5,
    location: "Miami, FL",
    stats: {
      experience: "First-time buyer",
      timeToClose: "60 days",
      satisfaction: "100%",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team at Prop Savvy Realtors went above and beyond to help me find my first home. Their patience and guidance made the process stress-free and enjoyable.",
    rating: 5,
    location: "Miami, FL",
    stats: {
      experience: "First-time buyer",
      timeToClose: "60 days",
      satisfaction: "100%",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team at Prop Savvy Realtors went above and beyond to help me find my first home. Their patience and guidance made the process stress-free and enjoyable.",
    rating: 5,
    location: "Miami, FL",
    stats: {
      experience: "First-time buyer",
      timeToClose: "60 days",
      satisfaction: "100%",
    },
  },
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-3xl cursor-pointer0 shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="relative cursor-pointer p-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500" />
        <div className="flex  items-center gap-6 mb-6">
          <div className="relative">
            <img 
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-teal-100"
            />
            <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-purple-500 bg-white rounded-full p-1.5 ring-4 ring-blue-200" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
            <div className="text-sm text-gray-600">
              {testimonial.role} • {testimonial.location}
            </div>
          </div>
        </div>

        <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">"{testimonial.content}"</blockquote>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm">
            
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-green-500" />
              <span>{testimonial.stats.timeToClose}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500" />
              <span>{testimonial.stats.satisfaction}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Voices of Satisfaction
          </h2>
          <p className="text-xl text-gray-600">
            Discover why our clients trust us with their most valuable investments
          </p>
        </motion.div>

        <Splide
          options={{
            perPage: 3,
            gap: "2rem",
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))}
        </Splide>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">Ready to experience our exceptional service?</p>
          <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial

