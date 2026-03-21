import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import Header from "../components/Header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Claire-Lise Gaudelet",
  description: "Avocate au Barreau de Paris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={cormorant.variable}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jkf6bti.css" />
      </head>
      <body>
        <Header />
        <main className="shell">{children}</main>
        <footer className="site-footer shell">
          <div className="footer-inner">
            <p>Claire-Lise Gaudelet — Avocate au Barreau de Paris</p>
            <Link href="/mentions-legales">mentions légales</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}