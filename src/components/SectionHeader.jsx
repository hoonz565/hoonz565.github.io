import React from 'react';

const SectionHeader = ({ index, title }) => {
  return (
    <div className="flex items-center mb-10 w-full whitespace-nowrap">
      <span className="text-green font-mono text-xl mr-2 font-normal">
        {index < 10 ? `0${index}.` : `${index}.`}
      </span>
      <h2 className="text-lightest-slate text-2xl md:text-3xl font-semibold m-0 flex items-center w-full">
        {title}
        <span className="hidden md:block content-[''] h-[1px] bg-lightest-navy w-full relative ml-5 max-w-[300px]"></span>
      </h2>
    </div>
  );
};

export default SectionHeader;
