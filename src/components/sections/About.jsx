import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Vite',
    'Tailwind CSS',
    'Python',
    'C/C++',
  ];

  return (
    <section id="about" className="max-w-[900px] section-padding">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <SectionHeader index={1} title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
          <div className="text-slate space-y-4 text-lg">
            <p>
              Hello! My name is Hưng and I enjoy creating things that live on the internet. My interest in web development started back when I was a student diving into specialized math at{' '}
              <a href="#" className="font-medium">Le Hong Phong High School</a>
              , which later evolved into a passion for software engineering.
            </p>
            <p>
              Fast-forward to today, I'm pursuing a degree in Computer Science at{' '}
              <a href="#" className="font-medium">VNUHCM - Ho Chi Minh City University of Technology (HCMUT)</a>
              . My main focus these days is building accessible, inclusive products and digital experiences focusing primarily on the Front-End.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-5 p-0 m-0 list-none overflow-hidden list-inside font-mono text-[13px]">
              {skills.map((skill, i) => (
                <li key={i} className="before:content-['▹'] before:absolute before:left-0 before:text-green relative mb-2 pl-5">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group max-w-[300px] w-full mx-auto">
            <div className="relative rounded bg-green transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2 z-10 w-full h-full aspect-square border-2 border-green group-hover:border-transparent">
              <div className="absolute inset-0 bg-navy/20 inset-0 z-20 group-hover:bg-transparent transition-all duration-300"></div>
              {/* Add an image of yourself here or just keep the box if you have no image */}
              <div className="w-full h-full bg-light-navy rounded filter grayscale contrast-100 group-hover:filter-none transition-all duration-500 flex items-center justify-center font-mono text-xl text-green">
                [Your Photo]
              </div>
            </div>
            {/* Outline Box */}
            <div className="absolute top-0 left-0 border-2 border-green rounded w-full h-full transition-all duration-300 translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 -z-10"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
