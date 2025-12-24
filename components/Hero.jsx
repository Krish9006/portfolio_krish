"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundBeams } from "./BackgroundBeams";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
            <BackgroundBeams />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
                            Available for Freelance Projects
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Hello, I'm <br />
                            <span className="text-primary">Krish Gupta</span> <br />
                            <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                                Full Stack Engineer
                            </span>
                        </h1>

                        <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                            Building scalable web applications and digital experiences.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-primary text-black font-bold hover:bg-white transition-colors flex items-center gap-2"
                            >
                                Hire Me <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="https://drive.google.com/file/d/1Yc0uH5qKDsoohowkonuMpXvCt79Pkkwv/view?usp=sharing"
                                className="px-8 py-4 rounded-full border border-slate-700 text-white font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                            >
                                Download Resume <Download className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                            {/* Circular Background Shape */}
                            <div className="absolute inset-0 rounded-full border-2 border-slate-800 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-slate-800 border-dashed animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Main Image Container */}
                            <div className="absolute inset-8 rounded-full overflow-hidden bg-slate-900 border-4 border-slate-800">
                                <Image
                                    src="/images/profile.jpeg"
                                    alt="Krish Gupta"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
