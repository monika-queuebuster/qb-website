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

const MobileGrocery = () => {
    const { commonMarqueTitle } = content
    const [removeContent, setRemoveContent] = useState(false);

    return (
        <>
            <GDNV3 setRemoveContent={setRemoveContent} heading={"Grocery & Supermarkets"} />
            {
                !removeContent &&
                <>
                    <div className={styles.slider_section} style={{ marginTop: "8rem" }}>
                        <div className={styles.header_section}>
                            <h2>Accelerate Your Business With <br />The Next-Gen POS Solution</h2>
                            <p>QueueBuster facilitates a dynamic all-in-one point-of-sale solution to manage your<br /> Billing, Inventory, Payments, Khata (Digital Ledger) and much more.</p>
                        </div>
                        <div className={styles.slider_container}>
                            <div className={styles.slider_stack} style={{ background: 'linear-gradient(180deg, #fff 43%, #A3CED6 43%)', marginTop: '2rem', height: "39rem", width: '96%' }}></div>
                            <div className={styles.slider_stack} style={{ background: 'linear-gradient(180deg, #fff 43%, #B3E0E8 43%)', marginTop: '4rem', height: "34rem", width: '98%' }}></div>
                            <div className={styles.slider_stack} style={{ background: 'linear-gradient(180deg, #fff 43%, #edfbfe 43%)', height: "35rem", width: '100%' }}></div>
                        </div>
                        <div className={styles.swiping_container}>
                            {
                                groceryOutletTypes?.map((ele) => {
                                    return (
                                        <div key={ele?.id} style={{ backgroundColor: ele?.bgColor, zIndex: "1" }} className={styles.outlet_card}>
                                            <div className={styles.slider_img_container}><Image src={ele?.image} alt={ele?.altText} fill /></div>
                                            <div className={styles.slider_img_title}>{ele?.title}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
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

export default MobileGrocery