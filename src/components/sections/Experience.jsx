import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
    {
      company: 'HCMUT',
      title: 'Computer Science Student',
      range: '2021 - Present',
      url: 'https://hcmut.edu.vn/',
      html: (
        <ul className="text-lg text-slate space-y-4">
          <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-1">
            Pursuing a Bachelor's degree in Computer Science at Vietnam National University - Ho Chi Minh City University of Technology.
          </li>
          <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-1">
            Focusing on software engineering principles, algorithms, data structures, and web development technologies.
          </li>
          <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-1">
            Achieved IELTS 6.5 certification.
          </li>
        </ul>
      )
    },
    {
      company: 'Le Hong Phong',
      title: 'Specialized Math Student',
      range: '2020 - 2023',
      url: 'http://www.thpt-lehongphong-tphcm.edu.vn/',
      html: (
        <ul className="text-lg text-slate space-y-4">
          <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-1">
            Studied at Le Hong Phong High School for the Gifted, majoring in Mathematics.
          </li>
          <li className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-1">
            Developed strong analytical and problem-solving skills which later translated well into computer science and algorithm design.
          </li>
        </ul>
      )
    }
  ];

  return (
    <section id="experience" className="max-w-[700px] section-padding">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <SectionHeader index={2} title="Where I've Studied" />

        <div className="flex flex-col md:flex-row mt-10">
          <div className="flex overflow-x-auto md:flex-col md:overflow-visible border-b border-lightest-navy md:border-b-0 md:border-l md:w-32 mb-8 md:mb-0 relative z-10">
            {/* Sliding highlight */}
            <div 
              className="absolute hidden md:block w-[2px] bg-green h-10 left-[-1px] transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${activeTabId * 42}px)` }}
            />
            {/* Mobile horizontal highlight sliding could be complex, omitting for simplicity, relying on text color */}
            
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setActiveTabId(i)}
                className={`py-3 px-5 text-left text-sm font-mono whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 bg-transparent hover:bg-light-navy hover:text-green h-10 md:h-[42px] flex items-center justify-center md:justify-start outline-none ${
                   activeTabId === i 
                     ? 'text-green border-green md:border-transparent' 
                     : 'text-slate border-transparent'
                 }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          <div className="md:ml-5 w-full min-h-[320px]">
            {jobs.map((job, i) => (
              <div 
                key={i}
                className={`transition-opacity duration-300 ${activeTabId === i ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-lightest-slate mb-1">
                  {job.title}{' '}
                  <span className="text-green">
                    @ <a href={job.url} target="_blank" rel="noreferrer" className="inline-block hover:text-green/80 transition-colors">
                      {job.company}
                    </a>
                  </span>
                </h3>
                <p className="text-light-slate font-mono text-[13px] mb-6">
                  {job.range}
                </p>
                <div>
                  {job.html}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
