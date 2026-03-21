const sections = [
  {
    title: "Droit du cinéma et de l’audiovisuel",
    items: [
      "Rédaction et négociation de l’ensemble des contrats de développement, production et exploitation des œuvres cinématographiques et audiovisuelles (courts métrages, longs métrages, documentaires, unitaires télé, séries) :",
      "contrats d’option, deal memo, long form ;",
      "contrats d’adaptation audiovisuelle, exploitation dérivée (remake, prequel, sequel, spin-off) ;",
      "contrats d’auteur·ice·s au forfait, scénaristes, réalisateur·ice·s, compositeur·ice·s ;",
      "contrats d’artiste-interprètes et de technicien·ne·s (metteur·se·s en scène, directeur·ice·s artistiques) ;",
      "contrats de production (déléguée, exécutive, coproduction, association à la production) ;",
      "contrats d’exploitation (mandats de distribution, achats et préachats, ventes internationales) ;",
      "audit, analyse de contrats et de la chaîne de droits ;",
      "consultations tout au long du développement, de la production et de l’exploitation des œuvres cinématographiques et audiovisuelles, analyse de risques en matière d’atteinte aux droits de la personnalité, droit à l’image, vie privée, clearance de droits ;",
      "conseil, assistance et représentation en précontentieux et contentieux concernant tout différend pouvant survenir en lien avec le développement, la production et l’exploitation des œuvres cinématographiques et audiovisuelles.",
    ],
  },
  {
    title: "Mandataire d’artistes",
    items: [
      "Accompagnement à chaque étape de la création, de la recherche d’un·e producteur·ice ou de la mise en place d’une autoproduction, relecture des étapes d’écriture, visionnage de rushes et bout à bout jusqu’à l’établissement de la version définitive ;",
      "rédaction et négociation de contrats de cession de droits, coproduction ou association à la production, accompagnement dans le cadre d’autoproductions sur l’ensemble des problématiques juridiques et recherches de financements ;",
      "défense et protection des droits et intérêts des artistes en précontentieux et contentieux.",
    ],
  },
  {
    title: "Droit de la presse",
    items: [
      "Relecture d’articles et d’ouvrages en amont afin d’assurer notamment le respect du droit à la vie privée, droit à l’image, respect de l’honneur, de la présomption d’innocence et conformité aux dispositions de la loi du 29 juillet 1881 en matière de délits de presse ;",
      "conseil, assistance et représentation, en précontentieux et contentieux en matière de diffamation, injure, provocation à la haine, à la discrimination ou à la violence, rédaction de droits de réponse, demande de retraits.",
    ],
  },
  {
    title: "Lutte contre les violences sexistes et sexuelles et toute forme de discrimination",
    items: [
      "Audit interne et accompagnement dans la mise en place de bonnes pratiques au sein des sociétés de production dès l’écriture et jusqu’à l’issue de la post-production par le biais de :",
      "l’établissement du DUERP ;",
      "la mise en place d’une procédure interne de signalement ;",
      "l’assistance des référent·e·s VHSS notamment dans l’organisation des actions de sensibilisation et de prévention des VHSS et le traitement des signalements internes ;",
      "conseil, assistance et représentation de personnes victimes de violences sexistes et sexuelles et de toute forme de discrimination.",
    ],
  },
];

export default function ExpertisePage() {
  return (
    <main className="page">
      <section className="page-intro">
        <h1 className="page-title">Expertise</h1>
      </section>

      <section className="expertise-layout">
        {sections.map((section) => {
          const [lead, ...details] = section.items;

          return (
            <article className="expertise-card" key={section.title}>
              <div className="expertise-card-top">
                <h2>{section.title}</h2>
                <p className="expertise-lead">{lead}</p>
              </div>

              {details.length > 0 && (
                <ul className="expertise-list">
                  {details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}