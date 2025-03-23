import { projects } from '@/data';
import React from 'react';

const RecentProjects = () => {
  return (
    <section id="projects" className="py-10 bg-background">
      <div className="text-center text-[40px] sm:text-5xl md:text-5xl lg:text-4xl text-white mb-5">
        Some of My 
        <span className='ml-4 text-[#A22C29] uppercase' >Projects</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {projects.map(({ id, title, description, img, link }) => (
          <div
            key={id}
            className="lg:min-h-[30rem] h-[20rem] flex items-center justify-center sm:w-96 w-[90vw] md:w-72 lg:w-80"
          >
            <div className="relative bg-background rounded-lg shadow-lg overflow-hidden w-full h-full flex flex-col justify-between">
              {/* Project Image Container with clickable image */}
              <div className="relative flex justify-center items-center w-full h-[60%] bg-gradient-to-r from-[#000501] to-[#2a0f0e]">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img}
                    alt={title}
                    className="z-10 object-contain max-w-full max-h-full w-auto h-auto transition-all duration-300 hover:scale-70 cursor-pointer"
                  />
                </a>
              </div>

              {/* Project Title and Description */}
              <div className="p-4">
                <h3 className="text-xl text-foreground font-bold mb-2">{title}</h3>
                <p className="text-sm ">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
