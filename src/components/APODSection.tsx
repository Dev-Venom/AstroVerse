"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

type APODData = {
  title: string;
  explanation: string;
  url: string;
  date: string;
};

export default function APODSection() {

  const [data, setData] = useState<APODData | null>(null);

  useEffect(() => {

    async function fetchAPOD() {

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
      );

      const result = await response.json();

      setData(result);
    }

    fetchAPOD();

  }, []);

  if (!data) {
    return (
      <section className="bg-black py-32 text-center">
        <p className="text-gray-400">
          Loading NASA data...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-linear-to-b from-black to-gray-950 px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <Reveal>

          <div className="text-center mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              NASA Live Data
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Astronomy Picture of the Day
            </h2>

          </div>

        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <Reveal>

            <div className="relative overflow-hidden rounded-3xl border border-white/10">

              <Image
                src={data.url}
                alt={data.title}
                width={1000}
                height={700}
                className="w-full h-full object-cover"
              />

            </div>

          </Reveal>

          <Reveal>

            <div>

              <p className="text-cyan-400 tracking-widest mb-4">
                {data.date}
              </p>

              <h3 className="text-4xl font-bold mb-8">
                {data.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                {data.explanation}
              </p>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}