import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { projects } from '@/data/index';
import { PinContainer } from './ui/PinContainer';

const RecentProjects = () => {
  return (
    <section id="/recprojects">
      <div className="py-10">
        <TextGenerateEffect
          className="text-center text-[40px] sm:text-4xl md:text-5xl lg:text-7xl"
          words="Some of my Projects"
        />
      </div>
      <div className='flex flex-wrap items-center justify-center p-4 gap-10 mt-2 '>
        {projects.map(({id, title, des, img, iconLists, link}) => (
            <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] ' >
                <PinContainer title={title} href={link} >
                    <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] ' >
                        
                    </div>
                </PinContainer>
            </div>
        ))} 

      </div>
    </section>
  );
}

export default RecentProjects;
