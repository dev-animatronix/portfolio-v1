import Image from "next/image";
import styles from "@/styles/page.module.css";

const LANGUAGES = [
  { src: "/langs/html.png", alt: "HTML" },
  { src: "/langs/css.png", alt: "CSS" },
  { src: "/langs/js.png", alt: "JavaScript" },
  { src: "/langs/react.png", alt: "React" },
  { src: "/langs/next.png", alt: "Next.js" },
  { src: "/langs/node.png", alt: "Node.js" },
  { src: "/langs/python.png", alt: "Python" },
  { src: "/langs/bash.png", alt: "Bash" }
];

const CREATIONS = [
  { src: "/creations/cerilim.png", alt: "Cerilim landing page", tech: "HTML, CSS, Javascript" },
  { src: "/creations/su57.png", alt: "SU-57 3D landing page", tech: "React, Three.js, Javascript" },
  { src: "/creations/portfolio.png", alt: "This actual Portfolio", tech: "React, Next.js, Node.js, Javascript" }
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.title}>
          <h1>
            <span>Hey !</span>
            <br />
            Je suis <Logo /> <span>Animatronix</span>
            , j&apos;apprends le <span>développement web.</span>
          </h1>
        </div>
        
        <div className={styles.languages}>
          {LANGUAGES.map((lang, index) => (
            <div key={index} className={styles.language}>
              <Image
                src={lang.src}
                width={50}
                height={50}
                alt={lang.alt}
                className={styles.icon}
              />
            </div>
          ))}
        </div>
        <a className={styles.contact} href="/contact">Contactez-moi</a>
      </section>

      <section className={styles.showcase}>
        <div className={styles.music}>
          <h3 className={styles.title} >Ma playlist</h3>
          <div className={styles.ep}>
            {[
              { src: "/music/ogryzek.jpg", alt: "Ogryzek", className: styles.epLeft, size: 170 },
              { src: "/music/alanwalker.jpg", alt: "Alan Walker", className: styles.epMain, size: 200 },
              { src: "/music/martingarrix.jpg", alt: "Martin Garrix", className: styles.epRight, size: 170 }
            ].map((album, index) => (
              <div key={index} className={album.className}>
                <Image
                  src={album.src}
                  width={album.size}
                  height={album.size}
                  alt={album.alt}
                  className={styles.epImg}
                />
              </div>
            ))}
          </div>
          <a className={styles.listen} href="https://youtube.com/playlist?list=PL1iSP7-9GQvLkdE8kFOwtOUK7BkMsSLMg&si=lH-YxLBc7Wcx5RgM" target="_blank" rel="noopener noreferrer">Ecouter</a>
        </div>

        <div className={styles.map}>
          <h3 className={styles.title}>Tarbes</h3>
          <p className={styles.subtitle}>43&deg; 13&apos; 58&quot; nord, 00&deg; 04&apos; 28&quot; est France</p>
        </div>

        <div className={styles.creations}>
          <h3 className={styles.title}>Créations :</h3>
          <div className={styles.creations}>
            {[false, true].map((isHidden, groupIndex) => (
              <div key={groupIndex} className={styles.group} aria-hidden={isHidden}>
                {CREATIONS.map((creation, index) => (
                  <div key={index} className={styles.creation}>
                    <Image
                      src={creation.src}
                      width={500}
                      height={300}
                      alt={creation.alt}
                      className={styles.creationImg}
                    />
                    <h1>{creation.tech}</h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skills}>
          <h3 className={styles.title} >Compétences :</h3>
          <ul>
            <h1>Maitrisés</h1>
            <li><LangImg url="/langs/html.png" /> HTML</li>
            <li><LangImg url="/langs/css.png" /> CSS</li>
            <h1>Maitrise partiele</h1>
            <li><LangImg url="/langs/python.png" /> Python</li>
            <li><LangImg url="/langs/bash.png" /> Bash</li>
            <h1>En cours d&apos;apprentissage</h1>
            <li><LangImg url="/langs/js.png" /> JavaScript</li>
            <li><LangImg url="/langs/react.png" /> React</li>
            <li><LangImg url="/langs/next.png" /> Next.js</li>
            <li><LangImg url="/langs/node.png" /> Node.js</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function Logo() {
  return <Image src="/logo.jpg" width={75} height={75} alt="Logo" className={styles.logo} />;
}

function LangImg({ url }) {
  return <Image src={url} width={50} height={50} alt={url.split('/langs/')[1].split('.')[0]} className={styles.langIcon} />;
}
