"use client";
import Navbar from "@/components/Navbar";
import StarsBackground from "@/components/StarsBackground";
import FloatingPlanet from "@/components/FloatingPlanet";
import TheoryCard from "@/components/TheoryCard";
import { theories } from "@/data/theoris";
import Reveal from "@/components/Reveal";
import ISSSection from "@/components/ISSSection";
import Timeline from "@/components/Timeline";
import GalaxyGallery from "@/components/GalaxyGallery";
import BlackHoleSection from "@/components/BlackHoleSection";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import StatsSection from "@/components/StatsSection";
import ParallaxStars from "@/components/ParallaxStars";
import Footer from "@/components/Footer";
import APODSection from "@/components/APODSection";
import SpaceNews from "@/components/SpaceNews";
import ISSTracker from "@/components/ISSTracker";
import LaunchCountdown from "@/components/LaunchCountDown";
import BackgroundMusic from "@/components/BackgroundMusic";
import Spotlight from "@/components/Spotlight";
import CursorTrail from "@/components/CursorTrail";
export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
  return <Loader />;
}

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      

      <Navbar />

      <section
      id="home"
        className="h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgrounds/doradus-nebula.jpg')",
        }}
      >

        
        <div className="absolute inset-0 bg-black/50" />

        <StarsBackground />
        <FloatingPlanet />

        
        <h1 className="text-7xl md:text-9xl font-bold tracking-widest z-10">
          AstroVerse
        </h1>

        <p className="mt-6 text-gray-300 text-xl z-10">
          Exploring the mysteries of the universe
        </p>

        <button className="mt-10 px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition z-10">
          Explore Space
        </button>

        <div className="absolute bottom-10 flex flex-col items-center z-10 animate-bounce">
  
  <p className="text-sm tracking-widest text-gray-400 mb-2">
    SCROLL
  </p>

  <div className="w-0.5 h-10 bg-white/40"></div>

</div>
      </section>
      

      <section
      id="theories" 
      className="min-h-screen bg-linear-to-b from-black to-gray-950 px-8 py-32">

  <div className="max-w-6xl mx-auto">

      <Reveal>
    <h2 className="text-5xl font-bold mb-12">
      The Mysteries of the Universe
    </h2>
      </Reveal>
        
    <Reveal>
    <div className="grid md:grid-cols-3 gap-8">
      
      

  {theories.map((theory) => (
    <TheoryCard
      key={theory.title}
      title={theory.title}
      description={theory.description}
    />
  ))}

</div>
      </Reveal>
  </div>
  

</section>
<ISSSection />
<Timeline />
<GalaxyGallery />
<BlackHoleSection />
<StatsSection />
<ParallaxStars />
<Footer />
<APODSection />
<SpaceNews />
<ISSTracker />
<LaunchCountdown />
<BackgroundMusic /> 
<Spotlight />
<CursorTrail />
    </main>
  );
}
