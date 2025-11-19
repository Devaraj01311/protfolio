import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <div id='home' className="min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 itens-center">
                    <div className="text-center lg:text-left">
                        <h1 className="'text-5xl sm:text-6xl md:text-7xl font-blod mb-10">
                            <span className="text-zinc-700">Software Developer</span>
                            <br/>
                            <span className="text-cyan-700 text-xl font-bold">Java , Python , JavaScript</span>
                        </h1>
                        <p className="text-xl text-zinc-900 mb-6"> 
                            I craft immersive web experience at the intersection of design and technology.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <button className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer">
                                View My Projects
                                <FaArrowRight/>
                            </button>
                        <button className="flex gap-2 items-center px-10 py-4 border border-slate-400  rounded-full  hover:border-slate-800 transition duration-300 cursor-pointer">
                               contact Me
                                <FaArrowRight/>
                            </button>
                            </div> 
                    </div>
                    {/* image */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72 sm:w-90 sm:h-90 floating">
                            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                            <img className="w-full h-full object-cover" src={assets.profileImg} alt="Hero Image" />
                    
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3 ">
                        <div className=" w-full h-full flex irems-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">1+</div>
                                <div className="text-sm text-white">years Experience</div>
                            </div>
                        </div>
                        </div> 
                        </div> 
                    </div>
                    </div> 
            </div>
        </div>
    );
};

export default Hero;