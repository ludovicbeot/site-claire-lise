export default function Home() {
  return (
    <main className="page">
      <section id="presentation" className="section presentation-section">
        <div className="page-intro page-intro--presentation">
          <div className="page-intro-line" />
          <h1 className="page-title">Présentation</h1>
        </div>

        <div className="presentation-wide reveal-soft">
          <div className="presentation-frame">
            <div className="presentation-main">
              <section className="presentation-section">
                <h2 className="presentation-subtitle">Parcours</h2>

                <p className="presentation-row">
                  Avocate au Barreau de Paris depuis 2019, j’ai exercé durant près de cinq années au sein de différents cabinets d’affaires parisiens. J’ai ensuite intégré le service juridique d’une agence artistique de premier plan. Durant deux ans, j’ai accompagné et conseillé quotidiennement des auteur·ice·s (scénaristes, réalisateur·ice·s) et artistes-interprètes dans la rédaction et la négociation des contrats relatifs à la création d’œuvres cinématographiques et audiovisuelles (courts métrages, longs métrages, documentaires, unitaires télé, séries).
                </p>

                <p className="presentation-row">
                  La variété de mes expériences professionnelles m’a permis de développer, outre une réelle agilité et une grande capacité d’adaptation, des compétences approfondies en droit de la propriété intellectuelle – avec une expertise particulière en droit d’auteur dans le secteur du cinéma et de l’audiovisuel – et en droit de la presse, tant en conseil qu’en précontentieux et contentieux.
                </p>

                <p className="presentation-row">
                  Forte d’une riche activité contentieuse, je suis en mesure de vous accompagner pleinement dans la gestion de tout litige, de la tentative de conciliation à la saisine et la représentation en justice devant les juridictions civiles, commerciales et pénales.
                </p>
              </section>

              <section className="presentation-section">
                <h2 className="presentation-subtitle">Approche et valeurs</h2>

                <p className="presentation-row">
                  Mon intérêt pour la création artistique et notamment cinématographique m’a par ailleurs permis de développer une connaissance approfondie de ce secteur, au-delà des enjeux juridiques qui lui sont propre, me permettant d’avoir une approche globale et inventive de chaque projet.
                </p>

                <p className="presentation-row">
                  Je souhaite également mettre au centre de mon activité professionnelle mon engagement dans la lutte contre les violences sexistes et sexuelles et toute forme de discrimination, notamment en participant à la mise en place d’actions de sensibilisation et de prévention mais plus généralement en conservant toujours cette grille de lecture dans la gestion de l’ensemble des sujets traités.
                </p>

                <p className="presentation-row">
                  Mon objectif est d’accompagner et sécuriser la fabrication de projets indépendants et exigeants tout en offrant à chaque personne qui participe au processus créatif les meilleures conditions de travail.
                </p>
              </section>

              <p className="presentation-row presentation-row--closing">
                N’hésitez pas à me contacter afin que nous puissions déterminer ensemble les modalités d’intervention correspondant le mieux à votre situation et vos projets.
              </p>
            </div>
          </div>

          <aside className="presentation-side">
            <div className="presentation-side-block reveal-delay-1">
              <p className="presentation-side-label">Contact</p>
              <p>06 71 17 84 05</p>
              <p>clairelise@clg-avocate.com</p>
              <p>5 rue d’Aboukir – 75002 Paris</p>
            </div>

            <div className="presentation-side-block reveal-delay-2">
              <p className="presentation-side-label">Domaines</p>
              <ul>
                <li>Droit du cinéma et de l’audiovisuel</li>
                <li>Mandataire d’artistes</li>
                <li>Droit de la presse</li>
                <li>Lutte contre les VHSS et discriminations</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="expertise" className="section expertise-section">
        <div className="page-intro">
          <h1 className="page-title">Expertises</h1>
        </div>

        <div className="expertise-grid-2x2 reveal-soft">
          {sections.map((section) => (
            <article className="expertise-card expertise-card--equal" key={section.title}>
              <div className="expertise-card-top">
                <h2>{section.title}</h2>
              </div>

              <div className="expertise-entries">
                {section.entries.map((entry, index) => (
                  <div className="expertise-entry" key={index}>
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
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="page-intro">
          <h1 className="page-title">Contact</h1>
        </div>

        <div className="contact-card">
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
        </div>
      </section>
    </main>
  );
}

const sections = [
  {
    title: "Droit du cinéma et de l’audiovisuel",
    entries: [
      {
        dash: "Rédaction et négociation de l’ensemble des contrats de développement, production et exploitation des œuvres cinématographiques et audiovisuelles (courts métrages, longs métrages, documentaires, unitaires télé, séries) :",
        bullets: [
          "contrats d’option, deal memo, long form ;",
          "contrats d’adaptation audiovisuelle, exploitation dérivée (remake, prequel, sequel, spin-off) ;",
          "contrats d’auteur·ice·s au forfait, scénaristes, réalisateur·ice·s, compositeur·ice·s ;",
          "contrats d’artiste-interprètes et de technien·ne·s (metteur·se·s en scène, directeur·ice·s artistiques) ;",
          "contrats de production (déléguée, exécutive, coproduction, association à la production) ;",
          "contrats d’exploitation (mandats de distribution, achats et préachats, ventes internationales) ;",
        ],
      },
      {
        dash: "Audit, analyse de contrats et de la chaîne de droits ;",
      },
      {
        dash: "Consultations tout au long du développement, de la production et de l’exploitation des œuvres cinématographiques et audiovisuelles, analyse de risques en matière d’atteinte aux droits de la personnalité, droit à l’image, vie privée, clearance de droits ;",
      },
      {
        dash: "Conseil, assistance et représentation en précontentieux et contentieux concernant tout différend pouvant survenir en lien avec le développement, la production et l’exploitation des œuvres cinématographiques et audiovisuelles.",
      },
    ],
  },
  {
    title: "Mandataire d’artistes",
    entries: [
      {
        dash: "Accompagnement à chaque étape de la création, de la recherche d’un·e producteur·ice ou de la mise en place d’une autoproduction, relecture des étapes d’écriture, visionnage de rushes et bout à bout jusqu’à l’établissement de la version définitive ;",
      },
      {
        dash: "Rédaction et négociation de contrats de cession de droits, coproduction ou association à la production, accompagnement dans le cadre d’autoproductions sur l’ensemble des problématiques juridiques et recherches de financements ;",
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
        dash: "Relecture d’articles et d’ouvrages en amont afin d’assurer notamment le respect du droit à la vie privée, droit à l’image, respect de l’honneur, de la présomption d’innocence et conformité aux dispositions de la loi du 29 juillet 1881 en matière de délits de presse ;",
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
        dash: "Audit interne et accompagnement dans la mise en place de bonnes pratiques au sein des sociétés de production dès l’écriture et jusqu’à l’issue de la post-production par le biais de :",
        bullets: [
          "l’établissement du DUERP ;",
          "la mise en place d’une procédure interne de signalement ;",
          "l’assistance des référent·e·s VHSS notamment dans l’organisation des actions de sensibilisation et de prévention des VHSS et le traitement des signalements internes ;",
        ],
      },
      {
        dash: "Conseil, assistance et représentation de personnes victimes de violences sexistes et sexuelles et de toute forme de discrimination.",
      },
    ],
  },
];