 "use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useApp } from "./AppProvider";

export default function ItemDetails({ id }: { id: string }) {
  const { items } = useApp();
  const item = items.find(i => i.id === id);

  if (!item) return <><Navbar /><main className="center-page"><div className="auth-box"><h1>Item not found</h1><Link href="/" className="primary-btn">Back Home</Link></div></main></>;

  return (
    <>
      <Navbar />
      <main className="details-page">
        <Link href="/" className="back-link">← Back to items</Link>
        <div className="details-grid">
          <div className="details-image">{item.image ? <img src={item.image} alt={item.title} /> : <span>{item.type === "Lost" ? "🔍" : "📦"}</span>}</div>
          <div className="details-content">
            <span className={`badge large ${item.type.toLowerCase()}`}>{item.type}</span>
            <h1>{item.title}</h1>
            <p className="details-description">{item.description}</p>
            <div className="details-info"><div><span>Category</span><strong>{item.category}</strong></div><div><span>Location</span><strong>📍 {item.location}</strong></div><div><span>Date</span><strong>{item.date}</strong></div><div><span>Status</span><strong>{item.status}</strong></div></div>
            <div className="owner-box"><div className="avatar">{item.ownerName.charAt(0).toUpperCase()}</div><div><span>Reported by</span><strong>{item.ownerName}</strong><small>{item.ownerEmail}</small></div></div>
            <a className="primary-btn" href={`mailto:${item.ownerEmail}?subject=Regarding ${item.title}`}>Contact User</a>
          </div>
        </div>
      </main>
    </>
  );
}