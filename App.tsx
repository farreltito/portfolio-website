
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add custom scroll logic or analytics if needed
    console.log("Welcome to Farrel Tito's Neobrutalist Portfolio");
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black selection:bg-pink-500 selection:text-white">
      {/* Decorative background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
           style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="py-20 flex overflow-hidden whitespace-nowrap bg-black text-yellow-300 border-y-4 border-black font-black text-4xl">
          <div className="animate-marquee flex gap-10">
             <span>CREATIVE DEVELOPER • UI/UX DESIGNER • PROBLEM SOLVER • NEOBRUTALIST LOVER • </span>
             <span>CREATIVE DEVELOPER • UI/UX DESIGNER • PROBLEM SOLVER • NEOBRUTALIST LOVER • </span>
          </div>
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
              display: flex;
              width: fit-content;
            }
          `}
        </style>

        <Projects />
        <Skills />
        <Timeline />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
