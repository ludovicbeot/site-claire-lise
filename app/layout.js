import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond, Caveat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-script",
});

export const metadata = {
  title: "Claire-Lise Gaudelet",
  description: "Avocate au Barreau de Paris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${caveat.variable}`}>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-top">
              <Link href="/" className="brand">
                Claire-Lise Gaudelet
              </Link>
              <p className="brand-subtitle">Avocate au Barreau de Paris</p>
            </div>

            <nav className="main-nav">
              <Link href="/">présentation</Link>
              <Link href="/expertise">expertise</Link>
              <Link href="/contact">contact</Link>
            </nav>
          </header>

          {children}

          <footer className="site-footer">
            <div className="footer-inner">
              <p>Claire-Lise Gaudelet — Avocate au Barreau de Paris</p>
              <Link href="/mention-legales">mentions légales</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}