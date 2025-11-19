import React, { useState } from "react";
import { ProjectsData } from "../assets/assets";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null); // for mobile tap effect

  return (
    <div id="project" className="py-20 -mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
            Featured <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Cutting-edge web applications built with modern technologies.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {ProjectsData.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 flex flex-col"
              >
                {/* IMAGE */}
                <div
                  className="relative w-full h-64 group overflow-hidden cursor-pointer"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 
                      ${
                        activeIndex === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }
                    `}
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>

                  {/* Description Scroll Container */}
                  <div className="max-h-28 overflow-y-auto mb-3 pr-1 text-sm text-gray-600 custom-scroll">
                    {project.description}
                  </div>

                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((language, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS (ALWAYS BOTTOM) */}
                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-teal-700"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex-1 border border-gray-400 py-2 rounded-lg text-center font-semibold hover:bg-gray-100"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
