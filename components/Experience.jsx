"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Rocket } from "lucide-react";

const journey = [
    {
        year: "2023 - Present",
        title: "Bachelor's in Data Science & AI",
        company: "IIT Guwahati",
        description: "Pursuing my degree in Data Science and Artificial Intelligence. Building a strong foundation in scalable systems, algorithms, and machine learning.",
        icon: <GraduationCap className="w-6 h-6" />,
    },
    {
        year: "2023 - Present",
        title: "Freelance Full-Stack Developer",
        company: "Independent",
        description: "Helping startups and founders build modern web applications. Specialize in MERN stack, Next.js, and integrating AI features like Google Gemini.",
        icon: <Briefcase className="w-6 h-6" />,
    },
    {
        year: "2024",
        title: "Advanced Full-Stack Projects",
        company: "Personal & Open Source",
        description: "Built high-performance platforms like TrendPulse (AI Insight Engine) and SkillSync (Networking SaaS) using Next.js 14, Tailwind, and Framer Motion.",
        icon: <Rocket className="w-6 h-6" />,
    },
    {
        year: "2022 - 2023",
        title: "Programming Foundation",
        company: "Self-Taught",
        description: "Started my coding journey. Mastered Data Structures and Algorithms, and built foundational projects using React, Node.js, and MongoDB.",
        icon: <Code2 className="w-6 h-6" />,
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">
                        My Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                        Education & Experience
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A timeline of my academic background and professional development.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

                    <div className="space-y-12">
                        {journey.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                                >
                                    {/* Mobile/Tablet Timeline adjustments */}
                                    
                                    {/* Timeline Dot with Icon */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center text-primary z-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                                        {item.icon}
                                    </div>

                                    {/* Content Box */}
                                    <div className={`w-full md:w-1/2 md:px-12 pl-16 pr-4`}>
                                        <div className={`bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <h4 className="text-slate-300 font-medium mb-4">
                                                {item.company}
                                            </h4>
                                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
