import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 mt-20 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold tracking-tighter text-white mb-2">
                        KG<span className="text-primary">.</span>
                    </h3>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Krish Gupta. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/Krish9006" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary transition-all duration-300">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/krishgupta9006" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:guptashanu341@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary transition-all duration-300">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
