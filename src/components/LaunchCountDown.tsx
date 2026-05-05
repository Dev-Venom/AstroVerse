"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type Launch = {
  name: string;
  net: string;
  pad: {
    name: string;
  };
};

export default function LaunchCountdown() {

  const [launch, setLaunch] = useState<Launch | null>(null);

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {

    async function fetchLaunch() {

      try {

        const response = await fetch(
          "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=1"
        );

        const data = await response.json();

        const nextLaunch = data.results[0];

        setLaunch(nextLaunch);

      } catch (error) {
        console.error(error);
      }
    }

    fetchLaunch();

  }, []);

  useEffect(() => {

    if (!launch) return;

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const launchTime = new Date(launch.net).getTime();

      const distance = launchTime - now;

      if (distance < 0) {
        setTimeLeft("Launched");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );

    }, 1000);

    return () => clearInterval(interval);

  }, [launch]);

  return (
    <section className="bg-black px-8 py-32">

      <div className="max-w-6xl mx-auto">

        <Reveal>

          <div className="text-center mb-20">

            <p className="text-orange-400 uppercase tracking-[0.3em] mb-4">
              Mission Control
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Next Rocket Launch
            </h2>

          </div>

        </Reveal>

        <Reveal>

          <div className="relative overflow-hidden rounded-[40px] border border-orange-500/20 bg-linear-to-br from-orange-500/10 to-black p-12 text-center">

            <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5 blur-3xl"></div>

            {launch ? (

              <div className="relative z-10">

                <p className="text-orange-300 tracking-[0.3em] mb-6">
                  LIVE COUNTDOWN
                </p>

                <h3 className="text-4xl md:text-5xl font-bold mb-8">
                  {launch.name}
                </h3>

                <div className="text-6xl md:text-7xl font-bold text-orange-400 mb-10">

                  {timeLeft}

                </div>

                <p className="text-gray-400 text-lg">
                  Launch Site: {launch.pad.name}
                </p>

              </div>

            ) : (

              <p className="text-gray-400">
                Fetching launch data...
              </p>

            )}

          </div>

        </Reveal>

      </div>

    </section>
  );
}