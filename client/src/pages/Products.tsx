import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { 
  Filter, 
  Search, 
  Star, 
  Zap, 
  Sparkles,
  Headphones,
  Watch,
  Smartphone,
  Laptop,
  Camera,
  Gamepad2
} from "lucide-react";

const allProducts = [
  // Audio
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&auto=format&fit=crop",
    description: "Premium sound quality with active noise cancellation",
    rating: 4.8,
    featured: true
  },
  {
    id: "2",
    name: "Bluetooth Portable Speaker",
    price: 89.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=80&auto=format&fit=crop",
    description: "Waterproof and high-quality audio",
    rating: 4.5,
    featured: false
  },
  {
    id: "3",
    name: "True Wireless Earbuds",
    price: 149.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80&auto=format&fit=crop",
    description: "Compact earbuds with crystal clear sound",
    rating: 4.6,
    featured: true
  },
  {
    id: "4",
    name: "Studio Monitor Headphones",
    price: 199.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80&auto=format&fit=crop",
    description: "Professional studio sound quality",
    rating: 4.7,
    featured: false
  },

  // Wearables
  {
    id: "5",
    name: "Smart Watch Pro",
    price: 349.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=80&auto=format&fit=crop",
    description: "Track your fitness and stay connected",
    rating: 4.9,
    featured: true
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
  {
    id: "7",
    name: "Smart Ring",
    price: 199.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80&auto=format&fit=crop",
    description: "Discreet health monitoring",
    rating: 4.3,
    featured: false
  },

  // Smartphones
  {
    id: "8",
    name: "Flagship Smartphone",
    price: 999.99,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80&auto=format&fit=crop",
    description: "Latest technology with amazing camera",
    rating: 4.9,
    featured: true
  },
  {
    id: "9",
    name: "Budget Smartphone",
    price: 299.99,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1200&q=80&auto=format&fit=crop",
    description: "Great performance at an affordable price",
    rating: 4.2,
    featured: false
  },
  {
    id: "10",
    name: "Gaming Phone",
    price: 799.99,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop",
    description: "Optimized for mobile gaming",
    rating: 4.7,
    featured: false
  },

  // Laptops
  {
    id: "11",
    name: "Ultrabook Pro",
    price: 1299.99,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80&auto=format&fit=crop",
    description: "Lightweight and powerful",
    rating: 4.8,
    featured: true
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
    id: "13",
    name: "2-in-1 Convertible",
    price: 899.99,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80&auto=format&fit=crop",
    description: "Laptop and tablet in one",
    rating: 4.6,
    featured: false
  },

  // Cameras
  {
    id: "14",
    name: "Mirrorless Camera",
    price: 1199.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80&auto=format&fit=crop",
    description: "Professional photography quality",
    rating: 4.9,
    featured: true
  },
  {
    id: "15",
    name: "Action Camera",
    price: 299.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&q=80&auto=format&fit=crop",
    description: "Capture your adventures",
    rating: 4.5,
    featured: false
  },

  // Gaming
  {
    id: "16",
    name: "Gaming Console",
    price: 499.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&q=80&auto=format&fit=crop",
    description: "Next-gen gaming experience",
    rating: 4.9,
    featured: true
  },
  {
    id: "17",
    name: "Wireless Gaming Controller",
    price: 69.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80&auto=format&fit=crop",
    description: "Precision control for gaming",
    rating: 4.6,
    featured: false
  },

  // Accessories
  {
    id: "18",
    name: "USB-C Fast Charger",
    price: 29.99,
    category: "Accessories",
    image: "https://images.pexels.com/photos/12791080/pexels-photo-12791080.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Fast charging for all your devices",
    rating: 4.4,
    featured: false
  },
  {
    id: "19",
    name: "Wireless Charging Pad",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80&auto=format&fit=crop",
    description: "Convenient wireless charging",
    rating: 4.3,
    featured: false
  },
  {
    id: "20",
    name: "Phone Case - Protective",
    price: 24.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80&auto=format&fit=crop",
    description: "Durable protection for your phone",
    rating: 4.2,
    featured: false
  },
  {
    id: "21",
    name: "Tempered Glass Screen Protector",
    price: 14.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=1200&q=80&auto=format&fit=crop",
    description: "Maximum screen protection",
    rating: 4.5,
    featured: false
  },
  {
    id: "22",
    name: "Laptop Sleeve",
    price: 39.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=1200&q=80&auto=format&fit=crop",
    description: "Protective sleeve for your laptop",
    rating: 4.4,
    featured: false
  },
  {
    id: "23",
    name: "Mechanical Keyboard",
    price: 129.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&q=80&auto=format&fit=crop",
    description: "Tactile typing experience",
    rating: 4.8,
    featured: true
  },
  {
    id: "24",
    name: "Wireless Mouse",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&q=80&auto=format&fit=crop",
    description: "Ergonomic wireless mouse",
    rating: 4.6,
    featured: false
  },
  {
    id: "25",
    name: "Power Bank 20000mAh",
    price: 59.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=1200&q=80&auto=format&fit=crop",
    description: "High-capacity portable power",
    rating: 4.7,
    featured: false
  }
];

const categoryIcons = {
  "All": Zap,
  "Audio": Headphones,
  "Wearables": Watch,
  "Smartphones": Smartphone,
  "Laptops": Laptop,
  "Cameras": Camera,
  "Gaming": Gamepad2,
  "Accessories": Sparkles,
  "Smart Home": Zap,
  "Monitors": Sparkles,
  "Tablets": Smartphone
};

export default function Products() {
  const { addItem, getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = ["All", ...Array.from(new Set(allProducts.map((p) => p.category)))];

  const filteredProducts = allProducts
    .filter(product => 
      selectedCategory === "All" || product.category === selectedCategory
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
          ({rating})
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navbar cartCount={getTotalItems()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Electronics</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Discover
                <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Amazing Products
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Explore our curated collection of cutting-edge electronics and accessories
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filters and Search */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                {/* Sort */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-center lg:justify-end">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">
                    {filteredProducts.length} products found
                  </span>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Zap;
                    return (
                      <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-200 ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 hover:border-blue-500 dark:hover:border-blue-400"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {category}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
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
                    {product.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white">
                          FEATURED
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500 rounded-full text-xs font-bold text-white">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    {renderStars(product.rating)}
                    
                    <div className="flex items-center justify-between mt-6">
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  variant="outline"
                  className="border-2 rounded-2xl px-8 py-3"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}