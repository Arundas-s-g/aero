import Hero from "@/components/Hero";
import About from "@/components/About";
import TeamPreview from "@/components/TeamPreview";
import Sponsors from "@/components/Sponsors";

import EventsPreview from "@/components/EventsPreview";
import AchievementsPreview from "@/components/AchievementsPreview";
import GalleryPreview from "@/components/GalleryPreview";

export default function Home() {
  return (
    <main className="relative bg-[#050505] m-0 p-0 w-full">
      {/* 1. SCROLL INTERACTION */}
      <Hero />
      <Sponsors />
      <About />
      <EventsPreview />
      <AchievementsPreview />
      <GalleryPreview />
      <TeamPreview />
    </main>
  );
}
