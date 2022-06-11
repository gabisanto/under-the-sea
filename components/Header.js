import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from "next/image"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.upperBar}>
             
              <Link href="/">
                <a>
                <Image width={400} height={100} src="/img/logo.svg" alt="logo"/>
                </a>
                
            </Link>
              
            {/* this use of a was needed to fix an error shown in console. project compiled just fine but there was a big error linking to this part. The fact that link was making image into a link directly produced a conflict so the a surrounding image solves it. */}

            <nav className={styles.navigation}>
                <Link href="/">Index</Link>
                <Link href="/about">About us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/shop">Shop</Link>
            {/* these links DONT have components, just text so they dont have an issue */}
            
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header