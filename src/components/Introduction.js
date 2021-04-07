import portrait from "../assets/introduction/portrait.jpg";

export const Introduction = () => (
  <>
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Patrick Ouambo</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={portrait} alt="Patrick Ouambo smiling" className="intro__img" />
    </section>
    <p className="section__about__text">
      I am a Javascript Developer that focuses on React.js library. I have a
      passion for Design Systems, Web Accessibility and Serverless Technologies
      such as AWS and Google Cloud.
    </p>
  </>
);
