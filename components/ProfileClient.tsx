 "use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { useApp } from "./AppProvider";

export default function ProfileClient() {
  const { user, items } = useApp();
  const [editing, setEditing] = useState(false);

  if (!user) return <><Navbar /><main className="center-page"><div className="auth-box"><h1>Please login</h1></div></main></>;

  const mine = items.filter(i => i.ownerId === user.id);

  return (
    <>
      <Navbar />
      <main className="profile-page">
        <div className="profile-header"><div className="big-avatar">{user.name.charAt(0).toUpperCase()}</div><div><p className="eyebrow">My Profile</p><h1>{user.name}</h1><p className="muted">{user.email}</p></div><button className="secondary-btn" onClick={() => setEditing(!editing)}>{editing ? "Done" : "Edit Profile"}</button></div>
        <div className="profile-grid">
          <div className="profile-card"><h3>Personal Information</h3><div className="profile-field"><span>Name</span><strong>{user.name}</strong></div><div className="profile-field"><span>Email</span><strong>{user.email}</strong></div><div className="profile-field"><span>College</span><strong>{user.college}</strong></div></div>
          <div className="profile-card"><h3>Activity</h3><div className="profile-field"><span>Total Reports</span><strong>{mine.length}</strong></div><div className="profile-field"><span>Resolved Items</span><strong>{mine.filter(i => i.status === "Resolved").length}</strong></div><div className="profile-field"><span>Active Items</span><strong>{mine.filter(i => i.status === "Active").length}</strong></div></div>
        </div>
        {editing && <div className="notice">Profile editing UI is ready for extension with server-side persistence.</div>}
      </main>
    </>
  );
}