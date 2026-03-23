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

export default function ExpertisePage() {
  return (
    <main className="page">
      <section className="page-intro">
        <h1 className="page-title">Expertises</h1>
      </section>

      <section className="expertise-grid-2x2 reveal-soft">
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
      </section>
    </main>
  );
}