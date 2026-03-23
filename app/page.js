export default function Home() {
  return (
    <main className="page presentation-page">
      <section className="page-intro page-intro--presentation">
        <div className="page-intro-line" />
        <h1 className="page-title">Présentation</h1>
      </section>

      <section className="presentation-wide reveal-soft">
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
      </section>
    </main>
  );
}