 "use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useApp } from "./AppProvider";

export default function Navbar() {
  const { user, logout } = useApp();
  const router = useRouter();
  const pathname = usePathname();

  const signOut = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="navbar">
      <Link href="/" className="brand"><span>LF</span> Lost & Found Hub</Link>
      <nav>
        <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
        {user && <Link className={pathname === "/dashboard" ? "active" : ""} href="/dashboard">Dashboard</Link>}
        {user && <Link className={pathname === "/report" ? "active" : ""} href="/report">Report Item</Link>}
        {user && <Link className={pathname === "/profile" ? "active" : ""} href="/profile">Profile</Link>}
        {!user ? <Link className="nav-button" href="/login">Login</Link> : <button className="nav-button" onClick={signOut}>Logout</button>}
      </nav>
    </header>
  );
}