import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/faf4c98b2ffbd2fffa1cb44ce14d92f29bf9d833.png';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'awards', label: 'Awards' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
    { id: 'admin', label: 'Admin' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'admin') {
      navigate('/admin');
      setIsMobileMenuOpen(false);
      return;
    }

    setActiveSection(id);
    setIsMobileMenuOpen(false);

    // Wait for mobile menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 350);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      {/* Elegant top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-20' : 'h-24'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick('home')}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img 
              src={logo} 
              alt="Easymakan Development Corporation" 
              className={`w-auto object-contain transition-all duration-700 ${
                isScrolled ? 'h-20' : 'h-24'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative px-5 py-2 transition-all duration-300 tracking-wide ${
                  activeSection === item.id
                    ? 'text-[#d4af37]'
                    : 'text-[#0a1628] hover:text-[#d4af37]'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-[#d4af37]/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-4 relative z-[60] bg-white rounded-lg shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0a1628]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0a1628]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 relative z-[55] shadow-lg"
          >
            <div className="px-4 py-6 space-y-1 max-w-7xl mx-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-lg text-lg font-medium ${
                    activeSection === item.id
                      ? 'bg-[#d4af37] text-white'
                      : 'text-[#0a1628] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
