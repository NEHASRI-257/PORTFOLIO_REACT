import React from "react";

const ProjectCard = ({ title, main, demoLink, codeLink, image }) => {
  return (
    <div
      className="
        p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900
        rounded-2xl h-auto transition-all duration-300
        hover:-translate-y-2 
        hover:shadow-[0_0_25px_rgba(80,120,255,0.5)]
        hover:bg-[#111325]
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">
        <img
          className="p-2 h-44 w-full object-cover rounded-xl transition-all duration-300 hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      {/* TITLE */}
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="px-4 text-sm md:text-md leading-tight py-2 whitespace-normal">
        {main}
      </p>

      {/* BUTTONS */}
      <div className="mt-2 p-2 md:p-4 flex gap-3">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-4 text-sm md:text-lg hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
        </a>

        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-4 text-sm md:text-lg hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;
