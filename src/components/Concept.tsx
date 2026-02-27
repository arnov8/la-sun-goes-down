import Image from "next/image";

export default function Concept() {
  return (
    <section id="concept" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Sun icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/icons/sun.png"
            alt="Soleil"
            width={80}
            height={80}
            className="opacity-90"
          />
        </div>

        {/* Heading */}
        <h2 className="font-lulo text-teal text-3xl md:text-4xl text-center mb-10">
          LE CONCEPT
        </h2>

        {/* Text content */}
        <div className="space-y-6 text-teal/80 text-base md:text-lg leading-relaxed font-light">
          <p>
            La Sun Goes Down est un événement Sunset qui a su prendre ses
            marques en Martinique et qui tend à se developper dans la Caraïbe.
            Dans des cadres résolument solaires la deep house continue de
            s&apos;installer sur l&apos;île au fil des saisons qui
            s&apos;enchainent. Le temps d&apos;un couché du soleil et d&apos;un
            début de soirée les Sun Goes Down se veulent éclectiques et remplies
            d&apos;amour !
          </p>

          <p>
            C&apos;est d&apos;abord dans son qg du « Wahoo Café » reconstruit
            après le cyclone « Maria » en 2017 qu&apos;ont lieu la majorité des
            évènements. Un nouveau départ historique pour cet établissement
            emblématique de la commune du Carbet. Une finalité positive fasse à
            ce coup du sort qui à contraint le bar à se reconstruire entièrement.
            L&apos;intensité du lieu dans son côté roots et coloré, confère
            toujours à l&apos;ambiance house électro toute sa profondeur et son
            émotion.
          </p>

          <p>
            Inspiré des prestigieuses fêtes et festivals réunissant les amoureux
            de la musique électronique, house et deep house en Europe et dans le
            Monde, la Sun Goes Down distille des rythmes forts, de profondes
            mélodies House mais aussi de la Funk et de la Nudisco. Cocktail
            particulièrement détonnant dans cet environnement Peace et festif. Le
            line up des Djs étant lui aussi construit autour de cet esprit : des
            pointures de la scène parisienne, européenne et aussi locale se
            relaient au fils de sets intenses et mélodiques. Venez décrouvrir
            l&apos;univers Sun Goes Down là où il vient s&apos;installer !
          </p>
        </div>
      </div>

      {/* Full-width party photo */}
      <div className="mt-16 w-full">
        <Image
          src="/images/gallery/party-deco.jpg"
          alt="Ambiance festive avec décorations colorées à la Sun Goes Down"
          width={1920}
          height={1280}
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </div>
    </section>
  );
}
