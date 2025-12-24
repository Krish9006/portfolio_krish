"use client";

import { motion } from "framer-motion";
import { Award, Code, Globe, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay for the "Shimmer" effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const features = [
        {
            icon: <Award className="w-6 h-6 text-primary" />,
            title: "IIT Guwahati",
            description: "Data Science & AI"
        },
        {
            icon: <Code className="w-6 h-6 text-primary" />,
            title: "Full Stack",
            description: "React, Next.js & Node.js"
        },
        {
            icon: <Globe className="w-6 h-6 text-primary" />,
            title: "Freelance",
            description: "Building for Startups"
        }
    ];

    if (isLoading) {
        return (
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Skeleton Text */}
                    <div className="space-y-6">
                        <div className="h-6 w-32 rounded shimmer" />
                        <div className="h-12 w-3/4 rounded shimmer" />
                        <div className="space-y-3">
                            <div className="h-4 w-full rounded shimmer" />
                            <div className="h-4 w-full rounded shimmer" />
                            <div className="h-4 w-2/3 rounded shimmer" />
                        </div>
                        <div className="flex gap-4 pt-4">
                            <div className="h-24 w-full rounded shimmer" />
                            <div className="h-24 w-full rounded shimmer" />
                            <div className="h-24 w-full rounded shimmer" />
                        </div>
                    </div>
                    {/* Skeleton Image/Visual */}
                    <div className="h-[400px] w-full rounded-2xl shimmer" />
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">About Me</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Engineering <span className="text-primary">Reliable</span> & <br />
                        <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            Scalable Solutions
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        Hi, I'm <strong className="text-white">Krish Gupta</strong>, a Full-Stack Web Developer who builds modern, scalable, and user-focused web applications.
                    </p>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        I specialize in <span className="text-white">React, Next.js, Node.js, Express, and MongoDB</span>, and I enjoy working across the full stack—from crafting clean, responsive frontends to designing secure and efficient backend APIs. My approach is simple: clear code, clear communication, and on-time delivery.
                    </p>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        I'm currently pursuing a Bachelor's degree in <strong className="text-white">Data Science & Artificial Intelligence</strong> from <strong className="text-white">IIT Guwahati</strong> which strengthens my problem-solving skills and understanding of scalable systems. Alongside my education, I actively work on real-world projects and freelance development, focusing on delivering production-ready solutions that meet business needs.
                    </p>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        I work well with startups, founders, and teams who need someone reliable to turn ideas into working products. Whether it's a landing page, a full-stack application, or API development, I focus on quality, performance, and long-term maintainability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-primary/50 transition-colors group"
                            >
                                <div className="mb-3 p-2 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                                <p className="text-xs text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Abstract Decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-20 blur-2xl animate-pulse" />

                    <div className="relative h-[500px] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
                        <div className="space-y-2">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="font-mono text-sm text-slate-400">
                                <span className="text-primary">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span><br />
                                &nbsp;&nbsp;name: <span className="text-green-400">"Krish Gupta"</span>,<br />
                                &nbsp;&nbsp;college: <span className="text-green-400">"IIT Guwahati"</span>,<br />
                                &nbsp;&nbsp;traits: [<span className="text-green-400">"Problem Solver"</span>, <span className="text-green-400">"Detail Oriented"</span>],<br />
                                &nbsp;&nbsp;isOpenToWork: <span className="text-primary">true</span><br />
                                <span className="text-yellow-400">{"}"}</span>;
                            </div>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                            <h4 className="text-white font-bold mb-2">My Approach</h4>
                            <p className="text-sm text-slate-400">
                                I don't just "make websites". I build digital assets that add value to your business. I prioritize performance, accessibility, and clean code architecture.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
