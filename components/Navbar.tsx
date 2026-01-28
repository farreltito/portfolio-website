
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-4xl px-4">
      <div className="flex items-center justify-between bg-yellow-300 neo-border p-4 neo-shadow">
        <div className="text-2xl font-black cursor-pointer" onClick={() => scrollTo('hero')}>
          FT.
        </div>
        <div className="flex gap-4 md:gap-8 font-bold">
          <button onClick={() => scrollTo('projects')} className="hover:underline transition-all">PROJECTS</button>
          <button onClick={() => scrollTo('timeline')} className="hover:underline transition-all">EXPERIENCE</button>
          <button onClick={() => scrollTo('contact')} className="hover:underline transition-all">CONTACT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
