import "./globals.css";
import Link from "next/link";
import Header from "../components/Header";
import { Darker_Grotesque } from "next/font/google";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-darker-grotesque",
});

export const metadata = {
  title: "Claire-Lise Gaudelet",
  description: "Avocate au Barreau de Paris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={darkerGrotesque.className}>
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