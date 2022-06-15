import Layout from '../components/Layout'
import List from "../components/List"
import Entry from "../components/Entry"
import Certification from "../components/Certification"
import styles from '../styles/Blog.module.css'



const Home = ({items,certifications, entries}) => {
  
  return (
    <>
    <Layout
      page="Index"
      productHeader={items[5]}
      
    >
    {/* here goes children */}
    <main className='contenedor'>
      <h1 className='heading'>
          Our products
      </h1>
      <List items={items}/>
    </main>
    <Certification 
      certifications={certifications}
    />

    <section className='contenedor'>
    <h2 className="heading">Latest blog entries</h2>

    <div className={styles.blog}>
          {entries.map(entry => 
            <Entry
              key={entry.id}
              entry={entry}
            
            />
            
            )}
        </div>
        </section>
    </Layout>
  </>
  )
}

export async function getServerSideProps() {
  // const url = `${process.env.API_URL}/items?_sort=createdAt:desc`
  // const response = await fetch(url)
  // const items = await response.json()
  // I first used the consts above but I had the problem that now I wanted to fetch more apis, so I can do Promise.all like shown below

  const urlItems = `${process.env.API_URL}/items?_sort=createdAt:desc`
  const urlCertifications = `${process.env.API_URL}/certifications`
  const urlEntries = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`

  const [resItems , resCert, resEntries] = await Promise.all([
    fetch(urlItems),
    fetch(urlCertifications),
    fetch(urlEntries)
  ])

  const [items,certifications,entries] = await Promise.all([
    resItems.json(),
    resCert.json(),
    resEntries.json()
  ])

  return {
    props: {
        items,
        certifications,
        entries
    }
  }
}

export default Home
