"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Contact Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 text-lg mb-12">
                        I'm currently available for freelance work. Let's discuss how I can help you achieve your goals.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Phone</h3>
                                <p className="text-slate-400">+1 (234) 567-890</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <p className="text-slate-400">hello@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Address</h3>
                                <p className="text-slate-400">123 Design Street, Creative City</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card p-8 md:p-10 rounded-3xl border border-border"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Full Name</label>
                                <input type="text" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email Address</label>
                                <input type="email" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Subject</label>
                            <input type="text" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Project Discussion" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Message</label>
                            <textarea rows={4} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..." />
                        </div>

                        <button type="button" className="w-full py-4 rounded-xl bg-primary text-black font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                            Send Message <Send className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
