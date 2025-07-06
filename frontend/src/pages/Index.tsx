import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ReservationSection from '../components/ReservationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <Link to="/admin" className="bg-primary text-white px-4 py-2 rounded shadow-lg hover:bg-primary/80 transition">Admin</Link>
      </div>
    </div>
  );
};

export default Index;
