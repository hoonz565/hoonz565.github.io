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
          If you have any questions about technical or whatever, feel free to ping me via facebook messenger or my email. I will get back to you as soon as possible.
        </p>

        <a
          href="https://www.facebook.com/nguyen.minh.hung.267514"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-v4 px-7 py-4 text-sm"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
