
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous vous attendons au Jardin Gourmet pour partager un moment d'exception
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-background rounded-lg shadow-lg p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      123 Rue de la Gastronomie<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">01 42 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@jardingourmet.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Horaires d'ouverture</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p><span className="font-medium">Mardi - Samedi:</span> 19h00 - 23h00</p>
                      <p><span className="font-medium">Dimanche:</span> 12h00 - 15h00, 19h00 - 22h00</p>
                      <p><span className="font-medium">Lundi:</span> Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/jardingourmet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com/jardingourmet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2129219502777!2d2.3406448155036957!3d48.86066897928676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1639123456789!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Le Jardin Gourmet"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
