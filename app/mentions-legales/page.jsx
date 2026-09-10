export default function MentionsLegales() {
  return (
    <main className="page">
      <section className="page-intro">
        <h1 className="page-title">Mentions légales</h1>
      </section>

      <section className="legal-content">
        <div className="legal-section">
          <h2>Directrice de la publication</h2>
          <p>Claire-Lise Gaudelet — Avocate au Barreau de Paris</p>
        </div>

        <div className="legal-section">
          <h2>Coordonnées</h2>
          <p>Téléphone : <a href="tel:+33671178405">06 71 17 84 05</a></p>
          <p>Email : <a href="mailto:clairelise@clg-avocate.com">clairelise@clg-avocate.com</a></p>
          <p>Adresse : 5 rue d'Aboukir — 75002 Paris</p>
        </div>

        <div className="legal-section">
          <h2>Informations légales</h2>
          <p>SIRET : <span className="legal-blank" /></p>
          <p>TVA intracommunautaire : <span className="legal-blank" /></p>
        </div>

        <div className="legal-section">
          <h2>Hébergeur</h2>
          <p>Vercel Inc.</p>
          <p>440 N Barranca Ave #4133 — Covina, CA 91723, États-Unis</p>
        </div>
      </section>
    </main>
  );
}