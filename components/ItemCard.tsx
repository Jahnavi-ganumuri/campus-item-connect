import Link from "next/link";
import { Item } from "./types";

export default function ItemCard({ item }: { item: Item }) {
  return (
    <article className="item-card">
      <div className="item-image">
        {item.image ? <img src={item.image} alt={item.title} /> : <span>{item.type === "Lost" ? "🔍" : "📦"}</span>}
        <span className={`badge ${item.type.toLowerCase()}`}>{item.type}</span>
      </div>
      <div className="item-content">
        <div className="item-top"><span>{item.category}</span><span className={item.status === "Resolved" ? "resolved" : "active-dot"}>{item.status}</span></div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="item-meta">📍 {item.location} · 📅 {item.date}</div>
        <Link href={`/items/${item.id}`} className="card-link">View Details →</Link>
      </div>
    </article>
  );
}