import {
  Building2,
  Users,
  Trophy,
  Briefcase,
  BarChartIcon as ChartBar,
  Heart,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

const AboutHome = () => {
  const stats = [
    { number: "2.5K+", label: "Properties Sold", icon: Building2 },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "15+", label: "Years Experience", icon: Trophy },
    { number: "50+", label: "Expert Agents", icon: Users },
  ]

  const services = [
    {
      title: "Residential Sales",
      description: "Find your perfect home with our curated selection of premium properties.",
      icon: Building2,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Investment Advisory",
      description: "Strategic investment guidance to maximize your real estate portfolio.",
      icon: ChartBar,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Property Management",
      description: "Comprehensive management solutions for property owners.",
      icon: Briefcase,
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      {/* <div className="relative h-[80vh] overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')] 
          bg-cover bg-center mix-blend-overlay opacity-20"
        />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Dreams <br />
              Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              We're not just selling properties – we're crafting lifestyles and building communities with unparalleled
              expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 bg-white text-indigo-900 rounded-full font-semibold 
                hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Properties
              </button>
              <button
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold 
                hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <stat.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90 
                transition-transform duration-300 group-hover:scale-105`}
              />
              <div className="relative p-8 h-full flex flex-col">
                <service.icon className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6 flex-grow">{service.description}</p>
                <button className="flex items-center text-white font-semibold group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your real estate goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MessageCircle, text: "Schedule Consultation" },
              { icon: Building2, text: "View Properties" },
              { icon: Users, text: "Meet Our Team" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 
                  text-white rounded-xl p-6 backdrop-blur-sm transition-all duration-300"
              >
                <item.icon className="w-6 h-6" />
                <span className="font-semibold">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome

