import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="max-w-[600px] mb-24 text-center section-padding md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <p className="text-green font-mono text-base mb-5 block">
          04. What's Next?
        </p>

        <h2 className="text-lightest-slate text-4xl md:text-5xl lg:text-[60px] font-bold mb-5">
          Get In Touch
        </h2>

        <p className="text-lg text-slate mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href="mailto:nguyenminhhung05062005@gmail.com"
          className="btn-v4 px-7 py-4 text-sm"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
