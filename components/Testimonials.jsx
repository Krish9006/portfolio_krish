"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "Krish is a coding wizard. He turned our complex idea into a smooth, working web app in no time.",
        name: "Awadh",
        title: "Project Collaborator",
    },
    {
        quote:
            "One of the most dedicated developers I've worked with. His eye for design and detail is next level.",
        name: "Rishab",
        title: "Fellow Developer",
    },
    {
        quote:
            "I was stuck on a bug for days, and Krish fixed it in minutes. Highly recommend him for any backend work.",
        name: "Yashraj",
        title: "Tech Enthusiast",
    },
    {
        quote:
            "The portfolio site he built for me is stunning. It's fast, responsive, and exactly what I wanted.",
        name: "Ravi",
        title: "Freelance Client",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                    Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    What People Say
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Don't just take my word for it. Here's what clients and colleagues have
                    to say about working with me.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                    {[...testimonials, ...testimonials].map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-[350px] md:w-[450px] flex-shrink-0 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
                        >
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-slate-300 text-lg mb-6 whitespace-normal leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 opacity-80" />
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-slate-500 text-sm">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4 ml-8">
                    {[...testimonials, ...testimonials].map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-[350px] md:w-[450px] flex-shrink-0 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
                        >
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-slate-300 text-lg mb-6 whitespace-normal leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 opacity-80" />
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-slate-500 text-sm">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
