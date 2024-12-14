import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  
  {
    title: 'Swamiye Saranam Ayyappa',
    Svg: require('@site/static/img/iyappan.svg').default,
    description: (
      <>
        அறிந்தும், அறியாமலும், தெரிந்தும் தெரியாமலும் செய்த
சகல குற்றங்களையும் பொறுத்து காத்து இரட்சிக்க வேண்டும்
ஓம் சத்யமான பொன்னு பதினெட்டாம் படி மேல் வாழும் 
வில்லாளி வீரன், வீர மணிகண்டன், காசி, ராமேஸ்வரம்,
பாண்டி, மலையாளம் அடக்கி ஆளும், ஓம் ஹரிஹர சுதன் 
ஆனந்த சித்தன் ஐயன் ஐயப்ப சுவாமியே சரணம் ஐயப்பா   .
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
