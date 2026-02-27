export interface ArtistName {
  name: string;
  city: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

// Text list of artists (exactly as displayed on the original site)
export const artistNames: ArtistName[] = [
  { name: "Alvaro Suarez", city: "Copenhague" },
  { name: "Androma", city: "Paris" },
  { name: "Anton Dhouran", city: "Paris" },
  { name: "Bonjour Ben", city: "Berlin" },
  { name: "Céline", city: "Paris" },
  { name: "Eisor", city: "Paris" },
  { name: "Fond Sonore", city: "Martinique" },
  { name: "Ivan de la Ganesherie", city: "Guadeloupe" },
  { name: "Jacob Groening", city: "Berlin" },
  { name: "Keeshna", city: "Martinique" },
  { name: "Juan", city: "Paris" },
  { name: "Lia Montaigne", city: "Martinique" },
  { name: "Linoa", city: "Biarritz" },
  { name: "Piste Noire", city: "Martinique" },
  { name: "Sam Shure", city: "Berlin" },
  { name: "Sander", city: "Paris" },
  { name: "Shimon", city: "Paris" },
  { name: "Sir Davido", city: "Londres" },
  { name: "Solstice", city: "Paris" },
  { name: "Sorä", city: "Paris" },
  { name: "Vico", city: "Malaga" },
];

// Gallery photos in the exact order from the original site (25 photos)
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/artists/alvaro-suarez.png", alt: "Alvaro Suarez" },
  { src: "/images/artists/androma.jpg", alt: "Androma" },
  { src: "/images/artists/anton-dhouran.jpg", alt: "Anton Dhouran" },
  { src: "/images/artists/bonjour-ben.jpg", alt: "Bonjour Ben" },
  { src: "/images/artists/celine.jpg", alt: "Céline" },
  { src: "/images/artists/eisor.jpg", alt: "Eisor" },
  { src: "/images/artists/fond-sonore.jpg", alt: "Fond Sonore" },
  { src: "/images/artists/fond-sonore-2.png", alt: "Fond Sonore" },
  { src: "/images/artists/ivan-de-la-ganesherie.jpg", alt: "Ivan de la Ganesherie" },
  { src: "/images/artists/jacob-groening.jpg", alt: "Jacob Groening" },
  { src: "/images/artists/juan.jpg", alt: "Juan" },
  { src: "/images/artists/keeshna.jpg", alt: "Keeshna" },
  { src: "/images/artists/lia-montaigne.jpg", alt: "Lia Montaigne" },
  { src: "/images/artists/linoa.jpg", alt: "Linoa" },
  { src: "/images/artists/piste-noire.jpg", alt: "Piste Noire" },
  { src: "/images/artists/sam-shure.jpg", alt: "Sam Shure" },
  { src: "/images/artists/sander.jpg", alt: "Sander" },
  { src: "/images/artists/shimon.jpg", alt: "Shimon" },
  { src: "/images/artists/vander.jpg", alt: "Vander" },
  { src: "/images/artists/solstice.jpg", alt: "Solstice" },
  { src: "/images/artists/sir-davido.jpg", alt: "Sir Davido" },
  { src: "/images/artists/sora.jpg", alt: "Sorä" },
  { src: "/images/artists/vico.jpg", alt: "Nicolas Saad" },
  { src: "/images/artists/ditti.jpg", alt: "Ditti" },
  { src: "/images/artists/lupari.png", alt: "Lupari" },
];

export const aftermovies = [
  { id: "AurwvI0vy4w", title: "15ème édition - Vander / Fond Sonore / Piste Noire", duration: "02:16", thumb: "maxresdefault" },
  { id: "OV118OvWH38", title: "13ème édition - Sander / Linoa / Fond Sonore", duration: "01:01", thumb: "maxresdefault" },
  { id: "lqejhXGA8uw", title: "10ème édition - Alvaro Suarez / Piste Noire / Lia Montaigne", duration: "01:56", thumb: "hqdefault" },
  { id: "hV3bozBOndc", title: "7ème édition - Sorä / Nicolas Saad / Fond Sonore / Marcel Ravin", duration: "02:24", thumb: "hqdefault" },
  { id: "SLIbKbPXy-o", title: "6ème édition - Jacob Groening / Vico / Piste Noire", duration: "02:15", thumb: "maxresdefault" },
  { id: "pkdS_H_gFYc", title: "La première - Céline / Vico", duration: "02:20", thumb: "maxresdefault" },
  { id: "Eh-8PvKn2Ic", title: "4ème édition - Androma / Céline / Fond Sonore", duration: "01:37", thumb: "maxresdefault" },
  { id: "AIzPef1KHR0", title: "2ème édition - Vico / Piste Noire", duration: "03:15", thumb: "maxresdefault" },
];
