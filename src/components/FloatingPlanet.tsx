import Image from "next/image";

export default function FloatingPlanet() {
  return (
    <div className="absolute right-10 md:right-32 top-32 animate-float opacity-80">

      <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

      <Image
        src="/images/planets/saturn.png"
        alt="Saturn"
        width={450}
        height={400}
        className="relative z-10"
      />

    </div>
  );
}