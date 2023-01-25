import Image from "next/image";
import ProductPageHeader from "../public/production_productpage.jpg"
import styles from "../styles/Home.module.css";
import Showcase1 from "../public/drone_showcase_1.png"
import Showcase2 from "../public/drone_showcase_2.png"
import ShowcaseCard from "./components/UI/ShowcaseCard";
import { FaCheck, FaHandshake, FaUser, FaUserCheck } from "react-icons/fa";
import ActionButton from "./components/Buttons/ActionButton";
import Link from "next/link";

export default function Product() {
    return (
        <>
            <div className={styles.main} style={{ height: "100%", marginTop: "200px", minHeight: "40vh" }}>
                <h1 style={{ color: "var(--primary)" }}>Drone Horizon</h1>
                <h2>Unser Produkt</h2>
                <Image
                    src={Showcase1}
                    height={400}
                    width={600}
                />
            </div>
            <div className={styles.main} style={{ marginTop: "15vh", marginBottom: "15vh" }}>
                <ShowcaseCard
                    title={"Unser Produkt"}
                    text="
                    “In den letzten Jahren wurde allen Menschen eines klar: die Zukunft wird innovativ,
                    schnell und unvorhersehbar. In der derzeitigen COVID-19 Krise, ist es nun an der
                    Zeit sich mit diesen Ideologien auseinanderzusetzen und zu verstehen, welche
                    Möglichkeiten und Umstände sich daraus ergeben. Wir bei Drone Horizon haben
                    erkannt, dass die Herstellung und Anwendung von Drohnen in dieser Zeit eine
                    wichtige Rolle spielen wird, weswegen wir determinierter sind als je zuvor diese

                    Möglichkeit zu nutzen.”

                     CEO - Leonard Bartl"
                    image={Showcase1}
                />
                <div style={{ marginTop: "40px", marginBottom: "40px", minHeight: "40vh" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                        <FaCheck size={80} color="var(--primary)" />
                        <div>
                            <h2>Drone Horizon</h2>
                            <h3><span style={{ color: "var(--primary)" }}>Patentiert</span> in die Zukunft.</h3>
                        </div>
                    </div>
                    <div className={styles.isolatedShowcase}>
                        <p>
                            Wir von Drone Horizon bieten unsere Kunden neben einem ISO:9001 zertifizierten Prozessablauf, auch ein patentiertes Konzept.
                            Mit innovativer Architektur und einzigartiger Konzeptionierung haben wir unser Patent bereits im Jahre 2019 angemeldet und bestätigt.
                        </p>
                        <p>
                            Unser Produkt ist marktweit unangetastet, und wir können in den letzten Jahren stolz auf eine revolutionäre Zeit, nicht nur in unserem Unternehmen, sondern auch bezogen auf den Drohnen-Markt zurückblicken.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: "40px", marginBottom: "40px", minHeight: "40vh" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                        <FaUserCheck size={80} color="var(--primary)" />
                        <div>
                            <h2>Für Ihre Branche</h2>
                            <h3>Für Ihr Unternehmen.</h3>
                        </div>
                    </div>
                    <div className={styles.isolatedShowcase}>
                        <p>
                            Durch unsere jahrelange Erfahrung im Bereich der Herstellung und dem Verkauf von Drohnen,
                            können wir auf ein großes Reportoire von Know-How und Referenzkunden zurückgreifen.
                        </p>
                        <br />
                        <p>
                            Treten Sie mit uns gerne in Kontakt, um Ihre kontaktlose Zukunft zu planen.
                        </p>
                    </div>
                    <div style={{ paddingTop: "15px" }}>
                        <Link href="/contact"><ActionButton style={"outlinedAction"}>Kontakt aufnehmen</ActionButton></Link>
                    </div>
                    <div className={styles.showcaseRow}>
                        <div className={styles.isolatedShowcase}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "165px" }}>
                                <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>ISO:9001<br /> zertifiziert</h3>
                                <FaCheck size={80} color="var(--primary)" />
                            </div>
                        </div>
                        <div className={styles.isolatedShowcase}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "165px" }}>
                                <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>Kundenzufriedenheit: <br /> 1,65</h3>
                                <FaUser size={80} color="var(--primary)" />
                            </div>
                        </div>
                        <div className={styles.isolatedShowcase}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "165px" }}>
                                <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>5+ Jahre Erfahrung</h3>
                                <FaHandshake size={80} color="var(--primary)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}