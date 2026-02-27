"use client";

import Image from "next/image";

const TICKETS_URL =
  "https://shotgun.live/fr/events/la-sungoesdown-ditti-fondsonore-lupari";

export default function NextEvent() {
  return (
    <section className="bg-orange py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-lulo text-white text-2xl md:text-3xl mb-12">
          LA PROCHAINE{" "}
          <span role="img" aria-label="relaxed">
            😌
          </span>
        </h2>

        {/* Event Flyer */}
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
        >
          <div className="relative overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/images/events/sgd-30-flyer.jpg"
              alt="SGD 30 - Ditti / Fond Sonore / Lupari - 11 Octobre, Plage du Carbet"
              width={508}
              height={635}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </a>

        {/* Billetterie Button */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <svg
            className="w-8 h-8 text-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>

          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal text-white font-lulo text-sm md:text-base px-10 py-4 tracking-wider hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            BILLETTERIE
          </a>

          <svg
            className="w-8 h-8 text-teal rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
