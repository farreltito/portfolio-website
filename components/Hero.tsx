
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="relative mb-8">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500 neo-border rounded-full animate-float -z-10"></div>
        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
          FARREL <span className="bg-blue-500 text-white px-4 neo-border neo-shadow">TITO</span>
        </h1>
        <div className="absolute -bottom-6 -right-6 w-32 h-12 bg-yellow-400 neo-border neo-shadow flex items-center justify-center font-bold">
          BUILDER
        </div>
      </div>
      
      <p className="max-w-2xl text-xl md:text-2xl font-bold mt-8 mb-12">
        A <span className="underline decoration-pink-500 decoration-4">Frontend Engineer</span> crafting bold, 
        vibrant, and high-performance web experiences with 
        <span className="bg-yellow-200 px-2 mx-1">Neobrutalism</span> magic.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <button className="px-8 py-4 bg-blue-500 text-white font-bold text-xl neo-border neo-shadow-hover transition-all">
          VIEW PROJECTS
        </button>
        <button className="px-8 py-4 bg-white text-black font-bold text-xl neo-border neo-shadow-hover transition-all">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default Hero;
