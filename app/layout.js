import "./globals.css";
import Link from "next/link";
import Header from "../components/Header";

const title =
  "Claire-Lise Gaudelet – Avocate en droit du cinéma et de la presse";
const description =
  "Claire-Lise Gaudelet, avocate au Barreau de Paris : droit d’auteur, contrats de production cinéma et audiovisuel, droit de la presse. Conseil et contentieux.";

export const metadata = {
  metadataBase: new URL("https://clg-avocate.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Claire-Lise Gaudelet",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-portrait.jpg",
        width: 1200,
        height: 700,
        alt: "Portrait de Claire-Lise Gaudelet",
      },
    ],
  },
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
            <Link href="/mentions-legales">Mentions légales</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}