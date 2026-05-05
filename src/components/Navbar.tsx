
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Theories", href: "#theories" },
    { name: "ISS", href: "#iss" },
    { name: "Timeline", href: "#timeline" },
    { name: "Gallery", href: "#gallery" },
    { name: "Black Hole", href: "#blackhole" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-[0.3em]">
          ASTROVERSE
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">

          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">

          <ul className="flex flex-col items-center gap-8 py-10 text-gray-300">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

        </div>
      )}

    </nav>
  );
}