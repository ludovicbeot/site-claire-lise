import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond, Allura } from "next/font/google";
import Header from "../components/Header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata = {
  title: "Claire-Lise Gaudelet",
  description: "Avocate au Barreau de Paris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${allura.variable}`}>
      <body>
        <div className="site-shell">
          <Header />

          {children}

          <footer className="site-footer">
            <div className="footer-inner">
              <p>Claire-Lise Gaudelet — Avocate au Barreau de Paris</p>
              <Link href="/mentions-legales">mentions légales</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}