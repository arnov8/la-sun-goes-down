"use client";

import { useState } from "react";
import Image from "next/image";
import { aftermovies } from "@/data/artists";

export default function Aftermovies() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-teal py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-lulo text-white text-xl md:text-2xl lg:text-3xl text-center mb-12">
          LES AFTERMOVIES{" "}
          <span role="img" aria-label="camera">
            🎥
          </span>
        </h2>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aftermovies.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Thumbnail */}
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/${video.thumb}.jpg`}
                alt={`La Sun Goes Down - ${video.title}`}
                width={640}
                height={360}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />

              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration badge */}
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-orange transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              &times;
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
