import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

export const Work = () => (
  <section className="my-work" id="work">
    <h2 className="section__title section__title--work">My work</h2>
    <p className="section__subtitle section__subtitle--work">
      A selection of my range of work
    </p>

    <div className="portfolio">
      <a
        href="https://github.com/guy-patrick/crwn-clothing"
        target="_blank"
        rel="noreferrer"
        className="portfolio__item"
      >
        <img src={project1} alt="" className="portfolio__img" />
      </a>

      <a
        href="https://github.com/guy-patrick/louer-easy"
        target="_blank"
        rel="noreferrer"
        className="portfolio__item"
      >
        <img src={project2} alt="" className="portfolio__img" />
      </a>
    </div>
  </section>
);
