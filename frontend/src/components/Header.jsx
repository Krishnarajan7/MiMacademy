import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Academics", href: "/academic" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-28 lg:h-32 px-4 sm:px-6">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center transition-transform duration-200 hover:scale-105 flex-shrink-0"
          >
            <div className="relative">
              <img
                src="/images/Logo-bgremove.png"
                alt="MiM Academy"
                className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain"
                style={{
                  maxWidth: "400px",
                  minWidth: "180px",
                }}
                onError={(e) => {
                  console.error("Logo failed to load:", e);
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.innerHTML =
                    '<span class="text-xl sm:text-2xl font-bold text-primary">MiM Academy</span>';
                  target.parentNode?.appendChild(fallback);
                }}
                onLoad={() => console.log("New logo loaded successfully")}
              />
            </div>
          </Link>

          <nav className="hidden md:flex lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleLinkClick}
                className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex flex-shrink-0">
            <Link to="/contact" onClick={handleLinkClick}>
              <Button className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base px-3 lg:px-4 xl:px-6 py-2">
                Enroll Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-all duration-300 p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed left-0 right-0 transition-all duration-300 overflow-hidden z-40 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 bg-white shadow-xl top-24"
              : "max-h-0 opacity-0 top-24"
          }`}
        >
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 transition-all duration-300 rounded-lg transform text-base ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 translate-x-2"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50 hover:translate-x-1"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 pt-4 border-t border-gray-100 mt-4">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button className="w-full gradient-primary text-white hover:opacity-90 transition-all duration-300 shadow-lg py-3">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;