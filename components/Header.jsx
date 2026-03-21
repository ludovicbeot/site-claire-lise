"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="site-header">
      <div className="site-header-top">
        <div className="brand-area">
          <Link href="/" className="brand-logo" aria-label="Retour à l’accueil">
            <Image
              src="/images/logo-clg.png"
              alt="Logo Claire-Lise Gaudelet"
              width={42}
              height={42}
              priority
            />
          </Link>

          <div className="brand-block">
            <Link href="/" className="brand">
              Claire-Lise Gaudelet
            </Link>
            <p className="brand-subtitle">Avocate au Barreau de Paris</p>
          </div>
        </div>

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