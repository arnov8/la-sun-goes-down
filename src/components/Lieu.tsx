import Image from "next/image";

export default function Lieu() {
  return (
    <section id="lieu" className="relative w-full">
      {/* Full-width crowd photo */}
      <Image
        src="/images/gallery/party-deco.jpg"
        alt="La foule dansant sous les décorations colorées"
        width={1920}
        height={800}
        className="w-full h-[400px] md:h-[600px] object-cover"
      />

      {/* Sun icon overlay at bottom */}
      <div className="bg-white flex justify-center py-8">
        <Image
          src="/images/icons/sun.png"
          alt="Soleil"
          width={60}
          height={60}
          className="opacity-90"
        />
      </div>
    </section>
  );
}
