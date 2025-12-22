"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Contact Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                        I'm currently available for freelance work. Feel free to reach out via phone or email, or book a free consultation call.
                    </p>

                    <div className="mb-12">
                        <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:-translate-y-1"
                        >
                            Book a Free Call
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Phone</h3>
                                <p className="text-slate-400">+91 8006734002</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <p className="text-slate-400">guptashanu341@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Address</h3>
                                <p className="text-slate-400">India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
