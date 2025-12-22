"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "SkillSync ",
        category: "Web Development",
        tags: ["Next.js", "Tailwind", "Stripe"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        github: "#",
        demo: "#",
    },
    {
        title: "SaaS Dashboard",
        category: "Product Design",
        tags: ["React", "TypeScript", "Firebase"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        github: "#",
        demo: "#",
    },
    {
        title: "AI Chat Interface",
        category: "UI/UX Design",
        tags: ["Next.js", "OpenAI", "Tailwind"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">My Creative Works</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <a href="#" className="text-white hover:text-primary transition-colors border-b border-primary pb-1">View All Projects</a>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.github} className="p-3 bg-primary rounded-full text-black hover:bg-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href={project.demo} className="p-3 bg-primary rounded-full text-black hover:bg-white transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <span className="text-primary text-sm font-medium mb-2 block">{project.category}</span>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-slate-400 px-2 py-1 rounded bg-secondary/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
