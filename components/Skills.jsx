"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Wrench } from "lucide-react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaDatabase
} from "react-icons/fa6";
import {
    SiNextdotjs, SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiFirebase, SiVisualstudiocode, SiVercel, SiNetlify
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="w-6 h-6" />,
        skills: [
            { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", level: 92, icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", level: 95, icon: <FaJs className="text-yellow-400" /> },
            { name: "React.js", level: 95, icon: <FaReact className="text-cyan-400" /> },
            { name: "Next.js", level: 90, icon: <SiNextdotjs className="text-white" /> },
            { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-cyan-300" /> },
        ],
    },
    {
        title: "Backend & Languages",
        icon: <Server className="w-6 h-6" />,
        skills: [
            { name: "Node.js", level: 90, icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", level: 90, icon: <SiExpress className="text-white" /> },
            { name: "Python", level: 75, icon: <FaPython className="text-blue-400" /> },
            { name: "Java", level: 80, icon: <FaJava className="text-red-500" /> },
        ],
    },
    {
        title: "Database & Cloud",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "MySQL", level: 70, icon: <SiMysql className="text-blue-600" /> },
            { name: "MongoDB", level: 95, icon: <SiMongodb className="text-green-500" /> },
            { name: "Mongoose", level: 90, icon: <FaDatabase className="text-red-400" /> }, // Using generic DB icon for Mongoose
            { name: "Firebase", level: 75, icon: <SiFirebase className="text-yellow-500" /> },
        ],
    },
    {
        title: "Tools & Development",
        icon: <Wrench className="w-6 h-6" />,
        skills: [
            { name: "GitHub", level: 95, icon: <FaGithub className="text-white" /> },
            { name: "VS Code", level: 90, icon: <VscCode className="text-blue-500" /> },
            { name: "Vercel", level: 90, icon: <SiVercel className="text-white" /> },
            { name: "Netlify", level: 90, icon: <SiNetlify className="text-cyan-400" /> },
        ],
    },
];

export default function Skills() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="h-4 w-24 mx-auto rounded shimmer" />
                    <div className="h-10 w-64 mx-auto rounded shimmer" />
                    <div className="h-4 w-96 mx-auto rounded shimmer" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="h-[300px] rounded-2xl shimmer border border-white/5" />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Expertise</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">My Skills & Tech Stack</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A comprehensive overview of the technologies and tools I use to build scalable applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="group">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{skill.icon}</span>
                                            <span className="text-slate-200 font-medium group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-primary/80 group-hover:bg-primary transition-colors"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
