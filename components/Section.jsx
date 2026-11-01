import Reveal from "./Reveal";

export default function Section({ id, label, title, intro, children }) {
    return (
        <section id={id} className="border-t border-line py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-6">
                <Reveal className="mb-12 md:mb-16">
                    <p className="text-sm font-medium text-primary">{label}</p>
                    <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-foreground md:text-4xl">
                        {title}
                    </h2>
                    {intro && <p className="mt-4 max-w-2xl leading-relaxed text-muted">{intro}</p>}
                </Reveal>
                {children}
            </div>
        </section>
    );
}
