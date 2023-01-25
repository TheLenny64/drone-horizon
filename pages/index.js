import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home2 from '../pages/components/Home'
import { Parallax } from 'react-parallax'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ContactForm from './components/ContactForm/ContactForm'
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
