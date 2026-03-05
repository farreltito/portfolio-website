
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-12 md:py-20 text-center relative overflow-hidden">
      {/* Profile Placeholder */}
      <div className="relative mb-8 md:mb-12 group">
        <div className="w-40 h-40 md:w-56 md:h-56 bg-white neo-border neo-shadow-lg overflow-hidden transition-transform group-hover:rotate-3">
           {/* Placeholder for actual image */}
           <div className="w-full h-full bg-gray-200 flex items-center justify-center text-5xl md:text-6xl">
             <img src="https://avatars.githubusercontent.com/u/62794739?v=4" alt="Profile Picture" />
           </div>
        </div>
        <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-yellow-400 neo-border px-2 md:px-3 py-1 font-black text-xs md:text-sm neo-shadow animate-bounce">
          HI, I'M FARREL TITO!
        </div>
      </div>

      <div className="relative mb-6 md:mb-8">
        <div className="absolute -top-4 -left-8 md:-top-6 md:-left-12 w-16 h-16 md:w-24 md:h-24 bg-pink-500 neo-border rounded-full animate-float -z-10 opacity-50"></div>
        <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
          <span className="bg-blue-500 text-white px-2 md:px-4 neo-border neo-shadow inline-block transform -rotate-2">FARREL</span> ARGHYA
          <span className="bg-blue-500 text-white px-2 md:px-4 neo-border neo-shadow inline-block transform -rotate-2">TITO</span> PRAYOGA
        </h1>
      </div>
      
      <p className="max-w-2xl text-lg md:text-2xl font-bold mt-2 md:mt-4 mb-8 md:mb-12 px-4">
        A <span className="underline decoration-pink-500 decoration-4">Fullstack Engineer (Heavy in Frontend)</span>
        <span className="bg-yellow-200 px-2 mx-1">with passion for creating innovative solutions. </span>
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-none">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto px-8 py-3 md:py-4 bg-blue-500 text-white font-bold text-lg md:text-xl neo-border neo-shadow-hover transition-all active:translate-x-1 active:translate-y-1 active:neo-shadow-none"
        >
          VIEW PROJECTS
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white text-black font-bold text-lg md:text-xl neo-border neo-shadow-hover transition-all active:translate-x-1 active:translate-y-1 active:neo-shadow-none"
        >
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default Hero;
