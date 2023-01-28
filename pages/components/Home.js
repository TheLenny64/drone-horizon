import Aos from 'aos';
import 'aos/dist/aos.css'
import react, { useRef } from 'react';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'
import ShowcaseCard from './UI/ShowcaseCard';
import Image from 'next/image';

import DroneHorizonLogo from "../../public/drone_horizon_logo.png";
import LandingPagePic1 from "../../public/drone_landingpage.jpg";
import LandingPagePic2 from "../../public/drone_landingpage_2.jpg";
import CEO from "../../public/el_ceo.png"

export default function Home2() {
    useEffect(() => {
        Aos.init({
            disable: 'mobile',
            duration: 1500
        });
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.homeVideo}>
                <video
                    src="/com_drohnenshot_landingpage.mp4"
                    autoPlay
                    loop
                    muted>
                </video>
                <div
                    className={styles.videoTitle}
                >
                    <Image
                        src={DroneHorizonLogo}
                        height={200}
                        width={350}
                    />
                    <h1>Drone Horizon</h1>
                    <h2>Sky high future.</h2>
                </div>
            </div>
            <div style={{ marginTop: "15vh", marginBottom: "15vh" }}>
                <ShowcaseCard
                    title={"Unsere Vision"}
                    text={"Um Drone Horizon als Anbieter für die schnellste, sicherste und kontaktloseste Zukunft zu etablieren."}
                    image={LandingPagePic1}
                />
                <ShowcaseCard
                    inverse={true}
                    text="
                    Willkommen bei Drone Horizon, wo wir uns auf die Entwicklung hochwertiger Drohnen für eine Vielzahl von Branchen spezialisiert haben. Von Luftaufnahmen und Videografie bis hin zu Präzisionslandwirtschaft und industriellen Inspektionen - unsere Drohnen sind auf die individuellen Bedürfnisse unserer Kunden zugeschnitten. Mit modernster Technologie und einem Team erfahrener Ingenieure setzen wir uns dafür ein, innovative Lösungen anzubieten, die Unternehmen dabei helfen, effizienter und effektiver zu arbeiten. Informieren Sie sich auf unserer Website über unsere Drohnen, für die wir tätig sind, oder kontaktieren Sie uns noch heute, um Ihre speziellen Anforderungen zu besprechen."
                    image={LandingPagePic2}
                />
                <ShowcaseCard
                    quoteName={"CEO - Leonard Bartl"}
                    text={'"Drone Horizon ist ein Produktionsunternehmen, das Drohnen auf innovative Art und Weise anbietet. Mit Hilfe von ausgeklügelten Systemen können Bestellungen und andere Waren scheinbar mühelos ausgeliefert werden. Der gesamte Prozess wird nicht nur beschleunigt und vereinfacht, sondern die Lieferung im Allgemeinen wird simpler gestaltet. Der Schwerpunkt liegt zunächst auf dem B2G-Markt und der Lieferung von Gesundheitsartikeln."'}
                    image={CEO}
                />
            </div>
        </div>
    )
}
