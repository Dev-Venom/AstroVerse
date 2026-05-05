import Reveal from "./Reveal";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section
    id="timeline" 
    className="min-h-screen bg-linear-to-b from-black to-gray-950 px-8 py-32">

      <div className="max-w-5xl mx-auto">

        <Reveal>
          <h2 className="text-5xl font-bold text-center mb-24">
            Journey Through Space History
          </h2>
        </Reveal>

        <div className="relative border-l border-white/10">

          {timeline.map((event, index) => (
            <Reveal key={event.year}>

              <div className="ml-10 mb-20 relative">

                <div className="absolute -left-12.25 top-2 w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]"></div>

                <p className="text-purple-400 text-lg mb-2">
                  {event.year}
                </p>

                <h3 className="text-3xl font-semibold mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  {event.description}
                </p>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}