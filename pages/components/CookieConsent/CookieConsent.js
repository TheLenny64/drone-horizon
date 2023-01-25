import ActionButton from '../Buttons/ActionButton'
import styles from './CookieConsent.module.css'
import { useState } from 'react'

export default function CookieConsent() {
    const [isOpen, setIsOpen] = useState(true);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [functionalChecked, setFunctionalChecked] = useState(true);
    const [analyticalChecked, setAnalyticalChecked] = useState(false);
    const [marketingChecked, setMarketingChecked] = useState(false);

    const saveCookies = () => {
        setIsOpen(false);

    }
    const saveOnlyFunctional = () => {
        setIsOpen(false);
    }
    const saveOnlySelected = () => {
        setIsOpen(false);
    }
    const openCookieDetail = () => {
        setIsDetailOpen(!isDetailOpen);
    }

    return (
        !isOpen ?
            <>
            </>
            :
            <div className={styles.cookieConsent}>
                <div className={styles.cookieConsentHint}>
                    <p>
                        Wir verwenden Cookies um Ihr Website-Erlebnis zu verbessern.<br />
                        Mehr Details unter: <a>Cookie-Richtlinien</a> oder <a>Impressum</a>
                    </p>
                </div>
                <div className={isDetailOpen ? styles.cookieDetailOpen : styles.cookieDetailClosed}>
                    <div className={styles.cookieCheckbox}>
                        <p>Funktionale Cookies</p>
                        <label htmlFor="functional" className={styles.switch}>
                            <input onChange={() => setFunctionalChecked(true)} checked={functionalChecked} type={'checkbox'} name="functional" id="functionalCookies" />
                            <div className={styles.roundSlider}></div>
                        </label>
                    </div>
                    <div className={styles.cookieCheckbox}>
                        <p>Analytische Cookies</p>
                        <label htmlFor="analytical" className={styles.switch}>
                            <div>
                                <input onChange={() => setAnalyticalChecked(!analyticalChecked)} checked={analyticalChecked} type={'checkbox'} name="analytical" id="analyticalCookies" />
                                <div className={styles.roundSlider}></div>
                            </div>
                        </label>
                    </div>
                    <div className={styles.cookieCheckbox}>
                        <p>Marketing Cookies</p>
                        <label htmlFor="marketing" className={styles.switch}>
                            <input onChange={() => setMarketingChecked(!marketingChecked)} checked={marketingChecked} type={'checkbox'} name="marketing" id="marketingCookies" />
                            <div className={styles.roundSlider}></div>
                        </label>
                    </div>
                    <a onClick={() => saveOnlySelected()}>Oben ausgewählte speichern</a>
                </div>
                <ActionButton style={'action'} type={'button'} loading={false} onClick={() => saveCookies()}>Alle akzeptieren</ActionButton>
                <a onClick={() => saveOnlyFunctional()}>Nur funktionale akzeptieren</a>
                <a onClick={() => openCookieDetail()}>Details anzeigen</a>
            </div>
    )
}