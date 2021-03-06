import * as React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero: React.FC = () => (
  <section className="home__section home__hero">
    <div className="home__hero__container">
      <h1 className="home__hero__title">
          Twój ulubiony test polityczny w nowej odsłonie
      </h1>
      <Link className="home__hero__btn" to="/quiz">
          ROZPOCZNIJ
      </Link>
    </div>
  </section>
);

export default Hero;
