import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <main className="page">
      <section id="presentation" className="section presentation-section">
        <div className="section-header reveal-soft">
          <h1 className="page-title">Présentation</h1>
        </div>

        <section className="presentation-section">
          <h2 className="presentation-subtitle">Parcours</h2>

          <p className="presentation-row">
            Avocate au Barreau de Paris depuis 2019, j'ai exercé au sein de différents cabinets d'affaires parisiens et service juridique d'une agence artistique de premier plan spécialisée dans la représentation d'auteur·ice·s (scénaristes et réalisateur·ice·s) et d'artistes-interprètes. La variété de mes expériences professionnelles m'a permis de développer, outre une réelle agilité et une grande capacité d'adaptation, des compétences approfondies en droit de la propriété intellectuelle — avec une expertise particulière en droit d'auteur dans le secteur du cinéma et de l'audiovisuel — et en droit de la presse, tant en conseil qu'en précontentieux et contentieux.
          </p>
        </section>

        <section className="presentation-section">
          <h2 className="presentation-subtitle">Approche et valeurs</h2>

          <p className="presentation-row">
            Mon intérêt pour la création artistique et notamment cinématographique m'a permis de développer une connaissance approfondie de ce secteur au-delà des enjeux juridiques qui lui sont propres, me permettant d'avoir une approche globale et inventive de chaque projet. Je souhaite également mettre au centre de mon activité mon engagement dans la lutte contre les violences sexistes et sexuelles et toute forme de discrimination, notamment en participant à la mise en place en interne de mesures de sensibilisation et de prévention mais plus généralement en conservant toujours cette grille de lecture dans la gestion de l'ensemble des sujets traités. Mon objectif est d'accompagner et sécuriser la fabrication de projets indépendants et exigeants tout en offrant à chaque personne qui participe au processus créatif les meilleures conditions de travail.
          </p>

          <p className="presentation-row presentation-cta">
            <em>N'hésitez pas à me contacter afin que nous puissions déterminer ensemble les modalités d'intervention correspondant le mieux à votre situation et vos projets.</em>
          </p>
        </section>
      </section>

      <section id="expertise" className="section expertise-section">
        <div className="section-header reveal-soft">
          <h1 className="page-title">Expertises</h1>
        </div>

        <div className="expertise-accordion reveal-soft">
          {expertises.map((expertise, index) => (
            <Accordion key={index} title={expertise.title} isOpenByDefault={index === 0}>
              <div className="expertise-content">
                {expertise.entries.map((entry, entryIndex) => (
                  <div className="expertise-entry" key={entryIndex}>
                    <p className="expertise-dash">{entry.dash}</p>
                    {entry.bullets && (
                      <ul className="expertise-sublist">
                        {entry.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-header reveal-soft">
          <h1 className="page-title">Contact</h1>
        </div>

        <div className="contact-card">
          <div className="contact-info">
            <h2>Claire-Lise Gaudelet — Avocate au barreau de Paris</h2>
            <div className="contact-details">
              <p><strong>tél.</strong> : <a href="tel:+33671178405">06 71 17 84 05</a></p>
              <p><strong>email</strong> : <a href="mailto:clairelise@clg-avocate.com">clairelise@clg-avocate.com</a></p>
              <p><strong>adresse</strong> : 5 rue d'Aboukir — 75002 Paris</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const expertises = [
  {
    title: "Droit du cinéma et de l'audiovisuel",
    entries: [
      {
        dash: "Rédaction et négociation de l'ensemble des contrats de développement, production et exploitation des œuvres cinématographiques et audiovisuelles (courts métrages, longs métrages, documentaires, unitaires télé, séries) :",
        bullets: [
          "contrats d'option, deal memo, long form ;",
          "contrats d'adaptation audiovisuelle, exploitation dérivée (remake, prequel, sequel, spin-off) ;",
          "contrats d'auteur·ice·s au forfait, scénaristes, réalisateur·ice·s, compositeur·ice·s ;",
          "contrats d'artiste-interprètes et de technicien·ne·s (metteur·se·s en scène, directeur·ice·s artistiques) ;",
          "contrats de production (déléguée, exécutive, coproduction, association à la production) ;",
          "contrats d'exploitation (mandats de distribution, achats et préachats, ventes internationales) ;",
        ],
      },
      { dash: "Audit, analyse de contrats et de la chaîne de droits ;" },
      {
        dash: "Consultations tout au long du développement, de la production et de l'exploitation des œuvres cinématographiques et audiovisuelles, analyse de risques en matière d'atteinte aux droits de la personnalité, droit à l'image, vie privée, clearance de droits ;",
      },
      {
        dash: "Conseil, assistance et représentation en précontentieux et contentieux concernant tout différend pouvant survenir en lien avec le développement, la production et l'exploitation des œuvres cinématographiques et audiovisuelles.",
      },
    ],
  },
  {
    title: "Mandataire d'artistes",
    entries: [
      {
        dash: "Accompagnement à chaque étape de la création, de la recherche d'un·e producteur·ice ou de la mise en place d'une autoproduction, relecture des étapes d'écriture, visionnage de rushes et bout à bout jusqu'à l'établissement de la version définitive ;",
      },
      {
        dash: "Rédaction et négociation de contrats de cession de droits, coproduction ou association à la production, accompagnement dans le cadre d'autoproductions sur l'ensemble des problématiques juridiques et recherches de financements ;",
      },
      {
        dash: "Défense et protection des droits et intérêts des artistes en précontentieux et contentieux.",
      },
    ],
  },
  {
    title: "Droit de la presse",
    entries: [
      {
        dash: "Relecture d'articles et d'ouvrages en amont afin d'assurer notamment le respect du droit à la vie privée, droit à l'image, respect de l'honneur, de la présomption d'innocence et conformité aux dispositions de la loi du 29 juillet 1881 en matière de délits de presse ;",
      },
      {
        dash: "Conseil, assistance et représentation, en précontentieux et contentieux en matière de diffamation, injure, provocation à la haine, à la discrimination ou à la violence, rédaction de droits de réponse, demande de retraits.",
      },
    ],
  },
  {
    title: "Lutte contre les violences sexistes et sexuelles et toute forme de discrimination",
    entries: [
      {
        dash: "Audit interne et accompagnement dans la mise en place de bonnes pratiques au sein des sociétés de production dès l'écriture et jusqu'à l'issue de la post-production :",
        bullets: [
          "l'établissement du DUERP,",
          "la mise en place d'une procédure interne de signalement,",
          "l'assistance des référent·e·s VHSS notamment dans l'organisation des actions de sensibilisation et de prévention des VHSS et le traitement des signalements internes ;",
        ],
      },
      {
        dash: "Conseil, assistance et représentation de personnes victimes de violences sexistes et sexuelles et de toute forme de discrimination.",
      },
    ],
  },
];
