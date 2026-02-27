"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci ! ${newsletterEmail} a été inscrit(e) à la newsletter.`);
    setNewsletterEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Sun icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/icons/sun.png"
            alt="Soleil"
            width={60}
            height={60}
            className="opacity-90"
          />
        </div>

        {/* Contact heading */}
        <h2 className="font-lulo text-teal text-3xl md:text-4xl text-center mb-12">
          CONTACT
        </h2>

        {/* Newsletter section */}
        <div className="mb-16">
          <h3 className="font-lulo text-teal text-base md:text-lg text-center mb-6 tracking-wider">
            INSCRIVEZ VOUS POUR NE RIEN RATER
          </h3>
          <p className="text-teal-light text-base md:text-lg text-center mb-6 font-light">
            Inscrivez vous à notre petite newsletter. Nous vous enverrons avant
            chaque évènement quelques informations pour ne rien rater :)
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="max-w-lg mx-auto space-y-3"
          >
            <input
              type="email"
              placeholder="Adresse e-mail"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 text-teal placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <button
              type="submit"
              className="w-full bg-orange text-white font-medium py-3 text-base tracking-wider hover:bg-orange-dark transition-colors duration-300"
            >
              S&apos;abonner maintenant
            </button>
          </form>
        </div>

        {/* Contact form */}
        <div>
          <h3 className="font-lulo text-teal text-base md:text-lg text-center mb-4 tracking-wider">
            POUR NOUS CONTACTER
          </h3>
          <p className="text-teal/70 text-base md:text-lg text-center mb-8 font-light">
            Envoyez nous ce formulaire, nous vous répondrons extrêmement
            rapidement!
          </p>

          <form
            onSubmit={handleContactSubmit}
            className="max-w-lg mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Nom *"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-orange text-teal placeholder-gray-400 text-base focus:outline-none focus:border-teal transition-colors"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-orange text-teal placeholder-gray-400 text-base focus:outline-none focus:border-teal transition-colors"
            />
            <input
              type="text"
              placeholder="Sujet"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-orange text-teal placeholder-gray-400 text-base focus:outline-none focus:border-teal transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-orange text-teal placeholder-gray-400 text-base focus:outline-none focus:border-teal transition-colors resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal text-white font-lulo text-sm px-8 py-3 tracking-wider hover:bg-teal-light transition-colors duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>

        {/* Instagram */}
        <div className="mt-16 text-center">
          <h3 className="font-lulo text-teal text-base md:text-lg mb-4">
            INSTAGRAM @lasun_goesdown
          </h3>
          <p className="text-teal/70 text-base md:text-lg font-light max-w-xl mx-auto">
            Hâte de vous retrouver pour la prochaine! Nous sommes en vrai très
            impatient de partager chaque édition avec vous. Restez bien connecté
            pour connaitre nos prochaines dates ;)
          </p>
        </div>
      </div>
    </section>
  );
}
