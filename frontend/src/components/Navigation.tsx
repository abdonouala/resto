
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-serif text-2xl font-bold text-primary">
            Le Jardin Gourmet
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('galerie')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection('reservations')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Réservations
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('galerie')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('reservations')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Réservations
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
