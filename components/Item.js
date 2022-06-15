import Image from "next/image"
import Link from "next/link"
import styles from '../styles/item.module.css'

const Item = ({item}) => {
    const {description, name,image,price,url} = item
  return (
    <div className={styles.item}>
        <Image layout='responsive' width={image.width} height={image.height} src={image.url} alt={`Image for ${name}`} />
        <div className={styles.content}>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}</p>
            <Link href={`/items/${url}`}>
            <a className={styles.link}>
                    View more
                </a>
            </Link>

        </div>
    </div>
  )
}

export default Item