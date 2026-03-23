import "./globals.css";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "Claire-Lise Gaudelet",
  description: "Avocate au Barreau de Paris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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