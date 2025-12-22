"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We discuss your goals, target audience, and requirements to define a clear roadmap.",
        icon: <Search className="w-6 h-6" />,
    },
    {
        number: "02",
        title: "Design & Plan",
        description: "I create wireframes and architectural plans to ensure the solution fits your needs perfectly.",
        icon: <PenTool className="w-6 h-6" />,
    },
    {
        number: "03",
        title: "Development",
        description: "I build your product using modern tech stacks, keeping you updated with regular progress.",
        icon: <Code2 className="w-6 h-6" />,
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "We deploy your project to the world. I provide support to ensure everything runs smoothly.",
        icon: <Rocket className="w-6 h-6" />,
    },
];

export default function Process() {
    return (
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">How It Works</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">My Process</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A simple, transparent workflow designed to deliver high-quality results on time.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-6 rounded-2xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors group"
                    >
                        <div className="text-6xl font-bold text-slate-800/50 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                            {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 relative z-10">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
