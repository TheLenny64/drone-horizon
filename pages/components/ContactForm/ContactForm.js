import styles from './ContactForm.module.css'
import { useState, useRef } from 'react'
import ActionButton from '../Buttons/ActionButton'

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const submitForm = () => {
        setLoading(true);
    }

    return (
        <form className={styles.contactForm} method="POST">
            <h2 className={styles.title}>Kontakt</h2>
            <div className={styles.inputUnit}>
                <label htmlFor="fname">Unternehmen:</label>
                <input type="text" id="fname" name="fname" ref={fnameRef} />
            </div>
            <div style={{ marginTop: 10 }} className={styles.inputUnit}>
                <label htmlFor="lname">Name Ansprechpartner:</label>
                <input type="text" id="lname" name="lname" ref={lnameRef} />
            </div>

            <div style={{ marginTop: 10 }} className={styles.inputUnit}>
                <label htmlFor="email">E-Mail:</label>
                <input type="email" id="email" name="email" ref={emailRef} />
            </div>

            <div style={{ marginTop: 20, marginBottom: 20 }} className={styles.inputUnit}>
                <label htmlFor="message">Nachricht:</label>
                <textarea className={styles.messageBox} type="text" id="message" name="message" ref={messageRef}></textarea>
            </div>

            <ActionButton type={'button'} loading={loading} style={'outlinedAction'} onClick={submitForm}>Anfrage senden</ActionButton>
        </form>
    )
}