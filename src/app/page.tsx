"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Globe,
  Users,
  MapPin,
  Clock,
} from "lucide-react";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animated SVG Component
  const RotatingTechSVG = () => {
    const techIcons = [
      {
        name: "React",
        color: "#61DAFB",
        path: "M18.5 12c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7zm-8.6 0c0-1.5-1.2-2.7-2.7-2.7S4.5 10.5 4.5 12s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7zM12 4.5c1.5 0 2.7 1.2 2.7 2.7S13.5 9.9 12 9.9 9.3 8.7 9.3 7.2 10.5 4.5 12 4.5zm0 10.8c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z",
      },
      {
        name: "Node",
        color: "#339933",
        path: "M12 2L2 7v10l10 5 10-5V7l-10-5zM8 8l4-2 4 2v8l-4 2-4-2V8z",
      },
      {
        name: "JS",
        color: "#F7DF1E",
        path: "M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-.998l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z",
      },
      {
        name: "TS",
        color: "#3178C6",
        path: "M1.5 12A10.5 10.5 0 0 1 12 1.5 10.5 10.5 0 0 1 22.5 12 10.5 10.5 0 0 1 12 22.5 10.5 10.5 0 0 1 1.5 12z",
      },
      {
        name: "Python",
        color: "#3776AB",
        path: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.13.18-.2.39-.2.61 0 .22.07.43.2.61.13.18.3.27.5.27.2 0 .37-.09.5-.27.13-.18.2-.39.2-.61 0-.22-.07-.43-.2-.61-.13-.18-.3-.27-.5-.27z",
      },
    ];

    return (
      <div className="relative w-80 h-80">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Tech icons positioned around the circle */}
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="absolute w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  index * 72
                }deg) translateY(-140px)`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={tech.color}>
                <path d={tech.path} />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-purple-500/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* Inner tech symbols */}
          {["<", ">", "{", "}", "/", "*"].map((symbol, index) => (
            <motion.div
              key={symbol}
              className="absolute w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  index * 60
                }deg) translateY(-100px)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {symbol}
            </motion.div>
          ))}
        </motion.div>

        {/* Center core */}
        <div className="absolute inset-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 30px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-white font-bold text-2xl">{"</>"}</span>
          </motion.div>
        </div>
      </div>
    );
  };

  // Connection dots component
  const ConnectionDots = () => {
    const profiles = [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/women/24.jpg",
      "https://randomuser.me/api/portraits/women/35.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
    ];

    return (
      <div className="flex -space-x-3">
        {profiles.map((profile, index) => (
          <motion.img
            key={index}
            src={profile}
            alt="Connection"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          />
        ))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Top notification bar */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-4 text-center text-sm"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="#"
          className="text-white hover:text-blue-200 transition-colors"
        >
          🚀 NewNext Ventures is live! Check it out →
        </a>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-8 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Your Name
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <motion.h1
                className="text-5xl md:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                I help founders turn ideas
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  into seamless digital experiences
                </span>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <p className="text-xl text-gray-300 mb-2">
                  Hello, I'm{" "}
                  <span className="text-white font-semibold">Your Name</span>
                </p>
                <p className="text-lg text-gray-400">a Full Stack Developer</p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                </motion.button>
                <motion.button
                  className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View my work
                </motion.button>
              </motion.div>

              {/* Profile and connections */}
              <motion.div
                className="flex items-center space-x-6"
                variants={itemVariants}
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-blue-500/50"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                </div>

                <div>
                  <ConnectionDots />
                  <p className="text-gray-400 text-sm mt-2">Collaboration</p>
                </div>
              </motion.div>

              {/* Info cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                variants={itemVariants}
              >
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-semibold">Collaboration</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    I prioritize client collaboration, fostering open
                    communication
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold">Flexible</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    I'm very flexible with time zone communications
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-semibold">Remote</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Greece - Available worldwide
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Animated SVG */}
            <motion.div className="flex justify-center" variants={itemVariants}>
              <RotatingTechSVG />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.section>

      {/* Current status section */}
      <motion.section
        className="py-16 px-6 border-t border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white font-semibold">The Inside Scoop</span>
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">
            Currently building a SaaS Application
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Working on an innovative SaaS platform that will revolutionize how
            startups approach their digital transformation journey.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
