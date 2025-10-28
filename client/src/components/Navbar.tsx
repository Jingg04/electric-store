import { Link } from "wouter";
import { ShoppingCart, User, Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext"; // Add this import

interface NavbarProps {
  cartCount?: number;
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const { theme, toggleTheme } = useTheme(); // Add this hook

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800/30 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition flex items-center gap-2">
            <Zap className="w-6 h-6" />
            ElectricStore
          </a>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/">
            <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium">
              Home
            </a>
          </Link>
          <Link href="/products">
            <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium">
              Products
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium">
              Contact
            </a>
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Profile Link */}
          <Link href="/profile">
            <a className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-blue-50 dark:hover:bg-gray-800">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Button>
            </a>
          </Link>

          {/* Cart Link */}
          <Link href="/cart">
            <a className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-blue-50 dark:hover:bg-gray-800">
                <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </a>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex gap-4">
        <Link href="/">
          <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium text-sm">
            Home
          </a>
        </Link>
        <Link href="/products">
          <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium text-sm">
            Products
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium text-sm">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}