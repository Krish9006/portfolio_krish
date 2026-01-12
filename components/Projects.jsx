"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";

const projects = [
   {
    title: "SkillSync - Premium Team Discovery Platform",
    description: "A high-performance SaaS application engineered for real-time professional networking. Features advanced search algorithms, secure authentication, and a 3D interactive UI that revolutionizes how developers connect.",
    tags: ["Next.js 14", "Tailwind CSS", "Node.js", "Express.js", "JWT", "MongoDB", "Framer Motion", "Three.js"],
    image: "/images/skillsync_hd.png",
    github: "https://github.com/Krish9006/SkillSync-",
    demo: "https://skillsynkrish.netlify.app/",
},
    {
        title: "Milky Drip - E-Commerce",
        description: "A modern, high-performance e-commerce platform for streetwear. Includes product filtering, cart functionality, and a seamless checkout experience.",
        tags: ["React", "Redux", "Node.js", "Stripe"],
        image: "/images/milkydrip_hd.png",
        github: "https://github.com/Krish9006/MilkyDrip",
        demo: "https://milky-drip.vercel.app/",
    },
    {
        title: "Food Ordering Platform",
        description: "A modern food ordering web application that fetches real-time restaurant and food data via API and presents it in an intuitive, card-based UI inspired by platforms like Swiggy.",
        tags: ["React", "Context API", "API Integration", "Responsive UI"],
        image: "/images/smartcart_hd.png",
        github: "https://github.com/Krish9006/React-Nitin-Sir",
        demo: "https://react-nitin-sir.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description: "This very website! A premium portfolio designed to attract freelance clients. Built with Next.js, Framer Motion, and distinct 'Shimmer' loading effects for a polished user experience.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Shimmer UI"],
        image: "/images/portfolio_hd.jpg",
        github: "https://github.com/Krish9006/portfolio_krish",
        demo: "https://github.com/Krish9006/portfolio_krish",
    },
   {
    title: "Krishka Kitchen",
    description: "A high-performance 'Social-Commerce' platform merging food delivery with a TikTok-style video feed. Features robust dual-role authentication (User/Partner), real-time cart state management via Context API, and a premium dark-mode UI optimized for maximum user engagement.",
    tags: ["React & Vite", "Node.js & Express", "MongoDB Aggregations", "Context API", "JWT Auth"],
    image: "/images/krishka_showcase.png",
    github: "https://github.com/Krish9006/krishka_Kitchen",
    demo: "https://krishka-kitchen.vercel.app/",
}

];

export default function Projects() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="h-4 w-24 mx-auto rounded shimmer" />
                    <div className="h-10 w-64 mx-auto rounded shimmer" />
                    <div className="h-4 w-96 mx-auto rounded shimmer" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="h-[450px] rounded-2xl shimmer border border-white/5" />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">My Work</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Here are some of the key projects I've worked on, showcasing my ability to build full-stack applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <SpotlightCard
                        key={index}
                        className="rounded-2xl h-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full flex flex-col"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-slate-900/50 rounded-t-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary hover:text-black transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary hover:text-black transition-colors"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
}
