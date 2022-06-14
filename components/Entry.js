import {formatDate} from '../helpers/'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/entry.module.css'

const Entry = ({entry}) => {
    const {title,synopsis,image,published_at,id,url} = entry
  return (
    <article>
        {/* priority was added because there was a warning about loading time for images and recommended using priority */}
        <Image src={image.url} priority='true' layout='responsive' width={image.width} height={image.height} objectFit='contain' alt={`Image for blog entry: ${title}`}/>
        
        <div className={styles.content}>
            <h3>{title}</h3>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.synopsis}>{synopsis}</p>
            <Link href={`/blog/${url}`}>
                {/* we need an a element to add class because link ignores classname */}
                <a className={styles.link}>
                    Read entry
                </a>
                
            </Link>

        </div>
    </article>
  )
}

export default Entry