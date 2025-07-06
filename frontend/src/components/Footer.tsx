
import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Le Jardin Gourmet</h3>
            <p className="text-background/80 mb-4">
              Une expérience culinaire inoubliable dans un cadre élégant et raffiné.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/jardingourmet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com/jardingourmet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Rue de la Gastronomie, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>01 42 34 56 78</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@jardingourmet.fr</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Horaires</h4>
            <div className="space-y-2 text-background/80">
              <p><span className="font-medium">Mar - Sam:</span> 19h00 - 23h00</p>
              <p><span className="font-medium">Dimanche:</span> 12h00 - 15h00, 19h00 - 22h00</p>
              <p><span className="font-medium">Lundi:</span> Fermé</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Le Jardin Gourmet. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="text-background/80 hover:text-background transition-colors duration-300"
          >
            Retour en haut
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
