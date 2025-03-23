import styles from '@/styles/creations.module.css'

const CREATIONS = [
    { src: "/creations/cerilim.png", alt: "Page web de Cerilim", tech: "HTML, CSS, Javascript" },
    { src: "/creations/su57.png", alt: "Page 3D SU-57", tech: "React, Three.js, Javascript" },
    { src: "/creations/portfolio.png", alt: "Le portfolio actuel", tech: "React, Next.js, Node.js, Javascript" }
];

export default function Creations() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Mes Creations</h1>
      <div className={styles.grid}>
        {CREATIONS.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.src} alt={project.alt} />
            <h2>{project.alt}</h2>
            <p>Languages: {project.tech}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
