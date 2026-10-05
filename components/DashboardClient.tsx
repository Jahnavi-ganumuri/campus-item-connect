 "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { useApp } from "./AppProvider";
import ItemCard from "./ItemCard";

export default function DashboardClient() {
  const { user, items, deleteItem, resolveItem, loading } = useApp();
  const router = useRouter();

  if (loading) return <div className="loading">Loading...</div>;
  if (!user) {
    router.push("/login");
    return null;
  }

  const mine = items.filter(i => i.ownerId === user.id);
  const active = mine.filter(i => i.status === "Active").length;
  const resolved = mine.filter(i => i.status === "Resolved").length;

  return (
    <>
      <Navbar />
      <main className="dashboard">
        <div className="welcome-row"><div><p className="eyebrow">Dashboard</p><h1>Hello, {user.name.split(" ")[0]} 👋</h1><p className="muted">Manage your lost and found reports.</p></div><Link className="primary-btn" href="/report">+ Report Item</Link></div>
        <div className="dashboard-stats"><div><strong>{mine.length}</strong><span>My Reports</span></div><div><strong>{active}</strong><span>Active</span></div><div><strong>{resolved}</strong><span>Resolved</span></div></div>
        <section className="dashboard-list"><div className="section-heading"><div><p className="eyebrow">Your activity</p><h2>My Reports</h2></div></div>
          {mine.length === 0 ? <div className="empty"><h3>No reports yet</h3><p>Create your first lost or found report.</p><Link href="/report" className="primary-btn">Create Report</Link></div> :
          <div className="item-grid">{mine.map(item => <div key={item.id} className="manage-card"><ItemCard item={item} /><div className="manage-actions"><button onClick={() => resolveItem(item.id)} disabled={item.status === "Resolved"}>{item.status === "Resolved" ? "Resolved ✓" : "Mark Resolved"}</button><button className="danger" onClick={() => { if (confirm("Delete this report?")) deleteItem(item.id); }}>Delete</button></div></div>)}</div>}
        </section>
      </main>
    </>
  );
}