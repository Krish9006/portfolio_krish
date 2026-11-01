import Section from "./Section";
import Reveal from "./Reveal";
import { experience, education } from "@/lib/content";

export default function Experience() {
    return (
        <Section
            id="experience"
            label="Experience"
            title="Internships and client work"
            intro="Two internships and a freelance engagement, all remote and all shipped to production."
        >
            <ul className="divide-y divide-line border-y border-line">
                {experience.map((item) => (
                    <li key={item.org}>
                        <Reveal className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                            <div className="md:col-span-3">
                                <p className="text-sm text-subtle">{item.period}</p>
                                <p className="mt-1 text-sm text-subtle">{item.place}</p>
                            </div>
                            <div className="md:col-span-9">
                                <h3 className="font-serif text-xl text-foreground">
                                    {item.org}
                                    <span className="text-muted"> · {item.role}</span>
                                </h3>
                                <ul className="mt-4 space-y-2.5 leading-relaxed text-muted">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex gap-3">
                                            <span className="mt-2.5 h-px w-3 shrink-0 bg-primary" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </li>
                ))}
                <li>
                    <Reveal className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                        <div className="md:col-span-3">
                            <p className="text-sm text-subtle">{education.period}</p>
                        </div>
                        <div className="md:col-span-9">
                            <h3 className="font-serif text-xl text-foreground">
                                {education.org}
                                <span className="text-muted"> · Education</span>
                            </h3>
                            <p className="mt-2 text-foreground">{education.degree}</p>
                            <p className="mt-1 leading-relaxed text-muted">{education.detail}</p>
                            <p className="mt-3 text-muted">Solved 800+ LeetCode problems across arrays, graphs, dynamic programming and trees.</p>
                        </div>
                    </Reveal>
                </li>
            </ul>
        </Section>
    );
}
