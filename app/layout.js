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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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