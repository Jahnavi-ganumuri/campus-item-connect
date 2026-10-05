 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { useApp } from "./AppProvider";
import ItemCard from "./ItemCard";

export default function HomeClient() {
  const { items, user } = useApp();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Electronics", "Bags", "Accessories", "Books", "Documents", "Other"];

  const filtered = useMemo(() => items.filter(item => {
    const q = search.toLowerCase();
    return (
      (item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.location.toLowerCase().includes(q)) &&
      (type === "All" || item.type === type) &&
      (category === "All" || item.category === category)
    );
  }), [items, search, type, category]);

  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Campus community platform</p>
            <h1>Find what you lost.<br /><span>Return what you found.</span></h1>
            <p className="hero-text">A simple and reliable place to report, search and recover lost items around your campus.</p>
            <div className="hero-actions">
              {user ? <Link className="primary-btn" href="/report">Report an Item</Link> : <Link className="primary-btn" href="/signup">Get Started</Link>}
              <a className="secondary-btn" href="#items">Browse Items</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-icon">🔎</div>
            <h3>Looking for something?</h3>
            <p>Search reported items by name, location or category.</p>
            <div className="mini-stat"><strong>{items.length}</strong><span>items listed</span></div>
          </div>
        </section>

        <section className="stats">
          <div><strong>{items.length}</strong><span>Total Reports</span></div>
          <div><strong>{items.filter(i => i.status === "Active").length}</strong><span>Active Reports</span></div>
          <div><strong>{items.filter(i => i.status === "Resolved").length}</strong><span>Resolved</span></div>
        </section>

        <section id="items" className="items-section">
          <div className="section-heading">
            <div><p className="eyebrow">Explore</p><h2>Recent Reports</h2></div>
            <Link href="/report" className="text-link">+ Report Item</Link>
          </div>
          <div className="filters">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items, locations..." />
            <select value={type} onChange={e => setType(e.target.value)}>
              <option>All</option><option>Lost</option><option>Found</option>
            </select>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="item-grid">
            {filtered.length ? filtered.map(item => <ItemCard key={item.id} item={item} />) : <div className="empty">No matching items found.</div>}
          </div>
        </section>
      </main>
      <footer>Lost & Found Hub · Built with Next.js + React</footer>
    </>
  );
}