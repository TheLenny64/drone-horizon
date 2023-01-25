import Image from 'next/image';
import styles from './ShowcaseCard.module.css'

export default function ShowcaseCard({ title, text, image, inverse, quoteName, hideImageContainer, specificImageSize, children }) {
    return (
        inverse ?
            <div className={styles.showcaseCardContainer}>
                <div className={`${styles.rightContainer} ${!hideImageContainer ? "" : styles.noImageContainer}`}>
                    <Image
                        palceholder="blur"
                        src={image}
                        width={specificImageSize ? specificImageSize[0] : 400}
                        height={specificImageSize ? specificImageSize[0] : 330}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
                <div className={styles.leftContainer}>
                    <div className={styles.leftContainerContent}>
                        {
                            title ?
                                <h3>{title}</h3>
                                :
                                null
                        }
                        <p>
                            {text}
                        </p>

                        {
                            quoteName ?
                                <p>{quoteName}</p>
                                :
                                ""
                        }

                    </div>
                </div>
            </div>
            :
            <div className={styles.showcaseCardContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftContainerContent}>
                        {
                            title ?
                                <h3>{title}</h3>
                                :
                                null
                        }
                        <p>
                            {text}
                        </p>
                        <p>
                            {
                                quoteName ?
                                    quoteName :
                                    ""
                            }
                        </p>
                    </div>
                </div>
                <div className={`${styles.rightContainer} ${!hideImageContainer ? "" : styles.noImageContainer}`}>
                    <Image

                        palceholder="blur"
                        src={image}
                        width={specificImageSize ? specificImageSize[0] : 400}
                        height={specificImageSize ? specificImageSize[0] : 330}
                        style={{ borderRadius: "20px" }}
                    />
                </div>
            </div>
    )
}