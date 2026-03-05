import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black selection:bg-pink-500 selection:text-white">
      {/* Decorative background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]"
        style={{
          backgroundImage: "radial-gradient(black 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <Navbar />

      <main>
        <Hero />

        <div className="py-12 md:py-20 flex overflow-hidden whitespace-nowrap bg-black text-yellow-300 border-y-4 border-black font-black text-2xl md:text-4xl">
          <div className="animate-marquee flex gap-11">
            <span className="text-yellow-500">FULLSTACK ENGINEER</span>
            <span className="text-orange-500">
              RRQ DELTA FORCE PC PRO PLAYER{" "}
            </span>
            <span className="text-blue-500">CAT LOVER</span>
            <span className="text-green-500">GREEN FLAG</span>
          </div>
        </div>

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
