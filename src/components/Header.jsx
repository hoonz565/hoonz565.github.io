import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Work', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 flex items-center justify-between pointer-events-auto h-20 ${isScrolled ? 'bg-navy/85 backdrop-blur-md shadow-lg h-16' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green font-mono text-xl font-bold z-50 relative"
      >
        <a href="/">H</a>
      </motion.div>

      <div className="hidden md:flex items-center gap-6 font-mono text-[13px]">
        <ol className="flex justify-between items-center m-0 p-0 list-none">
          {navLinks.map((link, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mr-5 relative"
            >
              <a href={link.url} className="p-[10px] text-lightest-slate hover:text-green transition-colors">
                <span className="text-green mr-1">0{i + 1}.</span>
                {link.name}
              </a>
            </motion.li>
          ))}
        </ol>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-v4 px-4 py-2"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
