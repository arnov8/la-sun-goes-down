import Image from "next/image";
import { artistNames, galleryPhotos } from "@/data/artists";

export default function LineUp() {
  return (
    <section id="lineup" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Flower icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/icons/flower.png"
            alt="Fleur"
            width={84}
            height={70}
          />
        </div>

        {/* Heading */}
        <h2 className="font-lulo text-teal text-2xl md:text-3xl lg:text-4xl text-center mb-10">
          LINE UP & GUESTS INVITÉS
        </h2>

        {/* Description - 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-teal/80 text-base md:text-lg leading-relaxed font-light">
          <p>
            Les Sun Goes Down se veulent être les évènements d&apos;accueil des
            meilleurs artistes électroniques, House, Deep House du Monde et de la
            Caraïbe. La direction artistique dans le choix des artistes invités
            est l&apos;élément central et culminant. Les Sun Goes Down sont
            présentateurs de talents prestigieux étrangers et locaux, ainsi
            qu&apos;incubateur de nouveaux prodiges. À travers des line up variés
            les couchés de soleil ne sont plus les mêmes.
          </p>
          <p>
            Une tonalité musicale bien précise et rigoureusement respectée
            confère aux évènements cette touche particulière. Un univers savément
            structuré autour de la House, la Deep House, l&apos;Ethnic-House et
            la Nudisco. De Berlin à Malaga, en passant par Paris et Copenhague,
            découvrez les artistes s&apos;étant déjà produit à la Sun Goes Down.
            N&apos;hésitez pas à découvrir leur univers musicaux.
          </p>
        </div>

        {/* Artist names list */}
        <div className="text-center mb-14 leading-loose">
          {artistNames.map((artist, i) => (
            <span key={artist.name}>
              <span className="font-lulo text-teal text-sm md:text-base">
                {artist.name.toUpperCase()}
              </span>
              <span className="text-teal/50 text-sm ml-1">
                ({artist.city})
              </span>
              {i < artistNames.length - 1 && (
                <span className="text-teal/30 mx-1">,</span>
              )}
            </span>
          ))}
        </div>

        {/* Artist photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {galleryPhotos.map((photo, i) => (
            <div
              key={`${photo.alt}-${i}`}
              className="relative group overflow-hidden aspect-square"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay with name */}
              <div className="absolute inset-0 bg-teal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-2">
                  <p className="font-lulo text-white text-xs md:text-sm">
                    {photo.alt.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
