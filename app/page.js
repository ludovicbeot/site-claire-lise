export default function Home() {
  return (
    <main className="page">
      <section className="page-intro page-intro--home">
        <div className="page-intro-line" />
        <h1 className="page-title">Présentation</h1>
      </section>

      <section className="home-layout home-layout--refined">
        <article className="presentation-block presentation-block--refined">
          <div className="presentation-hero reveal reveal-1">
            <p className="presentation-lead">
              <span className="text-emphasis">Avocate au Barreau de Paris depuis 2019</span>, j’ai exercé durant près de
              cinq années au sein de différents cabinets d’affaires parisiens.
              J’ai ensuite intégré le service juridique d’une agence artistique de
              premier plan. Durant deux ans, j’ai ainsi accompagné et conseillé
              quotidiennement des <span className="text-emphasis-soft">auteur·ice·s (scénaristes, réalisateur·ice·s) et
              artistes-interprètes</span> dans la rédaction et la négociation des
              contrats relatifs à la création d’œuvres cinématographiques et
              audiovisuelles <span className="text-detail">(courts métrages, longs métrages, documentaires,
              unitaires télé, séries)</span>.
            </p>
          </div>

          <div className="presentation-flow">
            <div className="presentation-card reveal reveal-2">
              <p>
                La variété de mes expériences professionnelles m’a permis de
                développer, outre une réelle agilité et une grande capacité
                d’adaptation, des <span className="text-emphasis-soft">compétences approfondies en droit de la propriété
                intellectuelle</span> – avec une expertise particulière en droit d’auteur
                dans le secteur du cinéma et de l’audiovisuel – et en droit de la
                presse, tant en conseil qu’en précontentieux et contentieux.
              </p>
            </div>

            <div className="presentation-card reveal reveal-3">
              <p>
                Forte d’une riche activité contentieuse, je suis en mesure de vous
                accompagner pleinement dans la gestion de tout litige, de la
                tentative de conciliation à la <span className="text-emphasis-soft">saisine et la représentation en
                justice</span> devant les juridictions civiles, commerciales et pénales.
              </p>
            </div>

            <div className="presentation-card presentation-card--offset reveal reveal-4">
              <p>
                Mon intérêt pour la création artistique et notamment
                cinématographique m’a par ailleurs permis de développer une
                connaissance approfondie de ce secteur, au-delà des enjeux juridiques
                qui lui sont propre, me permettant d’avoir une <span className="text-emphasis-soft">approche globale et
                inventive de chaque projet</span>.
              </p>
            </div>

            <div className="presentation-card reveal reveal-5">
              <p>
                Je souhaite également mettre au centre de mon activité
                professionnelle mon engagement dans la lutte contre les violences
                sexistes et sexuelles et toute forme de discrimination, notamment en
                participant à la mise en place d’actions de sensibilisation et de
                prévention mais plus généralement en conservant toujours cette
                <span className="text-emphasis-soft"> grille de lecture</span> dans la gestion de l’ensemble des sujets traités.
              </p>
            </div>

            <div className="presentation-card presentation-card--wide reveal reveal-6">
              <p>
                Mon objectif est d’accompagner et sécuriser la fabrication de
                <span className="text-emphasis"> projets indépendants et exigeants</span> tout en offrant à chaque personne
                qui participe au processus créatif les meilleures conditions de
                travail.
              </p>
            </div>

            <div className="presentation-card presentation-card--closing reveal reveal-7">
              <p className="presentation-closing">
                N’hésitez pas à me contacter afin que nous puissions déterminer
                ensemble les modalités d’intervention correspondant le mieux à votre
                situation et vos projets.
              </p>
            </div>
          </div>
        </article>

        <aside className="content-side content-side--refined">
          <div className="side-card side-card--contact reveal reveal-3">
            <p className="side-label">Contact</p>
            <p>06 71 17 84 05</p>
            <p>clairelise@clg-avocate.com</p>
            <p>5 rue d’Aboukir – 75002 Paris</p>
          </div>

          <div className="side-card side-card--domains reveal reveal-5">
            <p className="side-label">Domaines</p>
            <ul>
              <li>Droit du cinéma et de l’audiovisuel</li>
              <li>Mandataire d’artistes</li>
              <li>Droit de la presse</li>
              <li>VHSS et discriminations</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}