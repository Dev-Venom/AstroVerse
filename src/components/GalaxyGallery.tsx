import Image from "next/image";
import Reveal from "./Reveal";
import { gallery } from "@/data/gallery";

export default function GalaxyGallery() {
  return (
    <section 
    id="gallery"
    className="min-h-screen bg-black px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="text-center mb-20">

            <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
              Cosmic Gallery
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Wonders of the Universe
            </h2>

          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">

          {gallery.map((image, index) => (
            <Reveal key={index}>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10">

                <Image
                  src={image}
                  alt="Galaxy"
                  width={500}
                  height={700}
                  className="w-full h-125 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent opacity-70"></div>

                <div className="absolute bottom-6 left-6 z-10">

                  <p className="text-sm tracking-[0.3em] text-purple-300 mb-2">
                    DEEP SPACE
                  </p>

                  <h3 className="text-2xl font-semibold">
                    Galaxy View
                  </h3>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}