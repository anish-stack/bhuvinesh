"use client"

import { useEffect, useState } from "react"
import { Search, MapPin, Building2, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import axios from "axios"
import Link from "next/link"

const Banner = () => {
  const [banner, setBanner] = useState([])
  const [location, setLocation] = useState([])
  const [type, setType] = useState([])
  const [search, setSearch] = useState({
    location: "",
    type: "",
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const fetchBanner = async () => {
    try {
      const { data } = await axios.get("https://www.apidemo.propsavvyrealtors.com/api/v1/get_heroes")
      setBanner(data.data)
    } catch (error) {
      console.log("Internal server error", error)
    }
  }

  const handleFetchlocation = async () => {
    try {
      const { data } = await axios.get("https://www.apidemo.propsavvyrealtors.com/api/v1/get_locations")
      setLocation(data.data)
    } catch (error) {
      console.log("Internal server error", error)
    }
  }

  const handleFetchType = async () => {
    try {
      const { data } = await axios.get("https://www.apidemo.propsavvyrealtors.com/api/v1/get_propertyTypes")
      setType(data.data)
    } catch (error) {
      console.log("Internal server error", error)
    }
  }

  useEffect(() => {
    handleFetchlocation()
    handleFetchType()
    fetchBanner()
  }, [])

  useEffect(() => {
    if (banner.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % banner.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [banner.length])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={ref}>
      {banner.length > 0 && (
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${banner[currentImageIndex]?.image?.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-12">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {banner[currentImageIndex]?.title || "Find Your Dream Property"}
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-200 mb-8 leading-relaxed">
            {banner[currentImageIndex]?.description ||
              "Discover the perfect property that matches your lifestyle and dreams."}
          </motion.p>
        </div>

        <motion.div variants={fadeInUp} className="bg-white  md:rounded-full shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-2 md:p-4">
            <div className="w-full md:w-2/5 mb-4 md:mb-0 md:mr-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-500" />
                <select
                  name="location"
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-10 py-3 bg-transparent border-0 text-gray-900 focus:ring-2 focus:ring-rose-500  md:rounded-full appearance-none"
                >
                  <option value="">Select Location</option>
                  {location.map((item, index) => (
                    <option key={index} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="w-full md:w-2/5 mb-4 md:mb-0 md:mr-4">
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-500" />
                <select
                  name="type"
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-10 py-3 bg-transparent border-0 text-gray-900 focus:ring-2 focus:ring-rose-500  md:rounded-full appearance-none"
                >
                  <option value="">Property Type</option>
                  {type.map((item, index) => (
                    <option key={index} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <Link
              href={`/properties/search?location=${search.location}&type=${search.type}`}
              className="w-full md:w-auto bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-3  md:rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-colors flex items-center justify-center"
            >
              <Search className="mr-2" />
              <span className="font-medium">Search</span>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-3 gap-8">
          {[
            { count: "2,500+", label: "Property Listings" },
            { count: "1,800+", label: "Happy Clients" },
            { count: "150+", label: "Expert Agents" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl"
            >
              <div className="text-3xl font-bold text-white mb-1">{stat.count}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Banner

