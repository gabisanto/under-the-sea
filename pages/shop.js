import Layout from "../components/Layout"
import List from "../components/List"

const shop = ({items}) => {

  
    return (
        <Layout
        page="Online shop"
      >
      
      <main className='contenedor'>
        <h1 className="heading">Our products</h1>


        <List
          items={items}
        />

      </main>
      </Layout>
      )
    }

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/items?_sort=createdAt:desc`
  const response = await fetch(url)
  const items = await response.json()

  // console.log(items)

  return {
    props: {
        items
    }
  }
}

export default shop