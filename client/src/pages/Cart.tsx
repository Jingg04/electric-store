import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { 
  Trash2, 
  ArrowLeft, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Shield, 
  Truck, 
  CreditCard,
  Sparkles,
  CheckCircle
} from "lucide-react";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems, clearCart } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    console.log("Order placed:", checkoutData);
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      setOrderPlaced(false);
      setIsCheckingOut(false);
      setCheckoutData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        cardNumber: "",
      });
    }, 3000);
  };

  const shippingCost = 10.00;
  const taxRate = 0.1;
  const taxAmount = getTotalPrice() * taxRate;
  const totalAmount = getTotalPrice() + shippingCost + taxAmount;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navbar cartCount={getTotalItems()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Your Shopping Journey</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
                <ShoppingBag className="w-12 h-12" />
                Shopping Cart
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Review your items and proceed to secure checkout
              </p>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {items.length === 0 ? (
              <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShoppingBag className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Your cart is empty
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Discover amazing products and add them to your cart
                </p>
                <Link href="/products">
                  <a>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200">
                      <ArrowLeft className="w-5 h-5" />
                      Continue Shopping
                    </Button>
                  </a>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Your Items ({getTotalItems()})
                      </h2>
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20"
                      >
                        Clear All
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-gray-100 dark:border-gray-600"
                        >
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-2xl group-hover:scale-105 transform transition-all duration-300"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-4">
                              ${item.price}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-10 h-10 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-6 py-2 bg-white dark:bg-gray-600 rounded-xl font-semibold text-gray-800 dark:text-white min-w-12 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Price & Remove */}
                          <div className="text-right flex flex-col justify-between">
                            <p className="text-2xl font-bold text-gray-800 dark:text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-all duration-200 hover:scale-110 p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Order Summary & Checkout */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 sticky top-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Order Summary
                    </h2>

                    <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between text-gray-600 dark:text-gray-300">
                        <span>Subtotal ({getTotalItems()} items):</span>
                        <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600 dark:text-gray-300">
                        <span>Shipping:</span>
                        <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600 dark:text-gray-300">
                        <span>Tax:</span>
                        <span className="font-semibold">${taxAmount.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-2xl font-bold text-gray-800 dark:text-white mb-8">
                      <span>Total:</span>
                      <span className="text-blue-600 dark:text-cyan-400">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </div>

                    {!isCheckingOut ? (
                      <Button
                        onClick={() => setIsCheckingOut(true)}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-2xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                      >
                        Proceed to Checkout
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setIsCheckingOut(false)}
                        variant="outline"
                        className="w-full mb-4 border-2 rounded-2xl py-4"
                      >
                        Back to Cart
                      </Button>
                    )}

                    {/* Trust Badges */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Secure SSL Encryption</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Truck className="w-4 h-4 text-blue-500" />
                        <span>Free 2-Day Shipping</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <CreditCard className="w-4 h-4 text-purple-500" />
                        <span>Multiple Payment Methods</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Checkout Form */}
            {isCheckingOut && items.length > 0 && (
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Secure Checkout
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Complete your purchase with secure payment
                  </p>
                </div>

                {orderPlaced && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl text-center">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Order Placed Successfully!</h3>
                    <p className="text-green-100">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
                  </div>
                )}

                <form onSubmit={handlePlaceOrder} className="space-y-8">
                  {/* Shipping Information */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-blue-500" />
                      Shipping Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name *"
                          value={checkoutData.fullName}
                          onChange={handleCheckoutChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={checkoutData.email}
                          onChange={handleCheckoutChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={checkoutData.phone}
                          onChange={handleCheckoutChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="group md:col-span-2">
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address *"
                          value={checkoutData.address}
                          onChange={handleCheckoutChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="text"
                          name="city"
                          placeholder="City *"
                          value={checkoutData.city}
                          onChange={handleCheckoutChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="ZIP Code *"
                          value={checkoutData.zipCode}
                          onChange={handleCheckoutChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-purple-500" />
                      Payment Information
                    </h3>
                    <div className="group">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number (1234 5678 9012 3456) *"
                        value={checkoutData.cardNumber}
                        onChange={handleCheckoutChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Place Order - ${totalAmount.toFixed(2)}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}