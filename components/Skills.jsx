"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Cpu, Layers, Globe, ArrowUpRight, GitBranch } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="w-6 h-6 text-primary" />,
        skills: [
            { name: "HTML", level: "90%" },
            { name: "CSS", level: "92%" },
            { name: "JavaScript", level: "95%" },
            { name: "React.js", level: "95%" },
            { name: "Next.js", level: "90%" },
            { name: "Tailwind CSS", level: "95%" },
        ]
    },
    {
        title: "Backend & Languages",
        icon: <Server className="w-6 h-6 text-primary" />,
        skills: [
            { name: "Node.js", level: "90%" },
            {name:"Express.js" ,level:"90%"},
            { name: "Python", level: "75%" },
            { name: "Java", level: "80%" },
        ]
    },
    {
        title: "Database & Cloud",
        icon: <Database className="w-6 h-6 text-primary" />,
        skills: [
            { name: "MySQL", level: "70%" },
            { name: "MongoDB", level: "95%" },
            {name:"Mongoose" ,level:"90%"},
            { name: "Firebase", level: "75%" },
        ]
    },
    {
        title: "Tools & DevOps",
        icon: <GitBranch className="w-6 h-6 text-primary" />,
        skills: [
            { name: "GitHub", level: "95%" },
            { name: "VS Code", level: "90%" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-medium tracking-wider uppercase text-sm"
                    >
                        My Tech Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-2 mb-6"
                    >
                        Technologies I Work With
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        A comprehensive list of languages, frameworks, and tools I use to build digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-slate-200">{skill.name}</span>
                                            <span className="text-sm text-primary">{skill.level}</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                className="bg-primary h-full rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
