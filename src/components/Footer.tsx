import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    url: "http://www.facebook.com/lasungoesdown",
    icon: "/images/icons/facebook.png",
  },
  {
    name: "Instagram",
    url: "http://www.instagram.com/lasun_goesdown",
    icon: "/images/icons/instagram.png",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCmQ0R04LsqAY0UCx0cjc24g",
    icon: "/images/icons/youtube.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Ambiance photo */}
      <div className="w-full border-t-4 border-orange">
        <Image
          src="/images/gallery/table-ambiance.jpg"
          alt="Belle photo d'ambiance à table à la Sun Goes Down"
          width={1920}
          height={1120}
          className="w-full h-[300px] md:h-[450px] object-cover"
        />
      </div>

      {/* Footer content */}
      <div className="py-8 text-center">
        {/* Back to top */}
        <a
          href="#"
          className="mx-auto mb-6 block"
          aria-label="Retour en haut"
        >
          <svg
            className="w-8 h-8 text-teal mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </a>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={40}
                height={40}
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-teal/60 text-xs font-light">
          &copy; 2016 - 2025 La Sun Goes Down. Tous droits réservés
        </p>
        <p className="text-teal/40 text-xs font-light mt-1">
          La Sun Goes Down par AMAT Association Musique Art et Tourisme
        </p>
      </div>
    </footer>
  );
}
