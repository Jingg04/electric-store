import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Truck, Shield, HeadphonesIcon, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const featuredProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium sound quality with noise cancellation",
    badge: "BESTSELLER"
  },
  {
    id: "2", 
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Track your fitness and stay connected",
    badge: "NEW"
  },
  {
    id: "12",
    name: "Gaming Laptop",
    price: 1599.99,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1200&q=80&auto=format&fit=crop",
    description: "High-performance gaming machine",
    rating: 4.9,
    featured: false
  },
  {
    id: "6",
    name: "Fitness Tracker",
    price: 79.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=1200&q=80&auto=format&fit=crop",
    description: "Monitor your health and activity",
    rating: 4.4,
    featured: false
  },
];

export default function Home() {
  const { addItem, getTotalItems } = useCart();

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navbar cartCount={getTotalItems()} />

      <main className="flex-grow">
        {/* Hero Section - Modern Gradient */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Next Generation Tech</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Elevate Your
                  <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    Digital Life
                  </span>
                </h1>
                
                <p className="text-xl mb-8 text-blue-100 max-w-2xl leading-relaxed">
                  Discover cutting-edge electronics that blend innovative design with exceptional performance. 
                  Shop the future today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <a>
                      <Button className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 flex items-center gap-2 px-8 py-3 text-lg font-semibold rounded-2xl shadow-2xl">
                        Explore Products <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                  </Link>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-semibold rounded-2xl">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl rotate-12 transform"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl rotate-[-12deg]">
                    📱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/50"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Curated selection of our most popular and innovative products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 transform border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                          product.badge === "BESTSELLER" ? "bg-orange-500" :
                          product.badge === "NEW" ? "bg-green-500" :
                          product.badge === "SALE" ? "bg-red-500" : "bg-purple-500"
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
                        ${product.price}
                      </span>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're committed to providing the best shopping experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Lightning Fast Shipping
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Free 2-day delivery on all orders. Get your products when you need them.
                </p>
              </div>

              <div className="text-center group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Quality Guaranteed
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  2-year warranty on all products. Your satisfaction is our priority.
                </p>
              </div>

              <div className="text-center group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  24/7 Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Expert customer service ready to help you anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Tech?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their electronic needs.
            </p>
            <Link href="/products">
              <a>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl mx-auto">
                  Start Shopping Now <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}