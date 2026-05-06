"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  async function toggleMusic() {

    if (!audioRef.current) return;

    try {

      if (playing) {

        audioRef.current.pause();

      } else {

        await audioRef.current.play();

      }

      setPlaying(!playing);

    } catch (error) {

      console.error("Audio failed:", error);

    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/audio/space-theme.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-999 bg-black/70 border border-white/10 backdrop-blur-md p-4 rounded-full hover:scale-110 transition duration-300"
      >

        {playing ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={24} />
        )}

      </button>
    </>
  );
}