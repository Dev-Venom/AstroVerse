import Image from "next/image";
import Reveal from "./Reveal";

export default function ISSSection() {
  return (
    <section 
    id="iss"
    className="min-h-screen bg-black px-8 py-32 relative overflow-hidden">

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <Reveal>
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
              Space Exploration
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Life Aboard the ISS
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              The International Space Station is a habitable artificial satellite orbiting Earth where astronauts conduct scientific experiments, study life in microgravity, and advance humanity’s understanding of space.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-2">
                  400KM
                </h3>

                <p className="text-gray-400">
                  Above Earth
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-2">
                  28,000 KM/H
                </h3>

                <p className="text-gray-400">
                  Orbital Speed
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative flex justify-center">

            <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <Image
              src="/images/iss/iss.png"
              alt="ISS"
              width={700}
              height={700}
              className="relative z-10 animate-float"
            />

          </div>
        </Reveal>

      </div>

    </section>
  );
}