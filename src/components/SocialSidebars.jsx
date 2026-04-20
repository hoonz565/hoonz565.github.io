import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:text-green transition-colors">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:text-green transition-colors">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:text-green transition-colors">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const SocialSidebars = () => {
  return (
    <>
      {/* Left Sidebar - Socials */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden md:block w-10 fixed bottom-0 left-10 right-auto z-10 text-light-slate"
      >
        <ul className="flex flex-col items-center p-0 m-0 list-none space-y-6 after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-light-slate">
          <li>
            <a href="https://github.com/hoonz565" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 transition-transform duration-300 inline-block p-2 text-inherit">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/minhhung565/" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 transition-transform duration-300 inline-block p-2 text-inherit">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/nguyen.minh.hung.267514" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 transition-transform duration-300 inline-block p-2 text-inherit">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="hidden md:block w-10 fixed bottom-0 left-auto right-10 z-10 text-light-slate"
      >
        <div className="flex flex-col items-center relative after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-light-slate">
          <a 
            href="mailto:nguyenminhhung05062005@gmail.com" 
            className="my-[20px] mx-auto p-2 font-mono text-[12px] tracking-[0.1em] [writing-mode:vertical-rl] hover:text-green transform hover:-translate-y-1 transition-all duration-300"
          >
            nguyenminhhung05062005@gmail.com
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SocialSidebars;
