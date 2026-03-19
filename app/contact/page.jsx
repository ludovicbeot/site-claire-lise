export default function Contact() {
  return (
    <main className="page">
      <section className="page-intro">
        <h1 className="page-title">Contact</h1>
      </section>

      <section className="contact-card">
        <div className="contact-row">
          <span className="contact-label">tél.</span>
          <a href="tel:+33671178405">06 71 17 84 05</a>
        </div>

        <div className="contact-row">
          <span className="contact-label">email</span>
          <a href="mailto:clairelise@clg-avocate.com">
            clairelise@clg-avocate.com
          </a>
        </div>

        <div className="contact-row">
          <span className="contact-label">adresse postale</span>
          <p>5 rue d’Aboukir – 75002 Paris</p>
        </div>

        <div className="contact-row">
          <span className="contact-label">toque</span>
          <p>xx</p>
        </div>
      </section>
    </main>
  );
}