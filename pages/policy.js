import styles from "../styles/Home.module.css";

export default function Policy() {
    return (
        <div className={styles.imprint} style={{ textAlign: "left", marginTop: "100px" }}>
            <h1 style={{ textAlign: "left" }}>Drone Horizon</h1>
            <h2>Datenschutz</h2>
            <p>
                Der Schutz und die Sicherheit Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten vertraulich und ausschließlich im Sinne der gesetzlichen Bestimmungen, insbesondere des österreichischen Datenschutzgesetzes (DSG) und der EU-Datenschutz-Grundverordnung (DSGVO). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
            <h3>Erstellen von Log-Files</h3>
            <p>
                Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners.
                <br />
                Browsertyp/ Browserversion,
                verwendetes Betriebssystem,
                Referrer URL,
                Hostname des zugreifenden Rechners,
                Uhrzeit der Serveranfrage
                <br />
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist die ab dem 25.05.2018 geltende Fassung der EU-Datenschutz-Grundverordnung, Art 6 Abs 1 f.
            </p>
            <h3>Rechte</h3>
            <p>
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.
            </p>
        </div>
    )
}