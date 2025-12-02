import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">TravelExplorer</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600 transition">Packages</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Home</a>
            <a href="#destinations" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Destinations</a>
            <a href="#packages" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Packages</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore the World with Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Discover amazing places, create unforgettable memories</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
};

// Destinations Section
const Destinations = () => {
  const destinations = [
    {
      title: "Paris, France",
      description: "Experience the city of lights and romance with iconic landmarks like the Eiffel Tower",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop"
    },
    {
      title: "Tokyo, Japan",
      description: "Immerse yourself in the perfect blend of traditional culture and modern technology",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop"
    },
    {
      title: "Bali, Indonesia",
      description: "Relax on pristine beaches and explore ancient temples in this tropical paradise",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop"
    },
    {
      title: "New York, USA",
      description: "Discover the city that never sleeps with world-class entertainment and dining",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop"
    },
    {
      title: "Santorini, Greece",
      description: "Marvel at stunning sunsets and white-washed buildings overlooking the Aegean Sea",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop"
    },
    {
      title: "Dubai, UAE",
      description: "Experience luxury and innovation in this futuristic desert metropolis",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600">Explore the world's most beautiful places</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={dest.image} alt={dest.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{dest.title}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Packages Section
const Packages = () => {
  const packages = [
    {
      title: "Weekend Getaway",
      price: "$299",
      duration: "3 Days / 2 Nights",
      features: ["Hotel Accommodation", "Breakfast Included", "City Tour", "Airport Transfer"]
    },
    {
      title: "Adventure Pack",
      price: "$599",
      duration: "5 Days / 4 Nights",
      features: ["Luxury Resort", "All Meals", "Adventure Activities", "Professional Guide", "Travel Insurance"]
    },
    {
      title: "Premium Experience",
      price: "$1299",
      duration: "7 Days / 6 Nights",
      features: ["5-Star Hotels", "Gourmet Dining", "Private Tours", "Spa Treatment", "VIP Services", "Premium Insurance"]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trip Packages</h2>
          <p className="text-xl text-gray-600">Choose the perfect package for your journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-xl p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
              <p className="text-gray-600 mb-6">{pkg.duration}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel Gallery</h2>
          <p className="text-xl text-gray-600">Beautiful moments from around the world</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={img} 
                alt={`Travel ${index + 1}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@travelexplorer.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">123 Travel Street, Adventure City, AC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TravelExplorer</span>
            </div>
            <p className="text-gray-400">Making your travel dreams come true since 2020</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition">Destinations</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition">Packages</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TravelExplorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
