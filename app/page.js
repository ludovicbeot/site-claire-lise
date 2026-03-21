export default function Home() {
  return (
    <main className="page presentation-page">
      <section className="page-intro page-intro--presentation">
        <div className="page-intro-line" />
        <h1 className="page-title">Présentation</h1>
      </section>

      <section className="presentation-editorial reveal-soft">
        <div className="presentation-editorial-main">
          <p className="presentation-paragraph presentation-paragraph--lead">
            <span className="text-mark text-mark--strong">Avocate au Barreau de Paris depuis 2019</span>, j’ai exercé durant près de
            cinq années au sein de différents cabinets d’affaires parisiens.
            J’ai ensuite intégré le service juridique d’une agence artistique de
            premier plan. Durant deux ans, j’ai ainsi accompagné et conseillé
            quotidiennement des <span className="text-mark">auteur·ice·s (scénaristes, réalisateur·ice·s) et artistes-interprètes</span> dans la
            rédaction et la négociation des contrats relatifs à la création
            d’œuvres cinématographiques et audiovisuelles (courts métrages,
            longs métrages, documentaires, unitaires télé, séries).
          </p>

          <p className="presentation-paragraph">
            La variété de mes expériences professionnelles m’a permis de
            développer, outre une réelle agilité et une grande capacité
            d’adaptation, des <span className="text-mark">compétences approfondies en droit de la propriété intellectuelle</span> – avec
            une expertise particulière en droit d’auteur dans le secteur du
            cinéma et de l’audiovisuel – et en droit de la presse, tant en
            conseil qu’en précontentieux et contentieux.
          </p>

          <p className="presentation-paragraph">
            Forte d’une riche activité contentieuse, je suis en mesure de vous
            accompagner pleinement dans la gestion de tout litige, de la
            tentative de conciliation à la <span className="text-mark">saisine et la représentation en justice</span> devant
            les juridictions civiles, commerciales et pénales.
          </p>

          <p className="presentation-paragraph">
            Mon intérêt pour la création artistique et notamment
            cinématographique m’a par ailleurs permis de développer une
            connaissance approfondie de ce secteur, au-delà des enjeux
            juridiques qui lui sont propre, me permettant d’avoir une
            <span className="text-mark"> approche globale et inventive de chaque projet</span>.
          </p>

          <p className="presentation-paragraph">
            Je souhaite également mettre au centre de mon activité
            professionnelle mon engagement dans la lutte contre les violences
            sexistes et sexuelles et toute forme de discrimination, notamment
            en participant à la mise en place d’actions de sensibilisation et
            de prévention mais plus généralement en conservant toujours cette
            <span className="text-mark"> grille de lecture</span> dans la gestion de l’ensemble des sujets traités.
          </p>

          <p className="presentation-paragraph">
            Mon objectif est d’accompagner et sécuriser la fabrication de
            <span className="text-mark text-mark--strong"> projets indépendants et exigeants</span> tout en offrant à chaque
            personne qui participe au processus créatif les meilleures
            conditions de travail.
          </p>

          <p className="presentation-paragraph presentation-paragraph--closing">
            N’hésitez pas à me contacter afin que nous puissions déterminer
            ensemble les modalités d’intervention correspondant le mieux à
            votre situation et vos projets.
          </p>
        </div>

        <aside className="presentation-aside">
          <div className="presentation-aside-block reveal-delay-1">
            <p className="presentation-aside-label">Contact</p>
            <p>06 71 17 84 05</p>
            <p>clairelise@clg-avocate.com</p>
            <p>5 rue d’Aboukir – 75002 Paris</p>
          </div>

          <div className="presentation-aside-block reveal-delay-2">
            <p className="presentation-aside-label">Domaines</p>
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