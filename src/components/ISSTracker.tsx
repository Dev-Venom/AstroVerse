"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type ISSData = {
  latitude: string;
  longitude: string;
};

export default function ISSTracker() {

  const [position, setPosition] = useState<ISSData | null>(null);

  useEffect(() => {

    async function fetchISS() {

      try {

        const response = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544"
        );

        const data = await response.json();

        setPosition({
          latitude: data.latitude.toFixed(2),
          longitude: data.longitude.toFixed(2),
        });

      } catch (error) {
        console.error(error);
      }
    }

    fetchISS();

    const interval = setInterval(fetchISS, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="bg-linear-to-b from-gray-950 to-black px-8 py-32">

      <div className="max-w-6xl mx-auto">

        <Reveal>

          <div className="text-center mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Live Satellite Tracking
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Real-Time ISS Position
            </h2>

          </div>

        </Reveal>

        <Reveal>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-md text-center">

            {position ? (

              <>

                <div className="w-6 h-6 bg-cyan-400 rounded-full mx-auto mb-8 animate-ping"></div>

                <h3 className="text-4xl font-bold mb-10">
                  International Space Station
                </h3>

                <div className="grid md:grid-cols-2 gap-10">

                  <div className="bg-black/40 border border-white/10 rounded-3xl p-10">

                    <p className="text-gray-400 mb-4 tracking-widest">
                      LATITUDE
                    </p>

                    <h4 className="text-5xl font-bold text-cyan-300">
                      {position.latitude}°
                    </h4>

                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-3xl p-10">

                    <p className="text-gray-400 mb-4 tracking-widest">
                      LONGITUDE
                    </p>

                    <h4 className="text-5xl font-bold text-cyan-300">
                      {position.longitude}°
                    </h4>

                  </div>

                </div>

                <p className="text-gray-500 mt-10">
                  Updating every 5 seconds...
                </p>

              </>

            ) : (

              <p className="text-gray-400">
                Connecting to satellite...
              </p>

            )}

          </div>

        </Reveal>

      </div>

    </section>
  );
}