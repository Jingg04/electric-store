import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowRight, Sparkles, Compass } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 p-4">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-cyan-200 dark:bg-cyan-800 rounded-full blur-3xl opacity-50 animate-pulse delay-500"></div>

      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white py-8 px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Oops! Page Not Found</span>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <AlertCircle className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-8xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              404
            </h1>
            
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Compass className="w-8 h-8" />
              Lost in Digital Space
            </h2>
          </div>

          {/* Content Section */}
          <div className="py-12 px-8 text-center">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
              The page you're looking for seems to have drifted into the digital void. 
              Don't worry, even the best explorers sometimes take wrong turns!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Common Issues</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 text-left">
                  <li>• Check the URL for typos</li>
                  <li>• Page may have been moved</li>
                  <li>• Link might be broken</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4 border border-purple-100 dark:border-purple-800">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Quick Solutions</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 text-left">
                  <li>• Navigate back home</li>
                  <li>• Use the search bar</li>
                  <li>• Contact support</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGoHome}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform font-semibold flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Homepage
              </Button>
              
              <Link href="/products">
                <a>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 px-8 py-3 rounded-2xl transition-all duration-200 hover:scale-105 transform font-semibold flex items-center gap-2"
                  >
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Still can't find what you're looking for?
              </p>
              <Link href="/contact">
                <a>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline font-semibold"
                  >
                    Contact Our Support Team
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 py-4 px-8 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Error Code: 404 • Page Not Found • ElectricStore
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Floating animation elements */}
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-bounce delay-300"></div>
      <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-50 animate-bounce delay-700"></div>
    </div>
  );
}