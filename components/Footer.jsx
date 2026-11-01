import { profile } from "@/lib/content";

export default function Footer() {
    return (
        <footer className="border-t border-line py-10">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-subtle md:flex-row">
                <p>
                    &copy; {new Date().getFullYear()} {profile.name}
                </p>
                <a href="#home" className="transition-colors hover:text-foreground">
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
