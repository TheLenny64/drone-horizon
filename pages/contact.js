import styles from "../styles/Home.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeaderImage from "../public/MCI_3.jpg"
import Image from "next/image";

export default function contact() {
    return (
        <>
            <div style={{ position: "relative", maxHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Image
                    priority={true}
                    src={ContactHeaderImage}
                    style={{ position: "absolute", top: 0, left: 0, filter: "brightness(50%)", maxHeight: "100vh" }}
                />
                <div style={{ position: "absolute", maxHeight: "100vh" }}>
                    <h1>Kontakt</h1>
                </div>
            </div>

            <ContactForm />
        </>
    )
}