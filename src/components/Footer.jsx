import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center h-auto min-h-[70px] pb-8 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-slate font-mono text-[12px] leading-relaxed flex flex-col items-center"
      >
        <div className="mb-2">
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors"
          >
            Designed by Brittany Chiang
          </a>
          <span className="mx-2">&</span>
          <a
            href="https://github.com/hoonz565/mhung.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors"
          >
            Built by Nguyễn Minh Hưng
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
