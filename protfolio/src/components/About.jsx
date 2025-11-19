import React from "react";
import { profileData } from "../assets/assets";
import profileImg from "/image.jpg";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="About" className="py-20 -mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- TITLE ---------- */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-teal-800">About</span> Me
        </h2>

        {/* ---------- TOP SECTION (TEXT + IMAGE) ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* ---------- LEFT SIDE: ABOUT TEXT ---------- */}
          <div className="max-w-3xl text-left space-y-6">
            <p className="text-lg leading-8 text-gray-700">
              I am a Full Stack Developer with hands-on experience in Java and the MERN
              stack, specializing in building responsive web applications and scalable
              backend systems. My expertise includes Java, Spring Boot, React.js,
              Node.js, Express.js, MongoDB, and SQL. I focus on creating clean,
              maintainable, and high-performance solutions that provide a seamless
              user experience.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              I also gained industry experience as a Full Stack Developer Intern at
              Koharent Global Technologies Pvt. Ltd., Bengaluru, where I contributed
              to building and maintaining full-stack systems. I collaborated with
              cross-functional teams, integrated REST APIs, worked with databases, and
              followed agile practices. This improved my skills in debugging,
              deployment, version control, and modern development workflows.
            </p>
          </div>

          {/* ---------- RIGHT SIDE: PROFILE IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Profile"
              className="w-90 h-90 object-cover rounded-2xl shadow-xl border border-gray-300 
                         hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* ---------- SKILLS + RESUME IN GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {profileData.map((data, index) => (
            <div
              key={index}
              className="p-6 border border-zinc-400 rounded
                         hover:border-zinc-600 cursor-pointer
                         hover:border-b-4 hover:border-r-4
                         hover:border-b-zinc-800 hover:-translate-y-1
                         transition duration-300"
            >
              <data.icon className="text-3xl mb-4" />
              <h1 className="text-xl font-bold mb-3">{data.title}</h1>
              <p>{data.technologies.join(", ")}</p>
            </div>
          ))}

          {/* ---------- GRID ITEM: RESUME BUTTON ---------- */}
          <div className="flex items-center justify-center p-6">
            <a
              href="/Devaraj .pdf"
              target="_blank"
              rel="noopener noreferrer"
               className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer">
              <FaArrowRight className="text-gray-500 text-sm" />
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
