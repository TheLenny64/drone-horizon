import Head from 'next/head'
import Home2 from '../pages/components/Home'
import CookieConsent from './components/CookieConsent/CookieConsent'


export default function Home() {
  return (
    <>
      <Head>
        <title>Drone Horizon - Sky high future.</title>
        <meta name="description" content="Drone Horizon ist ein Tiroler Unternehmen, welches Drohnen zum Verkauf
        anbietet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieConsent />
      <Home2 />
    </>
  )
}
