import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

const links = [
    { label: "Resume", href: profile.resume, icon: ArrowUpRight },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.github, icon: Github },
];

export default function Contact() {
    return (
        <section id="contact" className="border-t border-line py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-6">
                <Reveal className="max-w-2xl">
                    <p className="text-sm font-medium text-primary">Contact</p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">
                        Get in touch
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted">
                        I&apos;m looking for internships and full-time engineering roles, and I take on freelance or
                        contract projects. If you&apos;re hiring or have something to build, email me. I usually reply
                        within a day or two.
                    </p>

                    <a
                        href={`mailto:${profile.email}`}
                        className="mt-8 inline-block font-serif text-2xl text-primary underline decoration-line underline-offset-8 transition-colors hover:decoration-primary md:text-3xl"
                    >
                        {profile.email}
                    </a>

                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                        {links.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                            >
                                <Icon className="h-4 w-4" /> {label}
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
