 "use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Item, User } from "./types";
import { sampleItems } from "./data";

type ContextValue = {
  user: User | null;
  items: Item[];
  loading: boolean;
  login: (email: string, password: string) => { ok: boolean; message: string };
  signup: (name: string, email: string, password: string, college: string) => { ok: boolean; message: string };
  logout: () => void;
  addItem: (item: Omit<Item, "id" | "createdAt" | "ownerId" | "ownerName" | "ownerEmail" | "status">) => void;
  updateItem: (id: string, changes: Partial<Item>) => void;
  deleteItem: (id: string) => void;
  resolveItem: (id: string) => void;
};

const AppContext = createContext<ContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("lf_user");
    const storedItems = localStorage.getItem("lf_items");
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedItems) setItems(JSON.parse(storedItems));
    else {
      setItems(sampleItems);
      localStorage.setItem("lf_items", JSON.stringify(sampleItems));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) localStorage.setItem("lf_items", JSON.stringify(items));
  }, [items, loading]);

  const login = (email: string, password: string) => {
    const users: Array<User & { password: string }> = JSON.parse(localStorage.getItem("lf_users") || "[]");
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return { ok: false, message: "Invalid email or password." };
    const cleanUser: User = { id: found.id, name: found.name, email: found.email, college: found.college };
    setUser(cleanUser);
    localStorage.setItem("lf_user", JSON.stringify(cleanUser));
    return { ok: true, message: "Login successful." };
  };

  const signup = (name: string, email: string, password: string, college: string) => {
    const users: Array<User & { password: string }> = JSON.parse(localStorage.getItem("lf_users") || "[]");
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, message: "An account with this email already exists." };
    }
    const newUser = { id: crypto.randomUUID(), name, email, password, college };
    users.push(newUser);
    localStorage.setItem("lf_users", JSON.stringify(users));
    const cleanUser: User = { id: newUser.id, name, email, college };
    setUser(cleanUser);
    localStorage.setItem("lf_user", JSON.stringify(cleanUser));
    return { ok: true, message: "Account created." };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("lf_user");
  };

  const addItem = (data: Omit<Item, "id" | "createdAt" | "ownerId" | "ownerName" | "ownerEmail" | "status">) => {
    if (!user) return;
    const item: Item = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      ownerId: user.id,
      ownerName: user.name,
      ownerEmail: user.email,
      status: "Active"
    };
    setItems(prev => [item, ...prev]);
  };

  const updateItem = (id: string, changes: Partial<Item>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...changes } : item));
  };

  const deleteItem = (id: string) => setItems(prev => prev.filter(item => item.id !== id));
  const resolveItem = (id: string) => updateItem(id, { status: "Resolved" });

  return (
    <AppContext.Provider value={{ user, items, loading, login, signup, logout, addItem, updateItem, deleteItem, resolveItem }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}