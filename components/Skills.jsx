import Section from "./Section";
import Reveal from "./Reveal";
import { stack } from "@/lib/content";

export default function Skills() {
    return (
        <Section
            id="stack"
            label="Skills"
            title="Technical skills"
            intro="Grouped as on my resume."
        >
            <Reveal>
                <dl className="divide-y divide-line border-y border-line">
                    {stack.map((category) => (
                        <div key={category.group} className="grid gap-1 py-5 md:grid-cols-12 md:gap-6">
                            <dt className="text-sm text-subtle md:col-span-3">{category.group}</dt>
                            <dd className="text-foreground md:col-span-9">{category.items.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </Section>
    );
}
