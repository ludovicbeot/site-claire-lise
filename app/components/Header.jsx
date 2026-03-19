"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          Claire-Lise Gaudelet
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          <Link href="/" className={isActive("/") ? "nav-link active" : "nav-link"}>
            présentation
          </Link>
          <Link
            href="/expertise"
            className={isActive("/expertise") ? "nav-link active" : "nav-link"}
          >
            expertise
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? "nav-link active" : "nav-link"}
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}