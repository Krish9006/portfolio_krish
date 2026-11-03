import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { featuredProjects, moreProjects } from "@/lib/content";

function FeaturedProject({ project, flip }) {
    return (
        <Reveal>
            <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className={`group relative block aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface lg:col-span-7 ${
                        flip ? "lg:order-2" : ""
                    }`}
                >
                    <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                </a>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <p className="text-sm font-medium text-primary">{project.kind}</p>
                    <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">{project.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

                    <p className="mt-6 text-xs font-medium uppercase tracking-wider text-subtle">Engineering notes</p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                        {project.highlights.map((point) => (
                            <li key={point} className="flex gap-3">
                                <span className="mt-2 h-px w-4 shrink-0 bg-primary" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <li key={tag} className="rounded border border-line bg-white px-2.5 py-1 text-xs text-muted">
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex items-center gap-6 text-sm">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                        >
                            {project.demoLabel ?? "Live site"} <ArrowUpRight className="h-4 w-4" />
                        </a>
                        {project.appStore && (
                            <a
                                href={project.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                            >
                                App Store <ArrowUpRight className="h-4 w-4" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                            >
                                <Github className="h-4 w-4" /> Source
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </Reveal>
    );
}

export default function Projects() {
    return (
        <Section
            id="work"
            label="Projects"
            title="Selected work"
            intro="Five projects I'd like you to look at first. Each is deployed, and the source is linked where it is public."
        >
            <div className="space-y-20 md:space-y-24">
                {featuredProjects.map((project, i) => (
                    <FeaturedProject key={project.title} project={project} flip={i % 2 === 1} />
                ))}
            </div>

            <Reveal className="mt-24 md:mt-28">
                <h3 className="mb-6 text-sm font-medium text-primary">
                    More projects
                </h3>
                <ul className="divide-y divide-line border-y border-line">
                    {moreProjects.map((project) => (
                        <li
                            key={project.title}
                            className="grid items-center gap-2 py-5 md:grid-cols-12 md:gap-6"
                        >
                            <h4 className="font-serif text-xl text-foreground md:col-span-3">{project.title}</h4>
                            <p className="text-sm text-muted md:col-span-5">{project.note}</p>
                            <p className="text-xs text-subtle md:col-span-2">{project.tags}</p>
                            <div className="flex items-center gap-4 text-sm md:col-span-2 md:justify-end">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                                >
                                    Live <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} source on GitHub`}
                                    className="text-muted transition-colors hover:text-foreground"
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    );
}
