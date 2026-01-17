import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/predict');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative bg-white/80 backdrop-blur-xl border-2 border-white/50 w-full max-w-md p-6 sm:p-10 rounded-3xl shadow-2xl shadow-emerald-500/10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 rounded-2xl mb-4 shadow-xl shadow-emerald-500/30 animate-glow"
          >
            <span className="text-3xl sm:text-4xl">➕</span>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Create Account</h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">Join to start CBC disease prediction</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-slate-500 mt-6 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-slate-900 font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
