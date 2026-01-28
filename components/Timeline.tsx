
import React from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-5xl font-black mb-16 text-center">
        MY <span className="text-pink-600 underline">JOURNEY</span>
      </h2>
      
      <div className="relative">
        {/* Bold Center Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-2 bg-black"></div>

        <div className="space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Spacer for desktop */}
              <div className="hidden md:block w-[45%]"></div>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 neo-border z-10 rounded-full shadow-[2px_2px_0_0_#000]"></div>
              
              {/* Content Card */}
              <div className="w-full md:w-[45%] ml-12 md:ml-0 bg-white neo-border p-6 neo-shadow hover:neo-shadow-lg transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-1 neo-border ${item.type === 'experience' ? 'bg-blue-300' : 'bg-pink-300'}`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="font-bold text-sm">{item.date}</span>
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <h4 className="text-lg font-bold text-gray-700 mb-4">{item.subtitle}</h4>
                <p className="text-gray-600 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
