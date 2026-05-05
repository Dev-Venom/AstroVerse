"use client";

import CountUp from "react-countup";
import Reveal from "./Reveal";

const stats = [
  {
    value: 200,
    suffix: "B+",
    label: "Galaxies",
  },

  {
    value: 10000,
    suffix: "+",
    label: "Exoplanets",
  },

  {
    value: 270,
    suffix: "+",
    label: "Space Missions",
  },

  {
    value: 100,
    suffix: "M+",
    label: "Observed Stars",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-linear-to-b from-black to-gray-950 px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="text-center mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Cosmic Statistics
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              The Scale of the Universe
            </h2>

          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <Reveal key={stat.label}>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-md hover:border-cyan-400/40 transition duration-300">

                <h3 className="text-5xl font-bold mb-4 text-cyan-300">

                  <CountUp
                    end={stat.value}
                    duration={3}
                  />

                  {stat.suffix}

                </h3>

                <p className="text-gray-400 tracking-widest uppercase">
                  {stat.label}
                </p>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}