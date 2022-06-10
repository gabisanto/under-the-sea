import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.content}`}>
            <nav className={styles.navigation}>
                <Link href="/">Index</Link>
                <Link href="/about">About us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/shop">Shop</Link>
            </nav>
            <p className={styles.copyright}>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer