import Link from "next/link";
import { Instagram, Mail, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white/80 border-t border-white/10 py-16 z-50 relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left justify-items-center">

                {/* 1. Quick Links */}
                <div className="flex flex-col gap-4 items-start w-full md:w-auto">
                    <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-2">
                        Quick Links
                    </h3>
                    <nav className="flex flex-col gap-2 text-sm font-light tracking-wide items-start">
                        <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
                        <Link href="/team" className="hover:text-blue-500 transition-colors">Team</Link>
                        <Link href="#events" className="hover:text-blue-500 transition-colors">Events</Link>
                        <Link href="#achievements" className="hover:text-blue-500 transition-colors">Achievements</Link>
                        <Link href="#gallery" className="hover:text-blue-500 transition-colors">Gallery</Link>
                    </nav>
                </div>

                {/* 2. Location */}
                <div className="flex flex-col gap-4 items-start w-full md:w-auto">
                    <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-2">
                        Location
                    </h3>
                    <p className="text-sm font-light tracking-wide leading-relaxed text-left">
                        1st Floor, Milma Canteen,<br />
                        NITC
                    </p>
                    {/* Google Map Embed */}
                    <div className="w-full max-w-xs h-32 rounded-lg overflow-hidden border border-white/10 mt-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3912.164366632938!2d75.936939!3d11.320899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb435ac3e232971fa!2sMilma%20Canteen!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* 3. Connect With Us */}
                <div className="flex flex-col gap-4 items-start w-full md:w-auto">
                    <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-2">
                        Connect With Us
                    </h3>
                    <nav className="flex flex-col gap-3 text-sm font-light tracking-wide items-start">
                        <Link href="https://www.instagram.com/club_aerounwired" target="_blank" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                            <Instagram size={18} /> Instagram
                        </Link>
                        <Link href="mailto:aerounwired@nitc.ac.in" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                            <Mail size={18} /> Gmail
                        </Link>
                        <Link href="https://www.linkedin.com/company/aerounwired/" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Linkedin size={18} /> LinkedIn
                        </Link>
                        <Link href="https://www.facebook.com/UnwiredAeroNitCalicut/" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <Facebook size={18} /> Facebook
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center">
                <p className="text-xs text-white/40 tracking-widest uppercase">
                    Aerounwired club ©2025, NITC. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
