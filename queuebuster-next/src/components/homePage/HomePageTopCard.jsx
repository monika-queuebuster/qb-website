import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from '../../styles/qbStrap.module.css'
import Image from 'next/image'
import { BlueCustomButton, TransparentCustomButton } from '../qbStrap'

const HomePageTopCard = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const qbLogo = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            height: "100%",
            width: "100%"
        }, {
            height: "150px",
            width: "150px",
            ease: "none",
            src: "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/herovideo_1080.mp4",
            duration: 3,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: true,
                pin: true,
            }
        })

        return (() => {
            pin.kill()
        })
    }, [])

    return (
        <>
            <div>
                <div ref={triggerRef} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <video autoPlay muted loop playsInline ref={sectionRef}>
                        <source
                            src={
                                "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/electronics/home-page-video.mp4"
                            }
                        />
                    </video>
                    <div>
                        <div style={{ width: "fit-content", margin: "auto" }}><h1 className={styles.top_card_heading}>Accelerate Your Business With The <br /><span className={styles.blue_text}>Next-Gen POS Solution</span></h1>
                            <div style={{ height: "2rem", width: "20rem", position: "relative", marginLeft: "33rem", bottom: "1.5rem" }}><Image src="/assets/industry/restaurant/features_hl 3.svg" alt="next gen pos solution" fill /></div>
                        </div>
                        <p className={styles.top_card_desc}>QueueBuster facilitates a dynamic all-in-one point-of-sale solution to manage your Billing, Inventory, Payments, Khata (Digital Ledger) and much more.</p>
                        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "3rem" }}>
                            <BlueCustomButton text="Get Started" style={{ padding: "0 2rem" }} />
                            <TransparentCustomButton text="Download App" style={{ padding: "0 2rem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageTopCard