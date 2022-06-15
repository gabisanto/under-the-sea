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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
      </Head>

    <Header/>

      {children}

    <Footer/>

    <a href="https://github.com/gabisanto/under-the-sea" target="_blank">
    <div className="github">
      <img src='/img/logo_github_icon_143196.png' alt='Github logo'/>
    </div>
    </a>
      </div>
  )
}

export default Layout