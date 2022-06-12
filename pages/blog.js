import Layout from "../components/Layout"
import Entry from "../components/Entry"
import styles from '../styles/Blog.module.css'
// import { useEffect } from "react"

const blog = ({entries}) => {
    // Previous, classic way of getting the info from my api but now i can use next.js elements
    // useEffect(()=>{
    //   const checkAPI = async () => {
    //     const url = 'http://localhost:1337/blogs'
    //     const response = await fetch(url)
    //     const result = await response.json()
    //     console.log(result)
    //   }
    //   checkAPI()
    // },[])

    return (
        <Layout
        page="Blog"
      >
      {/* here goes children */}
      <main className='contenedor'>
        <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
          {entries.map(entry => 
            <Entry
              key={entry.id}
              entry={entry}
            
            />
            
            )}
        </div>
      </main>
      </Layout>
      )
    }

export async function getStaticProps() {
 
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const entries = await response.json()

    //now the entries show in the console where im running the project NOT in chrome console
  return {
    props: {
      entries
      //this makes props available in this page O_O
    }
  }
}



export default blog