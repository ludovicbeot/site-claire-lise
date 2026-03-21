import "./globals.css";

export default function Home() {
  return (
    <main className="page">
      <section className="presentation-block">
        <h1 className="page-title">Présentation</h1>

        <div className="presentation-inner">
          <p>
            Avocate au Barreau de Paris, Claire-Lise Gaudelet accompagne
            entreprises, institutions et particuliers dans des domaines variés
            du droit, avec une approche à la fois rigoureuse et stratégique.
          </p>

          <p>
            Elle intervient principalement en droit pénal, droit des affaires
            et droit civil, avec une attention particulière portée à la défense
            des intérêts de ses clients, tant en conseil qu’en contentieux.
          </p>

          <p>
            Son expertise s’appuie sur une solide formation juridique et une
            pratique exigeante, lui permettant d’appréhender des situations
            complexes et de proposer des solutions adaptées.
          </p>

          <p>
            Elle privilégie une relation de confiance, fondée sur l’écoute,
            la transparence et la réactivité.
          </p>

          <p className="presentation-closing">
            Disponible et engagée, elle accompagne ses clients à chaque étape,
            avec exigence et détermination.
          </p>
        </div>
      </section>

      <aside className="contact-block">
        <div className="contact-inner">
          <div className="contact-section">
            <h2>Contact</h2>
            <p>contact@clg-avocate.com</p>
          </div>

          <div className="contact-section">
            <h2>Domaines</h2>
            <ul>
              <li>Droit pénal</li>
              <li>Droit des affaires</li>
              <li>Droit civil</li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
}