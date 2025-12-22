"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Cpu, Layers, Globe, ArrowUpRight } from "lucide-react";

const skills = [
    { name: "Figma", level: "90%" },
    { name: "React.js", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Python", level: "75%" },
    { name: "Next.js", level: "85%" },
    { name: "Tailwind", level: "95%" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">My Skills</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                            I Develop Skills Regularly <br /> to Keep Me Update
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>

                        <a href="#contact" className="text-primary font-bold hover:text-white transition-colors inline-flex items-center gap-2">
                            Get In Touch <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
                            >
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{skill.name}</h3>
                                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="bg-primary h-full rounded-full"
                                    />
                                </div>
                                <div className="mt-2 text-right text-sm text-slate-400">{skill.level}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
