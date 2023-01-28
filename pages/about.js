import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AboutHeaderImage from "../public/banner_aboutus.jpg"
import ShowcaseCard from './components/UI/ShowcaseCard';

import TeamPicture from "../public/team_drone_horizon.png";
import Pin from "../public/pin.png"

export default function about() {
    return (
        <div className={styles.main}>
            <div style={{ position: "relative", maxHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Image
                    alt='drone horizon about'
                    src={AboutHeaderImage}
                    style={{ position: "absolute", top: 0, left: 0, filter: "brightness(50%)", maxHeight: "100vh" }}
                />
                <div style={{ position: "absolute", maxHeight: "100vh" }}>
                    <h1>Über uns</h1>
                </div>
            </div>
            <div style={{ marginTop: "15vh", marginBottom: "15vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <ShowcaseCard
                    title={"Unsere Geschichte"}
                    text="
                    Die Drone Horizon GmbH wurde 2015 in der schönen Stadt Innsbruck (Österreich) gegründet. Die Smart Group ist ein Spin-off des MCI Management Center Innsbruck und hat vier Gesellschafter, die zu gleichen Teilen beteiligt sind. Unser Geschäftszweig ist hauptsächlich die Produktion von UAVs (unbemannte Luftfahrzeuge), einschließlich Softwaredesign, Spezifikation und Engineering für die endgültige Implementierung (vertikale Integration)."
                    hideImageContainer={true}
                    specificImageSize={[300, 300]}
                    image={Pin}
                />
                <div style={{ marginTop: "60px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Image
                        alt='drone horizon team'
                        style={{ borderRadius: "25px" }}
                        src={TeamPicture}
                        width={620}
                        height={480}
                        placeholder='blur'
                    />
                    <div className={styles.isolatedShowcase}>
                        <h3 style={{ color: "var(--primary)" }}>Unser Team</h3>
                        <p>
                            Unser interdisziplinäres Team zeichnet sich durch vielfältige Persönlichkeiten mit unterschiedlichen Stärken und Kenntnissen aus. Teamgeist, Kooperation und Disziplin, aber auch Spaß und Ausgelassenheit sind Teil unserer Werte in der täglichen Zusammenarbeit.
                            Wir freuen uns, Ihnen dieses Team von hochtalentierten Menschen vorstellen zu dürfen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}