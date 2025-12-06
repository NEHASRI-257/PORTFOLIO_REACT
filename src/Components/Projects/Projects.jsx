import React from "react";
import ProjectCard from "./ProjectCard";

// IMAGES
import bannerImg1 from "../../assets/Screenshot 2025-12-06 121809.png";
import bannerImg2 from "../../assets/Screenshot 2025-12-06 121237.png";
import bannerImg3 from "../../assets/Screenshot 2025-12-06 122147.png";
import bannerImg4 from "../../assets/Screenshot 2025-12-06 144927.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      {/* CENTERED CARDS */}
      <div className="py-12 px-8 flex flex-wrap gap-8 justify-center">

        <ProjectCard
          title="ChatConnect"
          main="This is a real-time chat application built using react.js and node/express, implemented socket.io for instant messaging, live user presence and real-time updates, and created a clean dynamic ui with a scalable backend setup."
          demoLink="https://chat-connect-1.vercel.app/"
          codeLink="https://github.com/NEHASRI-257/ChatConnect?tab=readme-ov-file"
          image={bannerImg4}
        />

        <ProjectCard
          title="Clothing Store UI"
          main="This is a modern fashion store landing page built using html, css and javascript, featuring a clean banner layout showcasing collections, seasonal edits and offers. Includes a smooth navigation bar with a responsive, visually engaging design suitable for expanding into a full ecommerce frontend."
          demoLink="https://nehasri-257.github.io/trezzo_webpage/"
          codeLink="https://github.com/NEHASRI-257/trezzo_webpage"
          image={bannerImg3}
        />

        <ProjectCard
          title="Sky Cast"
          main="This is a weather application built using react and javascript, integrated real-time weather api for accurate and fast data updates, and created clean components with efficient state management for smooth user interaction."
          demoLink="https://nehasri-257.github.io/weather_app/"
          codeLink="https://github.com/NEHASRI-257/weather_app"
          image={bannerImg1}
        />

        <ProjectCard
          title="Realtime Canvas"
          main="This is a collaborative whiteboard built using html5, javascript, node.js and express, used socket.io and webrtc for real-time drawing, erasing, color and brush controls, instant canvas sync and built-in peer-to-peer video support."
          demoLink="https://collaborative-whiteboard-tm4p.onrender.com/"
          codeLink="https://github.com/NEHASRI-257/COLLABORATIVE_WHITEBOARD"
          image={bannerImg2}
        />

        

      </div>
    </div>
  );
};

export default Projects;

