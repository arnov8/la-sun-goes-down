import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NextEvent from "@/components/NextEvent";
import Concept from "@/components/Concept";
import LineUp from "@/components/LineUp";
import Aftermovies from "@/components/Aftermovies";
import Lieu from "@/components/Lieu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NextEvent />
      <Concept />
      <LineUp />
      <Aftermovies />
      <Lieu />
      <Contact />
      <Footer />
    </>
  );
}
