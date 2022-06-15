import Image from "next/image"
import styles from '../../styles/item.module.css'
import Layout from "../../components/Layout"

const Product = ({item}) => {
    const {description, image, name, price} = item // once again, the result from props is an array to i choose the position 0 which is the object with all the info
    
  return (
    <Layout page={name}>
        
    <div className={`${styles.item} ${styles.itemify}`} >
        <Image layout='responsive' width={image.width} height={image.height} src={image.url} alt={`Image for ${name}`} />
        <div className={styles.content}>
            <h3>{name}</h3>
            <p className={styles.descriptionURL}>{description}</p>
            <p className={styles.price}>${price}</p>
            <form className={styles.form}>
                <label>Quantity:</label>
                <select>
                    <option value=''>--Select--</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
                <input type='submit' 
                       value='Add to cart'
                />
            </form>

        </div>
    </div>
    
    </Layout>
  )
}

export async function getServerSideProps({params: {url}}) {

    const urlItem = `${process.env.API_URL}/items?url=${url}`
    const response = await fetch(urlItem)
    const item = await response.json()

    
    return {
        props: {
            item:item[0]
        }
    }

}


export default Product