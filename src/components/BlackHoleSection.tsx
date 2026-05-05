import Reveal from "./Reveal";

export default function BlackHoleSection() {
  return (
    <section
    id="blackhole"
      className="relative min-h-screen bg-cover bg-center flex items-center px-8 py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/blackholes/blackhole.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        <Reveal>
          <p className="text-purple-400 uppercase tracking-[0.4em] mb-6">
            Cosmic Mystery
          </p>

          <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-10">
            Beyond the Event Horizon
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
            Black holes are regions where spacetime bends infinitely under gravity. 
            They challenge our understanding of physics, time, and reality itself.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-3">
                Singularity
              </h3>

              <p className="text-gray-400">
                A point where density and gravity become infinite.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-3">
                Event Horizon
              </h3>

              <p className="text-gray-400">
                The invisible boundary beyond which nothing can escape.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-3">
                Time Dilation
              </h3>

              <p className="text-gray-400">
                Time slows dramatically near massive gravitational fields.
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}