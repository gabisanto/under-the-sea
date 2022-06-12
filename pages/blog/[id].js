import {useRouter} from 'next/router'

const blogEntry = ({entry}) => {
    console.log(entry)
    
    return (
        <div>

            <h1>
                From blog entry
            </h1>
        </div>
      )
    }

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const entries = await response.json()

    const paths =entries.map(entry => ({
        params : { id: entry.id.toString()}
    }))
    return {
        paths,
        //now the params are ready for the getstaticprops function
        fallback: false //would be true if there are many many entries
    }
}

export async function getStaticProps({params:{id}}) {
    const url = `${process.env.API_URL}/blogs/${id}`
    const response = await fetch(url)
    const entry = await response.json()
    return {
        props: {
            entry
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