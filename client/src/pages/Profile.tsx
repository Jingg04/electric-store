import { useState, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { 
  Camera, 
  Save, 
  Edit2, 
  X, 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell,
  Shield,
  LogOut,
  Star,
  Package,
  Truck,
  CheckCircle,
  Sparkles,
  Settings
} from "lucide-react";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  profileImage: string;
}

export default function Profile() {
  const { getTotalItems } = useCart();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  // Load profile from localStorage or use defaults
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem("userProfile");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "Alex",
          lastName: "Johnson",
          email: "alex.johnson@example.com",
          phone: "+1 (555) 123-4567",
          address: "123 Tech Street",
          city: "San Francisco",
          zipCode: "94105",
          profileImage:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        };
  });

  const [editData, setEditData] = useState<UserProfile>(profile);

  // Mock data for other sections
  const orderHistory = [
    { id: "1", date: "2024-01-15", total: 299.99, status: "Delivered", items: 2 },
    { id: "2", date: "2024-01-10", total: 89.99, status: "Delivered", items: 1 },
    { id: "3", date: "2024-01-05", total: 149.99, status: "Processing", items: 1 }
  ];

  const wishlistItems = [
    { id: "1", name: "Wireless Headphones", price: 299.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
    { id: "2", name: "Smart Watch Pro", price: 349.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData((prev) => ({
          ...prev,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    setProfile(editData);
    localStorage.setItem("userProfile", JSON.stringify(editData));
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
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
                <span className="text-sm font-medium">Your Personal Space</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                My
                <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Profile
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Manage your account, track orders, and personalize your shopping experience
              </p>
            </div>
          </div>
        </section>

        {/* Profile Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Success Message */}
              {isSaved && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl text-center shadow-lg">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Profile Updated Successfully!</h3>
                  <p className="text-green-100">Your changes have been saved</p>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 sticky top-8">
                    {/* Profile Summary */}
                    <div className="text-center mb-8">
                      <div className="relative inline-block mb-4">
                        <img
                          src={isEditing ? editData.profileImage : profile.profileImage}
                          alt="Profile"
                          className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
                        />
                        {isEditing && (
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-xl shadow-lg hover:scale-110 transform transition-all duration-200"
                          >
                            <Camera className="w-4 h-4" />
                          </button>
                        )}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {isEditing
                          ? `${editData.firstName} ${editData.lastName}`
                          : `${profile.firstName} ${profile.lastName}`}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {isEditing ? editData.email : profile.email}
                      </p>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">
                      {[
                        { id: "profile", label: "Profile", icon: User },
                        { id: "orders", label: "Orders", icon: ShoppingBag },
                        { id: "wishlist", label: "Wishlist", icon: Heart },
                        { id: "addresses", label: "Addresses", icon: MapPin },
                        { id: "payments", label: "Payments", icon: CreditCard },
                        { id: "settings", label: "Settings", icon: Settings }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                            activeTab === item.id
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}
                    </nav>

                    {/* Sign Out */}
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 mt-4">
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  {activeTab === "profile" && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                          Personal Information
                        </h2>
                        {!isEditing && (
                          <Button
                            onClick={() => setIsEditing(true)}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center gap-2 px-6 py-3 rounded-2xl hover:scale-105 transform transition-all duration-200"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit Profile
                          </Button>
                        )}
                      </div>

                      {!isEditing ? (
                        // View Mode
                        <div className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">Basic Info</h3>
                              <div className="space-y-3">
                                <div>
                                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                                  <p className="text-lg text-gray-800 dark:text-white font-semibold">
                                    {profile.firstName} {profile.lastName}
                                  </p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                                  <p className="text-lg text-gray-800 dark:text-white font-semibold">
                                    {profile.email}
                                  </p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
                                  <p className="text-lg text-gray-800 dark:text-white font-semibold">
                                    {profile.phone}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
                              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Address</h3>
                              <div className="space-y-3">
                                <div>
                                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Street</label>
                                  <p className="text-lg text-gray-800 dark:text-white font-semibold">
                                    {profile.address}
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">City</label>
                                    <p className="text-lg text-gray-800 dark:text-white font-semibold">
                                      {profile.city}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">ZIP Code</label>
                                    <p className="text-lg text-gray-800 dark:text-white font-semibold">
                                      {profile.zipCode}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Account Stats */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <ShoppingBag className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">5</h3>
                              <p className="text-gray-600 dark:text-gray-300">Total Orders</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <Star className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">250</h3>
                              <p className="text-gray-600 dark:text-gray-300">Loyalty Points</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Member</h3>
                              <p className="text-gray-600 dark:text-gray-300">Since Jan 2024</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Edit Mode
                        <form className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                First Name
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                value={editData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              />
                            </div>
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                value={editData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={editData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              />
                            </div>
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                Phone
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={editData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={editData.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                value={editData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              />
                            </div>
                            <div className="group">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                ZIP Code
                              </label>
                              <input
                                type="text"
                                name="zipCode"
                                value={editData.zipCode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              />
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4 pt-6">
                            <Button
                              onClick={handleSaveProfile}
                              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center gap-2 py-4 rounded-2xl hover:scale-105 transform transition-all duration-200"
                            >
                              <Save className="w-5 h-5" />
                              Save Changes
                            </Button>
                            <Button
                              onClick={handleCancel}
                              variant="outline"
                              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border-2"
                            >
                              <X className="w-5 h-5" />
                              Cancel
                            </Button>
                          </div>
                        </form>
                      )}
                    </div>
                  )}

                  {activeTab === "orders" && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                        Order History
                      </h2>
                      <div className="space-y-6">
                        {orderHistory.map((order) => (
                          <div key={order.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Order #{order.id}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Placed on {order.date}</p>
                              </div>
                              <div className="flex items-center gap-6">
                                <div className="text-right">
                                  <p className="text-lg font-bold text-blue-600 dark:text-cyan-400">${order.total}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{order.items} items</p>
                                </div>
                                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                  order.status === "Delivered" 
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                }`}>
                                  {order.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "wishlist" && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                        My Wishlist
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {wishlistItems.map((item) => (
                          <div key={item.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-xl"
                              />
                              <div className="flex-grow">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                                  {item.name}
                                </h3>
                                <p className="text-lg font-bold text-blue-600 dark:text-cyan-400 mb-3">
                                  ${item.price}
                                </p>
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm">
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}