import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="
        text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center 
        bg-black bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg p-12

        /* ANIMATION */
        transform transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(80,120,255,0.45)]
        hover:bg-opacity-40
      "
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>

            {/* Profile */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Profile
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Final-year Engineering student with strong skills in MERN stack, 
                  Python, MySQL, OOPs, DBMS, and SDLC/STLC.
                </p>
              </span>
            </div>

            {/* What I Do */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  What I Do
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I build clean, user-focused applications and enjoy working 
                  across both frontend and backend to create functional, intuitive solutions.
                </p>
              </span>
            </div>

            {/* What I Seek */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  What I Seek
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Looking for opportunities to apply my technical skills, learn 
                  continuously, and contribute to impactful real-world projects.
                </p>
              </span>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;


