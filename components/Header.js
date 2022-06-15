import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from "next/image"
import {useRouter} from 'next/router'

const Header = ({productHeader}) => {
  const router = useRouter()
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
            {productHeader && (
              <div className={styles.productHeader}>
                <h2>{productHeader.name}</h2>
                <p>{productHeader.description}</p>
                <p className={styles.price}>$ {productHeader.price}</p>
                <Link href={`/items/${productHeader.url}`}>
                  <a className={styles.link}>
                    View product
                  </a>
                
                </Link>
              </div>
            )}
        </div>

        {router.pathname === '/' && (
          <img className={styles.imgProduct} src={productHeader.image.url} />
        )}
    </header>
  )
}

export default Header