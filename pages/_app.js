import Head from 'next/head'
import '../styles/globals.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )


}

export default MyApp
