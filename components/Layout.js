import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children,page}) => {
  return (
<div>
    <Head>
        <title>Under the sea - {page}</title>
        <meta name="description" content="All your SCUBA gear in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>

      {children}

    <Footer/>
      </div>
  )
}

export default Layout