'use client';


import styles from '@/styles/about.module.css'
import Image from 'next/image'


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

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>À Propos de Moi</h1>
      
      <div className={styles.profile}>
        <Image
          src="/logo.jpg"
          alt="Photo de profil"
          width={300}
          height={300}
          className={styles.profileImage}
        />
        
        <div className={styles.content}>
          <h2>Bonjour, je suis Animatronix</h2>
          <p>
            Je suis un jeune d&#233;veloppeur web frontend et backend fran&#231;ais poursuivant
            encore ses &#233;tudes, cela fait mainenant 5 ans que je fait du 
            d&#233;veloppement web et de la mise en place de serveurs web sous 
            debian. J&#8217;ai d&#8217;abord commenc&#233; a developper en HTML CSS pur et 
            PHP comme backend avant de m&#8217;interesser &#224; node.js et next.js 
            me consuisant &#224; l&#8217;utilisation de React comme frontend depuis 1 an.
          </p>

          <h3>Mes Compétences</h3>
          <div className={styles.skills}>
            {LANGUAGES.map((lang, index) => (
              <div key={index} className={styles.skillItem}>
                <Image
                  src={lang.src}
                  alt={lang.alt}
                  width={64}
                  height={64}
                  className={styles.logo}
                />
                {lang.alt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
