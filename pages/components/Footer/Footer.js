import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerMain}>
            <div className={styles.footerCol}>
                <p>Drone Horizon GmbH - Alle Rechte vorbehalten.</p>
            </div>

            <div className={styles.footerCol}>
                <div className={styles.footerCol} style={{ paddingBottom: "10px" }}>
                    <Link href="/imprint">Impressum</Link>
                    <Link href="/policy">Datenschutz</Link>
                </div>
                <div className={styles.footerRow}>
                    <FaLinkedin size={50} color="white" />
                    <FaYoutube size={50} color="white" />
                    <FaInstagram size={50} color="white" />
                </div>
            </div>
        </div>
    )
}