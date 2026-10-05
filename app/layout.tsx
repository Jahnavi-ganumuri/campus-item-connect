import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "../components/AppProvider";

export const metadata: Metadata = {
  title: "Lost & Found Hub",
  description: "A modern platform for reporting and recovering lost items."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}