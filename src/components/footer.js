import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>Email: contact@animatronix.com</p>
        </div>
        <div className={styles.section}>
          <h3>Social</h3>
          <div className={styles.social}>
            <p>Je n&#39;ai actuellement aucun r&#233;seau sur lequel me contacter...</p>
            {/*<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> */}
          </div>
        </div>
        <div className={styles.section}>
          <h3>Legal</h3>
          <p>&copy; 2025 Animatronix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}