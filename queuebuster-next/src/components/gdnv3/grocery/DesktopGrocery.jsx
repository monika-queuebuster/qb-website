import GDNV3 from '@/components/common/gdnv3/GDNV3'
import React, { useState } from 'react'
import styles from '../../../styles/common/gdnv3.module.css'
import Image from 'next/image'
import Gdnv3Slider from '@/components/common/gdnv3/Gdnv3Slider'
import { features, groceryOutletTypes } from '@/constants/industry'
import content from '../../../language/ENGLISH.json'
import { MarqueeComponentHomePage } from '@/components/qbStrap'
import { ClientsArr1 } from '@/constants/common'
import IndustryFeatures from '@/components/common/IndustryFeatures'

const DesktopGrocery = () => {
    const { commonMarqueTitle } = content
    const [removeContent, setRemoveContent] = useState(false);
    
    return (
        <>
            <GDNV3 setRemoveContent={setRemoveContent} heading={"Grocery & Supermarkets"} />
            {
                !removeContent &&
                <>
                    <div className={styles.slider_section} style={{ marginTop: "10rem" }}>
                        <div className={styles.header_section}>
                            <h2>QueueBuster POS for Every Business</h2>
                            <p>QueueBuster POS is adaptable and designed to streamline transactions, manage inventory,<br /> and enhance customer experiences across a wide range of retail environments.</p>
                        </div>
                        <div className={styles.slider_container}>
                            <div className={styles.slider_stack} style={{ background: 'linear-gradient(180deg, #ffffff00 43%, #A3CED6 43%)', marginTop: '2rem', height: "50rem", width: '96%' }}></div>
                            <div className={styles.slider_stack} style={{ background: 'linear-gradient(180deg, #ffffff00 43%, #B3E0E8 43%)', marginTop: '4rem', height: "44rem", width: '98%' }}></div>
                            <div className={styles.slider_stack} style={{ background: 'linear-gradient(180deg, #ffffff00 43%, #edfbfe 43%)', height: "44rem", width: '100%' }}></div>
                        </div>
                        <Gdnv3Slider outletTypes={groceryOutletTypes} cards={4} />
                    </div>
                    <div className={styles.marquee_section}>
                        <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                        <MarqueeComponentHomePage ClientsArr={ClientsArr1} style={{ backgroundColor: "transparent" }} />
                    </div>
                    <div className={styles.features_section}>
                        <div className={styles.section_heading}><h3>Features</h3><div className={styles.heading_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                        <IndustryFeatures features={features} />
                    </div>
                    <div className={styles.gdnv3_footer}><div className={styles.footer_icon}><Image src="/assets/logo_grey_2.svg" alt="footer" fill /></div></div>
                </>
            }
        </>
    )
}

export default DesktopGrocery