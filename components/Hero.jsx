import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/content";

const facts = [
    { label: "Looking for", value: "Internships and full-time software engineering roles. Also open to freelance and contract work." },
    { label: "Experience", value: "2 internships (full-stack, healthcare AI), 3 freelance client projects" },
    { label: "Main stack", value: "Next.js, React, Node.js, MongoDB, PostgreSQL, applied LLMs" },
    { label: "Education", value: "B.Sc. (Hons.) Data Science & AI, IIT Guwahati, expected May 2027" },
    { label: "Location", value: "Bangalore, India. Comfortable working remotely across time zones." },
];

export default function Hero() {
    return (
        <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid items-start gap-12 md:grid-cols-12">
                    <div className="md:col-span-8">
                        <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted">
                            <span className="h-2 w-2 rounded-full bg-emerald-600" />
                            Available for internships, full-time roles and freelance work
                        </p>

                        <h1
                           
                            className="font-serif text-5xl leading-[1.08] tracking-tight text-foreground md:text-6xl"
                        >
                            Krish Gupta
                        </h1>
                        <p
                           
                            className="mt-3 font-serif text-2xl leading-snug text-muted md:text-3xl"
                        >
                            Software engineer. I build full-stack web apps and the AI features inside them.
                        </p>

                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                            I&apos;m a Data Science &amp; AI undergraduate at IIT Guwahati. I&apos;ve interned at The Holidays Club
                            and iAverse, a healthcare AI company, and delivered client projects end to end. Below is
                            what I built and how.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Resume <ArrowUpRight className="h-4 w-4" />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="rounded-md border border-line bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                            >
                                Email me
                            </a>
                            <a
                                href="#work"
                                className="px-2 py-3 text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
                            >
                                See projects
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border border-line bg-surface md:max-w-none">
                            <Image
                                src="/images/profile_portrait.jpg"
                                alt="Portrait of Krish Gupta"
                                fill
                                priority
                                sizes="(min-width: 768px) 30vw, 80vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <dl className="mt-16 divide-y divide-line border-y border-line md:mt-20">
                    {facts.map((item) => (
                        <div key={item.label} className="grid gap-1 py-4 md:grid-cols-12 md:gap-6">
                            <dt className="text-sm text-subtle md:col-span-3">{item.label}</dt>
                            <dd className="text-foreground md:col-span-9">{item.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
