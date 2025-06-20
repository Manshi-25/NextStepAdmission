import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/files/logo.jpg"; 
import { useAuth } from "@/components/AuthContext";
import { UserCircle2, ChevronDown } from "lucide-react"; // Icon from lucide-react
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#2e141c] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 ">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-5 justify-start">
            <div className=" w-16 h-16 rounded-full overflow-hidden flex items-center ">
              <img src={logo} alt="Logo"
              className="w-full h-full object-cover object-center"
              style={{ transform: "scale(2.2)" }}/>
            </div>
            {/*<GraduationCap className="h-8 w-8 text-white" />*/}
            <span className=" text-2xl font-bold text-white">NextStepAdmission</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors text-white hover:text-black ${
                  isActive(item.href) ? "text-white font-semibold" : "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
          {isAuthenticated ? (
          <div className="relative">
            <button onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-2 text-white hover:text-gray-300">
              <UserCircle2 className="w-7 h-7" />
              <ChevronDown className="w-4 h-4" />
            </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
              <Link to="/account" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}>
                My Account</Link>
              <button onClick={() => {logout();
                setIsDropdownOpen(false);}}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Logout</button>
            </div>)}
          </div>) : (
          <Button asChild className="bg-white text-red-400 hover:bg-zinc-700 hover:text-black border border-black">
            <Link to="/auth">Sign Up</Link>
          </Button>)}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-zinc-400 ${
                    isActive(item.href) ? "text-white font-semibold" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                {isAuthenticated ? (
                <div className="relative">
                  <button onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="flex items-center space-x-2 text-white hover:text-gray-300">
                    <UserCircle2 className="w-7 h-7" />
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50 min-w-max">
                    <Link to="/account" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}>
                    My Account</Link>
                    <button onClick={() => {logout();
                    setIsDropdownOpen(false);}}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Logout</button>
                  </div>)}
                </div>) : (
                <Button asChild className="bg-white text-red-400 hover:bg-zinc-700 hover:text-black border border-black">
                  <Link to="/auth">Sign Up</Link>
                </Button>)}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
