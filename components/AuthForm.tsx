 "use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { useApp } from "./AppProvider";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";
  const { login, signup } = useApp();
  const router = useRouter();
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (isSignup && password !== confirm) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must contain at least 6 characters.");
    const result = isSignup ? signup(name, email, password, college) : login(email, password);
    if (!result.ok) return setError(result.message);
    router.push("/dashboard");
  };

  return (
    <>
      <Navbar />
      <main className="auth-page">
        <div className="auth-box">
          <p className="eyebrow">{isSignup ? "Create account" : "Welcome back"}</p>
          <h1>{isSignup ? "Join Lost & Found Hub" : "Login to your account"}</h1>
          <p className="muted">{isSignup ? "Start helping your campus community." : "Manage your reports and find missing items."}</p>
          {error && <div className="error">{error}</div>}
          <form onSubmit={submit}>
            {isSignup && <>
              <label>Full Name<input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" /></label>
              <label>College<input required value={college} onChange={e => setCollege(e.target.value)} placeholder="College / University" /></label>
            </>}
            <label>Email<input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" /></label>
            <label>Password<input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" /></label>
            {isSignup && <label>Confirm Password<input required type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="••••••••" /></label>}
            <button className="primary-btn full" type="submit">{isSignup ? "Create Account" : "Login"}</button>
          </form>
          <p className="switch">{isSignup ? "Already have an account?" : "Don't have an account?"} <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Login" : "Sign up"}</Link></p>
        </div>
      </main>
    </>
  );
}