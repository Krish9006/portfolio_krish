"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                            <span className="text-primary">Roy C. Jones</span> <br />
                            <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                                Web Designer
                            </span>
                        </h1>

                        <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                            I denounce with righteous indignation dislike demoralized by the charms of pleasure.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-primary text-black font-bold hover:bg-white transition-colors flex items-center gap-2"
                            >
                                Hire Me <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="#"
                                className="px-8 py-4 rounded-full border border-slate-700 text-white font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                            >
                                Download Resume <Download className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-1">13+</h3>
                                <p className="text-sm text-slate-400">Years of Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-1">8k+</h3>
                                <p className="text-sm text-slate-400">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-1">99%</h3>
                                <p className="text-sm text-slate-400">Client Satisfaction</p>
                            </div>
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
                                {/* Placeholder for User Image - Using a generic professional avatar for now */}
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                                    <span className="text-6xl">👤</span>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-10 right-10 bg-card p-4 rounded-2xl border border-slate-800 shadow-2xl animate-bounce duration-[3000ms]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Play className="w-5 h-5 fill-current" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Intro Video</p>
                                        <p className="font-bold text-white">Watch Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
