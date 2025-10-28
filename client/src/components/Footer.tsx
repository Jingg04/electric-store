import { Link } from "wouter";
import { Mail, Phone, MapPin, Zap, Shield, Truck, HeadphonesIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-gray-300 py-16 mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">ElectricStore</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Your trusted destination for cutting-edge electronics and innovative gadgets. 
              We bring the future to your doorstep with quality and reliability.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure Shopping</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <HeadphonesIcon className="w-4 h-4 text-purple-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact Us" },
                { href: "/profile", label: "My Profile" },
                { href: "/cart", label: "Shopping Cart" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1 transform flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Audio",
                "Smartphones", 
                "Laptops",
                "Wearables",
                "Cameras",
                "Gaming",
                "Accessories",
                "Smart Home"
              ].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-all duration-200">
                  <Phone className="w-4 h-4 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-medium">089891474</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-200">
                  <Mail className="w-4 h-4 text-green-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-medium">samnangsrey0@gmail.com</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-all duration-200">
                  <MapPin className="w-4 h-4 text-purple-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white font-medium">38 Street</p>
                  <p className="text-white font-medium">Mean Chey, Phnum Penh, Cambodia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-2xl p-8 mb-12 border border-blue-700/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-white text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-blue-200 text-sm">
                Subscribe to our newsletter for the latest products and exclusive deals.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-blue-500/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 ElectricStore. All rights reserved. 
                <span className="text-cyan-400 ml-2">Powered by innovation.</span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Return Policy", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Sitemap", href: "#" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}