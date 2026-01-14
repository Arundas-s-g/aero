
export default function About() {
    return (
        <section className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-12 z-10" id="about">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        About Us
                    </h2>
                    <p className="text-base md:text-lg font-light leading-relaxed tracking-wide text-white/80 text-justify">
                        We are the Aeromodelling Club of NIT Calicut, a vibrant community of enthusiasts passionate about the science and art of flight. Our club brings together students who design, build, and fly a wide range of aerial vehicles, including planes, drones, and model rockets. Our aim is to promote hands-on learning and innovation in aeromodelling and aerospace engineering. Through workshops, projects, and competitions, we encourage creativity, technical skill development, and teamwork.
                    </p>
                    <button className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase text-sm w-fit">
                        Explore
                    </button>
                </div>

                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden group">
                    {/* Random geometric placeholder pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] opacity-50"></div>
                    <span className="text-white/20 tracking-widest uppercase text-xs z-10">Image Placeholder</span>
                </div>
            </div>
        </section>
    );
}
