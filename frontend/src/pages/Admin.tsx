import React, { useEffect, useState } from 'react';

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const AdminPage = () => {
  // Reservations
  const [reservations, setReservations] = useState([]);
  // Menu
  const [menuForm, setMenuForm] = useState({ name: '', description: '', price: '', category: 'entrees', imageUrl: '' });
  const [menu, setMenu] = useState([]);
  // Gallery
  const [galleryForm, setGalleryForm] = useState({ url: '', alt: '' });
  const [gallery, setGallery] = useState([]);

  // Fetch reservations
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/reservations`).then(res => res.json()).then(setReservations);
    fetch(`${BACKEND_URL}/api/gallery`).then(res => res.json()).then(setGallery);
  }, []);

  // Fetch menu
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/menu`).then(res => res.json()).then(setMenu);
  }, []);

  // Add menu item
  const handleMenuSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BACKEND_URL}/api/menu`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menuForm)
    });
    alert('Menu ajouté !');
    setMenuForm({ name: '', description: '', price: '', category: 'entrees', imageUrl: '' });
  };

  // Add gallery image
  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BACKEND_URL}/api/gallery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(galleryForm)
    });
    alert('Image ajoutée !');
    setGalleryForm({ url: '', alt: '' });
    fetch(`${BACKEND_URL}/api/gallery`).then(res => res.json()).then(setGallery);
  };

  // Delete menu item
  const handleDeleteMenu = async (id: string) => {
    if (!window.confirm('Supprimer ce plat ?')) return;
    await fetch(`${BACKEND_URL}/api/menu/${id}`, { method: 'DELETE' });
    setMenu(menu.filter((item: any) => item._id !== id));
  };

  // Delete gallery image
  const handleDeleteGallery = async (id: string) => {
    if (!window.confirm('Supprimer cette image ?')) return;
    await fetch(`${BACKEND_URL}/api/gallery/${id}`, { method: 'DELETE' });
    setGallery(gallery.filter((img: any) => img._id !== id));
  };

  // Edit menu item
  const [editingMenuId, setEditingMenuId] = useState<string | null>(null);
  const [editMenuForm, setEditMenuForm] = useState({ name: '', description: '', price: '', category: 'entrees', image: '' });

  const startEditMenu = (item: any) => {
    setEditingMenuId(item._id);
    setEditMenuForm({
      name: item.name || '',
      description: item.description || '',
      price: item.price || '',
      category: item.category || 'entrees',
      image: item.image || ''
    });
  };

  const handleEditMenuSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMenuId) return;
    const res = await fetch(`${BACKEND_URL}/api/menu/${editingMenuId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editMenuForm)
    });
    if (res.ok) {
      const updated = await res.json();
      setMenu(menu.map((item: any) => item._id === editingMenuId ? updated : item));
      setEditingMenuId(null);
    } else {
      alert("Erreur lors de la modification");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      {/* Reservations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Réservations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Nom</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Téléphone</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Heure</th>
                <th className="p-2 border">Convives</th>
                <th className="p-2 border">Message</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r, i) => (
                <tr key={r._id || i}>
                  <td className="p-2 border">{r.name}</td>
                  <td className="p-2 border">{r.email}</td>
                  <td className="p-2 border">{r.phone}</td>
                  <td className="p-2 border">{r.date}</td>
                  <td className="p-2 border">{r.time}</td>
                  <td className="p-2 border">{r.guests}</td>
                  <td className="p-2 border">{r.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Menu Item */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ajouter un plat au menu</h2>
        <form onSubmit={handleMenuSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" required placeholder="Nom" value={menuForm.name} onChange={e => setMenuForm(f => ({ ...f, name: e.target.value }))} />
          <input className="border p-2 rounded" required placeholder="Prix" value={menuForm.price} onChange={e => setMenuForm(f => ({ ...f, price: e.target.value }))} />
          <input className="border p-2 rounded" placeholder="Image URL" value={menuForm.imageUrl} onChange={e => setMenuForm(f => ({ ...f, imageUrl: e.target.value }))} />
          <select className="border p-2 rounded" value={menuForm.category} onChange={e => setMenuForm(f => ({ ...f, category: e.target.value }))}>
        <option value="entrees">Entrées</option>
        <option value="plats">Plats</option>
        <option value="desserts">Desserts</option>
        <option value="boissons">Boissons</option>
          </select>
          <textarea className="border p-2 rounded md:col-span-2" required placeholder="Description" value={menuForm.description} onChange={e => setMenuForm(f => ({ ...f, description: e.target.value }))} />
          <input className="border p-2 rounded md:col-span-2" placeholder="Image URL (optionnel)" value={menuForm.imageUrl} onChange={e => setMenuForm(f => ({ ...f, imageUrl: e.target.value }))} />
          <button className="btn-primary md:col-span-2" type="submit">Ajouter</button>
        </form>
      </section>

      {/* Add Gallery Image */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ajouter une image à la galerie</h2>
        <form onSubmit={handleGallerySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" required placeholder="Image URL" value={galleryForm.url} onChange={e => setGalleryForm(f => ({ ...f, url: e.target.value }))} />
          <input className="border p-2 rounded" placeholder="Description" value={galleryForm.alt} onChange={e => setGalleryForm(f => ({ ...f, alt: e.target.value }))} />
          <button className="btn-primary md:col-span-2" type="submit">Ajouter</button>
        </form>
      </section>

      {/* Menu List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Menu actuel</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Nom</th>
                <th className="p-2 border">Catégorie</th>
                <th className="p-2 border">Prix</th>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item: any, i) => (
                <tr key={item._id || i}>
                  <td className="p-2 border">{editingMenuId === item._id ? (
                    <input className="border p-1 rounded w-full" value={editMenuForm.name} onChange={e => setEditMenuForm(f => ({ ...f, name: e.target.value }))} />
                  ) : item.name}</td>
                  <td className="p-2 border">{editingMenuId === item._id ? (
                    <select className="border p-1 rounded w-full" value={editMenuForm.category} onChange={e => setEditMenuForm(f => ({ ...f, category: e.target.value }))}>
                      <option value="entrees">Entrées</option>
                      <option value="plats">Plats</option>
                      <option value="desserts">Desserts</option>
                      <option value="boissons">Boissons</option>
                    </select>
                  ) : item.category}</td>
                  <td className="p-2 border">{editingMenuId === item._id ? (
                    <input className="border p-1 rounded w-full" value={editMenuForm.price} onChange={e => setEditMenuForm(f => ({ ...f, price: e.target.value }))} />
                  ) : item.price}</td>
                  <td className="p-2 border">{editingMenuId === item._id ? (
                    <input className="border p-1 rounded w-full" value={editMenuForm.image} onChange={e => setEditMenuForm(f => ({ ...f, image: e.target.value }))} />
                  ) : (item.image && <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded" />)}</td>
                  <td className="p-2 border">
                    {editingMenuId === item._id ? (
                      <>
                        <button onClick={handleEditMenuSubmit} className="text-green-600 hover:underline mr-2">Enregistrer</button>
                        <button onClick={() => setEditingMenuId(null)} className="text-gray-600 hover:underline">Annuler</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEditMenu(item)} className="text-blue-600 hover:underline mr-2">Modifier</button>
                        <button onClick={() => handleDeleteMenu(item._id)} className="text-red-600 hover:underline">Supprimer</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gallery List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Galerie actuelle</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {gallery.map((img: any, i) => (
            <div key={img._id || i} className="border rounded overflow-hidden relative">
              <img src={img.url} alt={img.alt} className="w-full h-32 object-cover" />
              <div className="p-2 text-sm text-center">{img.alt}</div>
              <button onClick={() => handleDeleteGallery(img._id)} className="absolute top-2 right-2 bg-red-600 text-white rounded px-2 py-1 text-xs">Supprimer</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
