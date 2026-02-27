"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 40}%`,
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            background: `radial-gradient(circle, rgba(255,${150 + Math.random() * 105},0,${0.4 + Math.random() * 0.5}) 0%, transparent 70%)`,
            animation: `float-particle ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

function AnimatedSunSVG() {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] animate-sun-pulse">
      {/* Rotating rays behind the sun */}
      <div className="absolute inset-[-40px] md:inset-[-60px] animate-sun-rays opacity-30">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="250"
              y1="250"
              x2={250 + 230 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={250 + 230 * Math.sin((i * 15 * Math.PI) / 180)}
              stroke="white"
              strokeWidth={i % 3 === 0 ? "2" : "1"}
              opacity={i % 2 === 0 ? "0.6" : "0.3"}
            />
          ))}
        </svg>
      </div>

      {/* Main sun circle with tribal/decorative border */}
      <div className="absolute inset-0 rounded-full border-4 border-white/20" />
      <div className="absolute inset-2 rounded-full border-2 border-white/10" />

      {/* Logo image */}
      <Image
        src="/images/logo.png"
        alt="Logo de la Sun Goes Down"
        fill
        sizes="(max-width: 768px) 280px, 420px"
        className="object-contain z-10 drop-shadow-2xl"
        priority
      />
    </div>
  );
}

function WaveReflection() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 overflow-hidden opacity-40">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-full"
          style={{
            bottom: `${i * 8}px`,
            height: "3px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.5) 70%, transparent 100%)",
            animation: `wave-drift ${2.5 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            transform: `scaleX(${0.6 + i * 0.1})`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-orange">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
        poster="/images/gallery/party-deco.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange/80 via-orange/60 to-orange" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange via-transparent to-transparent" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center pt-24 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Animated Sun with Logo */}
        <AnimatedSunSVG />

        {/* Tagline with shimmer */}
        <h1 className="sr-only">La Sun Goes Down</h1>
        <p
          className={`font-lulo text-white text-sm md:text-base mt-6 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="animate-shimmer">FROM THE BEAT TO YOUR MIND</span>
        </p>

        {/* Subtitle */}
        <h2
          className={`font-lulo text-white text-base md:text-xl lg:text-2xl mt-10 max-w-3xl leading-relaxed px-4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Événements Électroniques House & Sunset
          <br />
          en Martinique et dans la Caraïbes
        </h2>
      </div>

      {/* Video blob preview */}
      <div
        className={`relative z-10 mt-10 mb-16 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="w-[280px] h-[230px] md:w-[400px] md:h-[330px] animate-video-blob overflow-hidden shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Wave reflection at bottom */}
      <WaveReflection />

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-[1200ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
