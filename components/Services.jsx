"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Zap, Globe, Smartphone, Database } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
    {
        title: "Custom Web Development",
        description: "High-performance, responsive websites tailored to your brand. Built with Next.js and Tailwind CSS for speed and scalability.",
        icon: <Globe className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "MVP Development",
        description: "Turn your startup idea into a functional product in weeks, not months. Focus on core features to validate your market fast.",
        icon: <Rocket className="w-8 h-8 text-orange-500" />,
    },
    {
        title: "API Integration",
        description: "Seamlessly connect your app with third-party services like Stripe, OpenAI, Firebase, and more to extend functionality.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
];

export default function Services() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="h-4 w-24 mx-auto rounded shimmer" />
                    <div className="h-10 w-64 mx-auto rounded shimmer" />
                    <div className="h-4 w-96 mx-auto rounded shimmer" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="h-[250px] rounded-2xl shimmer border border-white/5" />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">What I Do</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Services & Solutions</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    I help businesses and startups build digital products that drive results.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <SpotlightCard
                        key={index}
                        className="p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
}
