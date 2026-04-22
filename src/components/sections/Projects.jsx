import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import freelanceEDUImg from '../../assets/freelanceEDU.png';
import bkiesImg from '../../assets/bkies.png';
import superTicTacToeImg from '../../assets/supertictactoe.png';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Projects = () => {
  const featuredProjects = [
    {
      title: 'FreelanceEDU',
      description: 'An Agile-based platform facilitating student-client interactions. Collaborated in a 7-member team, taking full ownership of Front-End modules for Jobspace, Applications, and Reviews while utilizing Jira for sprint tracking.',
      tech: ['React 19', 'Agile', 'Jira', 'Tailwind CSS'],
      github: 'https://github.com/Khoavan1406-hub/FreelanceEDU.git',
      external: 'https://github.com/Khoavan1406-hub/FreelanceEDU.git',
      image: freelanceEDUImg
    },
    {
      title: 'BKies',
      description: 'A mobile-first web application featuring Framer Motion transitions for a highly interactive and smooth user experience. Focused on modern design patterns and responsive layouts.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/hoonz565/bkies.git',
      external: 'https://bkies.vercel.app/',
      image: bkiesImg
    },
    {
      title: 'Super Tic Tac Toe',
      description: 'A complex 9x9 strategic algorithm game taking Tic Tac Toe to the next level. Built with a focus on game logic, algorithms, and interactive state management.',
      tech: ['JavaScript', 'Algorithms', 'CSS'],
      github: 'https://github.com/hoonz565/super-tictactoe.git',
      external: 'https://super-tictactoe-hung.vercel.app/',
      image: superTicTacToeImg
    }
  ];

  return (
    <section id="projects" className="max-w-[1000px] section-padding">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <SectionHeader index={3} title="Some Things I've Done" />

        <ul className="p-0 m-0 list-none mt-12 space-y-12 md:space-y-24">
          {featuredProjects.map((project, i) => (
            <motion.li 
              key={i} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="relative grid grid-cols-12 gap-2 items-center"
            >
              {/* Project Content */}
              <div className={`relative z-20 col-span-12 md:row-start-1 ${i % 2 === 0 ? 'md:col-span-3 md:col-start-1 md:text-left' : 'md:col-span-3 md:col-start-10 md:text-right'} bg-light-navy md:bg-transparent p-6 md:p-0 rounded shadow-lg md:shadow-none`}>
                <p className="my-2 text-green font-mono text-[13px] font-normal">Featured Project</p>
                <h3 className="text-lightest-slate text-2xl md:text-[28px] font-bold mb-5">
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-green">{project.title}</a>
                </h3>

                <div className={`text-light-slate text-lg z-20 relative ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} md:bg-light-navy md:p-6 md:rounded md:shadow-lg`}>
                  <p className="m-0">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap mt-6 mb-2 space-x-5 font-mono text-[13px] text-light-slate ${i % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                  {project.tech.map((tech, j) => (
                    <li key={j} className="mb-2 whitespace-nowrap">{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center mt-2 ${i % 2 === 0 ? 'justify-start md:justify-start' : 'justify-start md:justify-end'} space-x-4`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className="text-lightest-slate hover:text-green p-2 transition-colors">
                    <GithubIcon />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="text-lightest-slate hover:text-green p-2 transition-colors">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className={`absolute inset-0 opacity-20 md:opacity-100 md:relative w-full h-full md:h-[350px] col-span-12 md:row-start-1 ${i % 2 === 0 ? 'md:col-span-9 md:col-start-4' : 'md:col-span-9 md:col-start-1'} z-10 transition-all group`}>
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="block w-full h-full rounded relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  />
                  {/* Subtle overlay on mobile, fully clear on desktop */}
                  <div className="absolute inset-0 bg-navy/60 md:bg-transparent transition-colors duration-300"></div>
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
