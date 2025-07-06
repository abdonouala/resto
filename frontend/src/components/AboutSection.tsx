
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              À propos du Jardin Gourmet
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Niché au cœur de la ville, Le Jardin Gourmet vous invite à découvrir une cuisine 
              raffinée dans un cadre élégant et chaleureux. Notre chef et son équipe passionnée 
              vous proposent une expérience culinaire unique, alliant tradition et innovation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nous sélectionnons avec soin nos ingrédients auprès de producteurs locaux pour 
              vous offrir des saveurs authentiques et de saison. Chaque plat est une invitation 
              au voyage gustatif, préparé avec amour et créativité.
            </p>
            <div className="bg-secondary/50 rounded-lg p-6 mb-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Notre Philosophie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "La cuisine est un art qui nourrit l'âme autant que le corps. Nous créons des moments 
                d'exception où chaque saveur raconte une histoire, chaque plat éveille les sens."
              </p>
              <p className="text-primary font-medium mt-3">— Chef Antoine Dubois</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-muted-foreground">Note moyenne</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
                alt="Ambiance du restaurant"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <p className="font-serif text-lg font-semibold">Depuis 2008</p>
                <p className="text-sm opacity-90">Excellence culinaire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
