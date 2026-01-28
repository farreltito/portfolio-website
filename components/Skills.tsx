
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-blue-600 text-white border-y-8 border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center text-white">
          MY <span className="bg-white text-black px-2 neo-border">STACK</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className={`flex items-center gap-3 px-6 py-4 ${skill.color} text-black neo-border neo-shadow hover:translate-y-[-5px] transition-transform cursor-default`}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-xl font-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
