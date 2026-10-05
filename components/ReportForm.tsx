 "use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { useApp } from "./AppProvider";

export default function ReportForm() {
  const { user, addItem } = useApp();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"Lost" | "Found">("Lost");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  if (!user) {
    return <><Navbar /><main className="center-page"><div className="auth-box"><h1>Login required</h1><p className="muted">Please login before reporting an item.</p><button className="primary-btn" onClick={() => router.push("/login")}>Go to Login</button></div></main></>;
  }

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setMessage("Please choose an image smaller than 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    addItem({ title, type, category, description, location, date, image });
    router.push("/dashboard");
  };

  return (
    <>
      <Navbar />
      <main className="form-page">
        <div className="page-heading"><p className="eyebrow">Create a report</p><h1>Report a {type.toLowerCase()} item</h1><p className="muted">Add clear information so others can help.</p></div>
        <form className="report-form" onSubmit={submit}>
          <div className="type-toggle"><button type="button" className={type === "Lost" ? "selected" : ""} onClick={() => setType("Lost")}>🔍 I Lost It</button><button type="button" className={type === "Found" ? "selected found" : ""} onClick={() => setType("Found")}>📦 I Found It</button></div>
          <label>Item Name<input required value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Black backpack" /></label>
          <div className="two-col">
            <label>Category<select value={category} onChange={e => setCategory(e.target.value)}><option>Electronics</option><option>Bags</option><option>Accessories</option><option>Books</option><option>Documents</option><option>Other</option></select></label>
            <label>Date<input required type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
          </div>
          <label>Location<input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Where was it lost/found?" /></label>
          <label>Description<textarea required rows={5} value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the item, color, identifying marks, etc." /></label>
          <label>Photo <span className="required-note">recommended</span><input type="file" accept="image/*" onChange={imageChange} /></label>
          {image && <img className="preview" src={image} alt="Preview" />}
          {message && <div className="error">{message}</div>}
          <button className="primary-btn full" type="submit">Publish Report</button>
        </form>
      </main>
    </>
  );
}