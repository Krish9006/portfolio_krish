"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#work" },
    { name: "Skills", href: "#stack" },
    { name: "About", href: "#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled || isOpen
                    ? "border-b border-line bg-background/80 backdrop-blur-md"
                    : "border-b border-transparent"
            }`}
        >
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Primary">
                <a href="#home" className="font-serif text-xl tracking-tight text-foreground">
                    Krish Gupta
                </a>

                <div className="hidden items-center gap-9 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="rounded-md border border-line bg-white px-4 py-1.5 text-sm text-foreground transition-colors hover:border-foreground"
                    >
                        Contact
                    </a>
                </div>

                <button
                    className="text-foreground md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-line px-6 pb-6 pt-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-muted transition-colors hover:text-foreground"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
