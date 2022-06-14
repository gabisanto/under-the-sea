import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import {formatDate} from '../../helpers/index'
import styles from '../../styles/entry.module.css'

const blogEntry = ({entry}) => {
    const {content,image,published_at,title} = entry
    // console.log(entry)
    
    return (
        <Layout page={title}>
            <main className='contenedor'>

                <h1 className='heading'>
                    {title}
                </h1>
                <article className={styles.entry}>
                    <Image layout="responsive" width={image.width} height={image.height}  src={image.url} alt={`Image for entry "${title}"`}/>
                    <div className={styles.content}>
                        <p className={styles.date}>{formatDate(published_at)}</p>
                        <p className={styles.text}>{content}</p>
                    </div>
                </article>
            </main>
        </Layout>
      )
    }

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const entries = await response.json()

    const paths =entries.map(entry => ({
        params : { url: entry.url}
    }))
    return {
        paths,
        //now the params are ready for the getstaticprops function
        fallback: false //would be true if there are many many entries
    }
}

export async function getStaticProps({params:{url}}) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    // this behaves like a REST API so it expects the id HOWEVER strapi supports filters and that's why i could build that blogs?url request
    const response = await fetch(urlBlog)
    const entry = await response.json()
    return {
        props: {
            entry:entry[0]
            // the request returns an array so i had to give it the position 0 so everything would still work as before
        }
    }
}

// export async function getServerSideProps({query:{id}}) {
//     const url = `${process.env.API_URL}/blogs/${id}`
//     const response = await fetch(url)
//     const entry = await response.json()
//     return {
//         props: {
//             entry
//         }
//     }
// }

export default blogEntry