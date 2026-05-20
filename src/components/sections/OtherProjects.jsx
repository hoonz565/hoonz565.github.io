import React from 'react';
import { motion } from 'framer-motion';

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

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

const otherProjects = [
  {
    title: 'Super Tic Tac Toe',
    description: 'A complex 9x9 strategic algorithm game taking Tic Tac Toe to the next level. Built with a focus on game logic, algorithms, and interactive state management.',
    tech: ['JavaScript', 'Algorithms', 'CSS'],
    github: 'https://github.com/hoonz565/super-tictactoe.git',
    external: 'https://super-tictactoe-hung.vercel.app/'
  },
  {
    title: 'BKies',
    description: 'A mobile-first web application featuring Framer Motion transitions for a highly interactive and smooth user experience. Focused on modern design patterns and responsive layouts.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/hoonz565/bkies.git',
    external: 'https://bkies.vercel.app/',
  },
  {
    title: 'FreelanceEDU',
    description: 'An Agile-based platform facilitating student-client interactions. Collaborated in a 7-member team, taking full ownership of Front-End modules for Jobspace, Applications, and Reviews while utilizing Jira for sprint tracking.',
    tech: ['React 19', 'Agile', 'Jira', 'Tailwind CSS'],
    github: 'https://github.com/Khoavan1406-hub/FreelanceEDU.git',
    external: 'https://github.com/Khoavan1406-hub/FreelanceEDU.git',
  }
  // {
  //   title: 'HCMUT Internship Filter Extension',
  //   description: 'A Chrome extension that visually labels full or outside-HCM companies on the portal, allowing students to instantly hide them and focus entirely on open, conveniently located opportunities.',
  //   tech: ['JavaScript', 'HTML', 'CSS'],
  //   github: 'https://github.com/hoonz565/hcmut-internship-filter-extension.git',
  //   external: 'https://chromewebstore.google.com/detail/hcmut-internship-filter/hklenfojmhmabaeodimglmcpoaeoeeka'
  // }
];

const OtherProjects = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold">Other Noteworthy Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              className="h-full"
            >
              <div className="relative bg-light-navy rounded py-8 px-7 h-full flex flex-col justify-between group shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)]">

                <div>
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="text-green">
                      <FolderIcon />
                    </div>
                    <div className="flex items-center space-x-3 text-light-slate z-10 relative">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green transition-colors"
                          aria-label="GitHub Link"
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green transition-colors"
                          aria-label="External Link"
                        >
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lightest-slate text-[22px] font-bold mb-3 group-hover:text-green transition-colors">
                    <a
                      href={project.external || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="static before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="text-light-slate text-[15px] leading-relaxed relative z-10">
                    <p className="m-0">{project.description}</p>
                  </div>
                </div>

                <ul className="flex flex-wrap mt-6 space-x-4 text-light-slate font-mono text-[13px] opacity-80 relative z-10 p-0 m-0 list-none">
                  {project.tech.map((tech, j) => (
                    <li key={j} className="mt-2 whitespace-nowrap">{tech}</li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OtherProjects;
