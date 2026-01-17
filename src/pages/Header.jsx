import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '/src/pages/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/predict', label: 'Predict' },
  { to: '/upload-report', label: 'Upload Report' },
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Sign Up' },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={logo}
              alt="CBC Predictor"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg group-hover:shadow-xl transition"
            />
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
              CBC Predictor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-slate-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 space-y-2 overflow-hidden"
            >
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
