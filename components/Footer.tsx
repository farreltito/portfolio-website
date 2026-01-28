
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-yellow-300 border-t-8 border-black pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-10 tracking-tighter">
          LET'S WORK <br/> 
          <span className="text-blue-600">TOGETHER</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-20">
          <div className="bg-white neo-border p-8 neo-shadow">
            <h3 className="text-2xl font-black mb-6">SAY HELLO</h3>
            <div className="space-y-4 font-bold text-xl">
              <p>LinkedIn: <a href="https://www.linkedin.com/in/farreltito/" className="underline hover:text-blue-600 transition-colors">farreltito</a></p>
              <p>GitHub: <a href="https://github.com/farreltito" className="underline hover:text-blue-600 transition-colors">farreltito</a></p>
              <p>Twitter: <a href="https://twitter.com/farreltito" className="underline hover:text-blue-600 transition-colors">farreltito</a></p>
              <p>Instagram: <a href="https://www.instagram.com/farreltito/" className="underline hover:text-blue-600 transition-colors">farreltito</a></p>
            </div>
          </div>
          
          <div className="bg-pink-500 neo-border p-8 neo-shadow flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black text-white mb-4">WANT TO CHAT?</h3>
            <p className="text-white font-bold mb-6">I'm currently available for freelance work and full-time positions.</p>
            <button className="w-full py-4 bg-white text-black font-black text-xl neo-border neo-shadow-hover transition-all">
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-10 border-t-4 border-black font-bold">
          <p>© 2024 FARREL TITO. NO RIGHTS RESERVED. JUST VIBES CODING.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">TWITTER</a>
            <a href="#" className="hover:underline">DRIBBBLE</a>
            <a href="#" className="hover:underline">YOUTUBE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
