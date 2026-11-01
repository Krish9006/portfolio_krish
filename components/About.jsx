import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
    return (
        <Section id="about" label="About" title="A bit about me">
            <Reveal className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
                <p>
                    I like owning a feature end to end: the interface, the API behind it, the database, and getting
                    it deployed. Day to day that means React, Next.js, Node.js and PostgreSQL or MongoDB, with a
                    growing focus on practical LLM work such as retrieval over documents, AI orchestration with
                    fallbacks, and OCR workflows.
                </p>
                <p>
                    At iAverse I worked on a healthcare product spanning authentication, appointments, doctor
                    scheduling and AI document processing, where testing 38 APIs taught me to care about edge cases
                    before release. As a freelancer I&apos;ve run three client engagements from requirements through
                    deployment on my own.
                </p>
                <p>
                    Outside work I&apos;ve solved 800+ LeetCode problems. I&apos;m looking for a team where I can work on
                    real problems, get good code review and keep learning from stronger engineers.
                </p>
            </Reveal>
        </Section>
    );
}
