'use client';

import Link from 'next/link';
import styles from "@/styles/navbar.module.css"
import Image from "next/image"
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Image
          src="/logo.jpg"
          width={40}
          height={40}
          alt="Logo"
          className={styles.logo}
        />
        <Link className={styles.title} href="/">Animatronix</Link>
      </div>
      <button 
        className={`${styles.menuButton} ${isOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.right} ${isOpen ? styles.active : ''}`}>
        <Link href="/" onClick={toggleMenu}>Accueil</Link>
        <Link href="/about" onClick={toggleMenu}>À propos</Link>
        <Link href="/projects" onClick={toggleMenu}>Créations</Link>
        <Link href="/contact" className={styles.contact} onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  )
}