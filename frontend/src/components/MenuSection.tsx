import React, { useState, useEffect } from 'react';

const MenuSection = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const [activeCategory, setActiveCategory] = useState('plats');
  const [menuData, setMenuData] = useState({
    plats: [],
    entrees: [],
    desserts: [],
    boissons: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/menu`)
      .then(res => res.json())
      .then(data => {
        // Group menu items by category
        const grouped = { plats: [], entrees: [], desserts: [], boissons: [] };
        data.forEach(item => {
          if (grouped[item.category]) grouped[item.category].push(item);
        });
        setMenuData(grouped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    { id: 'plats', name: 'Plats' },
    { id: 'entrees', name: 'Entrées' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'boissons', name: 'Boissons' }
  ];

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de plats raffinés, préparés avec des ingrédients frais et de saison
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background text-foreground hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {loading ? (
          <div className="text-center">Chargement...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
              <div
                key={item._id || index}
                className="bg-background rounded-lg p-6 shadow-md card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="mb-4 w-full h-40 flex items-center justify-center overflow-hidden rounded">
                  <img
                    src={item.image || '/public/placeholder.svg'}
                    alt={item.name}
                    className="object-cover w-full h-full"
                    onError={e => { e.currentTarget.src = '/public/placeholder.svg'; }}
                  />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-primary font-bold text-lg ml-4 flex-shrink-0">
                    {item.price} <span className="text-sm">DZD</span>
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
