
import React from 'react';

const HeroSection = () => {
  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=2000&q=80"
          alt="Restaurant Le Jardin Gourmet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          Le Jardin Gourmet
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Une expérience culinaire inoubliable
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Découvrez notre cuisine raffinée dans un cadre élégant et chaleureux
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <button
            onClick={scrollToReservations}
            className="btn-primary inline-block"
          >
            Réserver une table
          </button>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary inline-block"
          >
            Découvrir le menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
