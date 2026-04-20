import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="flex flex-col justify-center min-h-[100vh] section-padding max-w-[1000px] mt-0" id="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-green font-mono font-normal text-sm md:text-base mb-5 ml-1">
            Hi, my name is
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h2 className="text-lightest-slate text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Nguyễn Minh Hưng.
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3 className="text-slate text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2 mb-6">
            Software Engineering Student @ HCMUT
          </h3>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="mt-5 mb-12 max-w-[540px] text-lg text-slate leading-relaxed">
            I'm a software engineering student specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on accessible, human-centered products and exploring the depths of Front-End development.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <a
            href="#projects"
            className="btn-v4 px-7 py-4 text-sm mt-12"
          >
            Check out my work!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
