import React from "react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-12 md:mb-16">
        SELECTED{" "}
        <span className="bg-yellow-300 px-3 py-1 neo-border">WORKS</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group bg-white neo-border neo-shadow-hover transition-all flex flex-col"
          >
            <div className="h-48 md:h-56 w-full border-b-4 border-black overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-5 md:p-6 flex-grow">
              <h3 className="text-xl md:text-2xl font-black mb-2">
                {project.title}
              </h3>
              <p className="text-sm md:text-base font-medium text-gray-700 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 md:py-1 bg-gray-100 neo-border text-[10px] md:text-xs font-bold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 md:p-6 pt-0 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2.5 md:py-3 bg-blue-500 text-white font-black text-sm md:text-base neo-border neo-shadow group-hover:bg-blue-600 transition-colors"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
