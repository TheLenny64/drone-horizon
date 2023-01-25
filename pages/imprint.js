import styles from "../styles/Home.module.css";

export default function Imprint() {
    return (
        <div className={`${styles.imprint}`} style={{ textAlign: "left", marginTop: "100px" }}>
            <h1>Impressum</h1>
            <div>
                <h3>Anschrift:</h3>
                <p>Drone Horizon GmbH</p>
                <p>Weiherburggasse 8</p>
                <p>Tirol, 6020 Innsbruck, Österreich</p>
            </div>

            <div>
                <h3>Vertreten durch:</h3>
                <p>Leonard Bartl (CEO)</p>
            </div>

            <div>
                <h3>Kontakt:</h3>
                <a style={{ color: "white" }} href="mailto:office@drone-horizon.at">office@drone-horizon.at</a>
            </div>

            <div>
                <h3>Verantwortlich für den Inhalt:</h3>
                <p>Leonard Bartl (CEO)</p>
            </div>

            <div>
                <h3>UID</h3>
                <p>ATU09312021X</p>
                <h3>Firmenbuchnummer</h3>
                <p>FN 165432x k</p>
                <p>Firmenbuchgericht: Landesgericht Innsbruck</p>
                <br />
            </div>

            <div>
                <h3>Haftungsausschluss:</h3>
                <h3>Haftung für Inhalte</h3>
                <p>
                    Wir sind bemüht die Inhalte auf dieser Website mit Sorgfalt und hoher Qualität zu erstellen.
                    Für die Korrektheit und Aktualität der auf dieser Website angegebenen Informationen können wir leider keine Garantie aussprechen.
                    Sobald Ihnen Rechtsverletzungen auf dieser Website auffallen, bitten wir Sie umgehend uns zu kontaktieren, damit wir diese gemäß entfernen können.
                    Eine Haftung bezüglich ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                </p><br />
                <h3>Haftung für Links</h3>
                <p>
                    Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte auf den Webseiten Dritter können wir keinen Einfluss nehmen und wir können
                    laut § 17 ECG hierfür ebenso keine Haftung übernehmen. Die Haftung für die Inhalte auf diesen Webseiten übernimmt der jeweils Dritte.

                    Sollte Ihnen Rechtswidrigkeiten auffallen, bitten wir Sie uns zu kontaktieren.
                </p><br />
                <h3>Urheberrecht</h3>
                <p>
                    Die Inhalte dieser Webseite, inklusive Bilder, Videos und Texte, sind urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jegliche Art der Verwendung setzen
                    die schriftliche Zustimmung des Autors voraus. Sollten Inhalte trotzdem verwendet werden, werden wir dies rechtlich verfolgen.
                    Sollten Ihnen andernfalls Urheberverletzungen unsererseits auf unserer Webseite auffallen, geben Sie und bitte unverzüglich bescheid.
                </p>
            </div>
        </div>
    )
}