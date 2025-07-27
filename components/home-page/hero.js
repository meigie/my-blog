import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ThisIsMe.png"
          alt="An image showing Mei Gie"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Mei Gie</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
