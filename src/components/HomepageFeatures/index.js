import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Year is 3029...',
    Svg: require('@site/static/img/screen1.svg').default,
    description: (
      <>
   Race to the finish in the distant future's most beloved sport!      
	    </>
    ),
  },
  {
    title: 'Show off your style!',
    Svg: require('@site/static/img/ship.svg').default,
    description: (
      <>
        Race in style through Neoathlon's own robust cosmetics system!
      </>
    ),
  },
  {
    title: 'Join in the community!',
    Svg: require('@site/static/img/screen2.svg').default,
    description: (
      <>
        Join in the dicussion, help with the development efforts, and meet other racers in the official <a href="https://discord.gg/5NZTzvxvc">Neoathlon Discord Server!</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
