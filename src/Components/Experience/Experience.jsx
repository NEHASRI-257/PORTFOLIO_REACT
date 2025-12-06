import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLaptopCode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostman, SiExpress } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";

/* ------------------ SMOOTH MAGNETIC MOTION ------------------ */
const handleMouseMove = (e, id) => {
  const el = document.getElementById(id);
  const rect = el.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  // Smooth magnetic animation using transform interpolation
  el.style.transition = "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)";
  el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
};

const handleMouseLeave = (id) => {
  const el = document.getElementById(id);
  el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
  el.style.transform = "translate(0px, 0px)";
};

const Experience = () => {
  const skills = [
    { Icon: FaPython, color: "#61DAFB" },
    { Icon: SiMysql, color: "#61DAFB" },
    { Icon: FaHtml5, color: "#E34F26" },
    { Icon: FaCss3, color: "#1572B6" },
    { Icon: FaJs, color: "#F7DF1E" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiExpress, color: "#F24E1E" },
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaNodeJs, color: "#61DAFB" },
    { Icon: FaGitAlt, color: "#F24E1E" },
    { Icon: FaGithub, color: "#61DAFB" },
    { Icon: SiPostman, color: "#61DAFB" },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>

      <div className="flex flex-wrap items-center justify-around">

        {/* ------------------ SKILL ICON GRID ------------------ */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">

          {skills.map(({ Icon, color }, index) => (
            <span
              key={index}
              id={`skill-${index}`}
              onMouseMove={(e) => handleMouseMove(e, `skill-${index}`)}
              onMouseLeave={() => handleMouseLeave(`skill-${index}`)}
              className="
                p-4 bg-zinc-950 flex items-center justify-center rounded-2xl 
                transition-all duration-300 ease-out cursor-pointer
                hover:shadow-[0_0_20px_rgba(0,200,255,0.6)]
                hover:border-2 hover:border-cyan-400/70
              "
            >
              <Icon color={color} size={50} />
            </span>
          ))}

        </div>

        {/* ------------------ RIGHT SIDE CARDS WITH SMOOTH MOTION ------------------ */}
        <div className="flex flex-col">

          <div
            id="card-1"
            onMouseMove={(e) => handleMouseMove(e, "card-1")}
            onMouseLeave={() => handleMouseLeave("card-1")}
            className="
              flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center 
              transition-all duration-300 cursor-pointer
              hover:shadow-[0_0_25px_rgba(0,200,255,0.5)]
              hover:border-2 hover:border-cyan-400/70
            "
          >
            <FaLaptopCode color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">TECHNICAL SKILLS</h2>
              <ul className="text-sm p-2">
                <li>- MERN Stack</li>
                <li>- Python</li>
                <li>- MySQL</li>
              </ul>
            </span>
          </div>

          <div
            id="card-2"
            onMouseMove={(e) => handleMouseMove(e, "card-2")}
            onMouseLeave={() => handleMouseLeave("card-2")}
            className="
              flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center 
              transition-all duration-300 cursor-pointer
              hover:shadow-[0_0_25px_rgba(255,50,50,0.5)]
              hover:border-2 hover:border-red-400/70
            "
          >
            <GiBrain color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">CORE CS CONCEPTS</h2>
              <ul className="text-sm p-2">
                <li>- OOPS</li>
                <li>- DBMS</li>
              </ul>
            </span>
          </div>

          <div
            id="card-3"
            onMouseMove={(e) => handleMouseMove(e, "card-3")}
            onMouseLeave={() => handleMouseLeave("card-3")}
            className="
              flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center 
              transition-all duration-300 cursor-pointer
              hover:shadow-[0_0_25px_rgba(255,150,0,0.5)]
              hover:border-2 hover:border-orange-400/70
            "
          >
            <FaCogs color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">SOFTWARE PRACTICES / TOOLS</h2>
              <ul className="text-sm p-2">
                <li>- SDLC</li>
                <li>- STLC</li>
                <li>- Postman</li>
                <li>- Git & GitHub</li>
              </ul>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Experience;


