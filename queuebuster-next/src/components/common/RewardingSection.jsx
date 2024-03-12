import React from 'react'
import styles from '../../styles/eStore/DesktopEstore.module.css'
import { BlackCustomButton, CustomButton } from '../qbStrap'
import Image from 'next/image'
import Router from 'next/router'

const RewardingSection = ({Text1, Number1, Text2, Number2, BrText1, BrText2, heading, altText, strokeImage, setDemoModal, setHeading}) => {
    const router = Router;
    return (
        <div className={styles.section_five}>
            <div className={styles.section5_container}>
                <div className={styles.section5_left_container}>
                    <div><h3 className={styles.rewarding_section_heading}>{heading}</h3><div className={styles.business_stroke_img}><Image src={strokeImage} alt={altText} fill /></div></div>
                    <div style={{ display: 'flex', gap: '8rem', margin: '3.75rem 0', width: '85%' }}>
                        <div>
                            
                            <p className={styles.LC_number}>{Number1}</p><span className={styles.bracket_text}>{BrText1 ? BrText1 : ''}</span>
                            <p className={styles.LC_heading}>{Text1}</p>
                        </div>
                        <div>
                            
                            <p className={styles.LC_number}>{Number2}</p><span className={styles.bracket_text}>{BrText2 ? BrText2 : ''}</span>
                            <p className={styles.LC_heading}>{Text2}</p>
                        </div>
                    </div>
                    <BlackCustomButton text='Talk to an Expert' onClick={() => (setDemoModal(true), setHeading("Our Product Experts will call you soon!"))} style={{padding: '0 2rem'}} />
                </div>
                <div className={styles.section5_image_container}><Image src='https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/online-store/business.webp' alt='rewarding section image' fill /></div>
            </div>
        </div>
    )
}

export default RewardingSection