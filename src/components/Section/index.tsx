import clsx from "clsx";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
    return (
        <section id={id} className={clsx("min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-20 bg-[#050505] border-t border-white/5", className)}>
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
                    {title}<span className="text-blue-500">.</span>
                </h2>
                <div className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                    {children}
                </div>
            </div>
        </section>
    );
}
