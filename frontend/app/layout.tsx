import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "purfect adoptions",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/admin", label: "Admin Dashboard" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = cookies().has("auth-token");

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-orange-50 flex flex-col relative">
          {children}
        </div>
      </body>
    </html>
  );
}
