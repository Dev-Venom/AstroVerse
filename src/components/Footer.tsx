import {
  Rocket,
  Telescope,
  Orbit,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 px-8 py-24 overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid md:grid-cols-4 gap-16">

          <div>

            <h2 className="text-3xl font-bold tracking-[0.3em] mb-6">
              ASTROVERSE
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Exploring the mysteries of the cosmos through science, imagination, and technology.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Navigation
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#theories" className="hover:text-white transition">
                  Theories
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-white transition">
                  Gallery
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Space Topics
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex items-center gap-3">
                <Rocket size={18} />
                Space Missions
              </li>

              <li className="flex items-center gap-3">
                <Telescope size={18} />
                Deep Space
              </li>

              <li className="flex items-center gap-3">
                <Orbit size={18} />
                Orbital Science
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              About
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Built for space enthusiasts who dream beyond Earth and seek to understand the universe.
            </p>

          </div>

        </div>

        <div className="border-t border-white/10 mt-20 pt-8 text-center text-gray-500">

          © 2026 AstroVerse — Journey Beyond the Stars

        </div>

      </div>

    </footer>
  );
}