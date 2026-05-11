# La Sun Goes Down — Site Évènementiel

Site vitrine one-page pour l'association **AMAT (Association Musique Art et Tourisme)**, organisatrice des évènements "La Sun Goes Down" en Martinique : soirées de musique électronique (House, Deep House, Ethnic-House, Nudisco) en format sunset.

**Domaine :** [lasungoesdown.com](https://lasungoesdown.com)

---

## Description

Récréation fidèle du site original en Next.js. Public cible : festivaliers martiniquais et antillais, artistes, presse. Le site est entièrement statique — aucune variable d'environnement, aucun backend, aucune dépendance fonctionnelle tierce. La billetterie est gérée en externe via **Shotgun Live**.

---

## Stack technique

| Technologie | Version |
|---|---|
| **Next.js** (App Router) | 16.1.6 |
| **React** | 19.2.3 |
| **TypeScript** | ^5 |
| **Tailwind CSS** | v4 (`@tailwindcss/postcss`) |
| **Vercel** | Hébergement |

Aucune dépendance fonctionnelle tierce (pas de lib d'animation, pas de CMS, pas de backend).

**Polices :** Police personnalisée "Lulo" (`font-lulo`) — blocky, caractéristique du branding.
**Vidéo :** MP4 (`/videos/hero-video.mp4`) en lecture automatique muette.

---

## Structure du projet

```
la-sun-goes-down/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Page principale (assemble tous les composants)
│   │   ├── layout.tsx            # Métadonnées SEO + Open Graph
│   │   └── globals.css           # Variables CSS, animations personnalisées
│   ├── components/
│   │   ├── Navbar.tsx            # Nav fixe + scroll effect + menu hamburger mobile
│   │   ├── Hero.tsx              # Vidéo background, logo animé, particules flottantes
│   │   ├── NextEvent.tsx         # Prochain évènement (flyer + lien billetterie)
│   │   ├── Concept.tsx           # Description du concept + photo plein-largeur
│   │   ├── LineUp.tsx            # Grille artistes (hover overlay + liste historique)
│   │   ├── Aftermovies.tsx       # Thumbnails YouTube + modal lecteur intégré
│   │   ├── Lieu.tsx              # Photo plein-largeur du lieu
│   │   ├── Contact.tsx           # Formulaire contact + inscription newsletter
│   │   └── Footer.tsx            # Réseaux sociaux + copyright
│   └── data/
│       └── artists.ts            # Données artistes (nom, ville) + aftermovies (IDs YouTube)
├── public/
│   ├── images/
│   │   ├── artists/              # 25 photos artistes
│   │   ├── events/               # Flyers évènements
│   │   └── gallery/              # Photos ambiance
│   ├── videos/hero-video.mp4     # Vidéo hero background
│   └── logo.png
└── next.config.ts
```

---

## Sections de la page (ordre de scroll)

### 1. Navbar
Fixe en haut, couleur teal. Liens ancres (Le Concept, Line Up, Le Lieu, Contact, Boutique), bouton TICKETS vers Shotgun Live, menu hamburger mobile, transition de fond au scroll.

### 2. Hero
- Fond vidéo avec opacité
- Logo animé avec rayons SVG rotatifs + animation `sun-pulse`
- Tagline : *"FROM THE BEAT TO YOUR MIND"*
- 30 particules flottantes générées dynamiquement
- Preview vidéo en forme blob animée
- Indicateur de scroll

### 3. NextEvent
Affichage du flyer de l'évènement SGD 30 (Ditti / Fond Sonore / Lupari, Plage du Carbet), bouton BILLETTERIE orange vers Shotgun Live.

### 4. Concept
Texte descriptif en 2 colonnes, histoire du lieu (Wahoo Café, Le Carbet, post-cyclone Maria 2017), inspiration des festivals européens, photo plein-largeur.

### 5. LineUp
- 21 artistes référencés avec leur ville d'origine (Berlin, Paris, Copenhague, Malaga, Londres, Martinique, Guadeloupe, Biarritz…)
- Grille 2/3/4 colonnes de 25 photos avec hover overlay nom
- Liste textuelle historique complète

**Artistes :** Alvaro Suarez (Copenhague), Androma, Anton Dhouran, Bonjour Ben (Berlin), Céline, Eisor (Paris), Fond Sonore (Martinique), Ivan de la Ganesherie (Guadeloupe), Jacob Groening (Berlin), Juan, Keeshna (Martinique), Lia Montaigne (Martinique), Linoa (Biarritz), Piste Noire (Martinique), Sam Shure (Berlin), Sander, Shimon (Paris), Sir Davido (Londres), Solstice, Sora (Paris), Vico (Malaga).

### 6. Aftermovies
Grille de 8 vidéos YouTube (éditions 1, 2, 4, 6, 7, 10, 13, 15) avec thumbnails et badge durée. Clic → modal lecteur YouTube intégré avec autoplay.

### 7. Contact
Formulaire de contact + inscription newsletter (UI uniquement — pas encore de backend, utilise `alert()` pour confirmer). Section Instagram `@lasun_goesdown`.

### 8. Footer
Photo d'ambiance, liens Facebook / Instagram / YouTube, copyright "2016-2025 La Sun Goes Down par AMAT".

---

## Palette de couleurs

| Variable CSS | Usage |
|---|---|
| Orange | Couleur dominante du hero, bouton billetterie |
| Teal | Navbar, sections alternées, textes |
| Teal-light | Variante claire |
| Blanc | Sections Concept, LineUp, Contact, Footer |

---

## SEO

- Titre : *"La Sun Goes Down | Martinique & Guadeloupe | Soirées deep house"*
- Description : *"Évènements électroniques House & Sunset en Martinique et dans la Caraïbe."*
- Open Graph configuré pour `lasungoesdown.com`
- Langue HTML : `fr`

---

## Notes

- Le formulaire de contact et la newsletter **ne sont pas fonctionnels** — à connecter à un service email (Resend ou autre).
- La page `/shop` (Boutique) dans la navbar **n'existe pas encore**.
- Aucune variable d'environnement requise.

---

## Installation

```bash
git clone https://github.com/arnov8/la-sun-goes-down.git
cd la-sun-goes-down
npm install
npm run dev
# Accessible sur http://localhost:3000
```

```bash
npm run build   # Build statique
npx vercel --prod
```
