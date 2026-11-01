import Section from "./Section";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
    return (
        <Section
            id="services"
            label="Fit"
            title="Where I can contribute"
            intro="Work I've done before and can take ownership of, whether as an intern, a full-time engineer or on a contract."
        >
            <ul className="divide-y divide-line border-y border-line">
                {services.map((service) => (
                    <li key={service.title}>
                        <Reveal className="grid gap-3 py-7 md:grid-cols-12 md:gap-8">
                            <h3 className="font-serif text-xl text-foreground md:col-span-4">{service.title}</h3>
                            <p className="leading-relaxed text-muted md:col-span-6">{service.description}</p>
                            <p className="text-sm text-subtle md:col-span-2 md:text-right">
                                {service.tags.join(" · ")}
                            </p>
                        </Reveal>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
