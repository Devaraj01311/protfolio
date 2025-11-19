import React from 'react';
import { SkillsData } from '../assets/assets.js';

const Skills = () => {
    return (
      <div id='skills' className='py-20 -mt-40'>
        <div className='max-w-7xl mx-auto px-6 '>
            <div className='mb-16 text-center'>
                <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
                    Technical<span className='text-teal-600'>Skills</span>
                </h2>
                <p className='text-xl mb-6 max-w-3xl mx-auto'>A showcase of my technical expertise and tools I excel in.</p>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-10'>
                    {/* Skill Item */}
                    {
                        SkillsData.map((skill, index) => (
                            <div key={index} className='p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 hover:border-r-4 hover:border-teal-800 hover:-translate-y-1 transition-all duration-300'>
                                <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border-gray-300 bg-gray-50 mb-4' >
                                    <skill.icon className='w-8 h-8 text-teal-800'/>
                                
                                </div>
                                <h3 className='text-xl font-bold text-zinc-600'>{skill.title}</h3>
                                <p className='mt-2 text-sm text-zinc-500'>
                                    {skill.technologies.join(', ')}
                                </p>
                            </div>
                        ))
                    }
                </div>
                </div>
                </div>
                </div>
    );
};

export default Skills;