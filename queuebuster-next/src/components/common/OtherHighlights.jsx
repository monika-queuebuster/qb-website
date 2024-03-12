import React from 'react'
import styles from '../../styles/eStore/DesktopEstore.module.css'
// import { estoreHighlights } from '@/constants/features'
import { CustomButton, WhiteCustomButton } from '../qbStrap'
import Image from 'next/image'
import Router from 'next/router'

const OtherHighlights = ({ Highlights, Banner, bannerHeight, bannerWidth, bannerStyles, setDemoModal, setHeading }) => {
    const router = Router
    return (
        <>
            <div className={styles.highlights_section}>
                <div style={{ width: 'fit-content', margin: 'auto' }}><h3 className={styles.highlights_sec_heading}>Other Highlights</h3><div className={styles.highlights_sec_stroke}><Image src='/assets/strokes_svg/features_hl.svg' alt='features stroke' fill /></div></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.8rem' }} >
                    {
                        Highlights?.map((ele) => {
                            return (
                                <div className={styles.otherFeature} >
                                    <div className={styles.features_icon_container}>
                                        <Image src={ele?.icon} alt={ele?.altText} fill />
                                    </div>
                                    <h4 className={styles.other_feature_heading}>{ele?.title}</h4>
                                    <p className={styles.other_feature_desc}>{ele?.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={styles.section_four}>
                <div style={{ width: bannerStyles?.bannerLeftContent }} className={styles.section4_left_side}>
                    <h4 className={styles.section_four_heading}>{Banner?.title}</h4>
                    <p className={styles.section_four_content}>{Banner?.content}</p>
                    <WhiteCustomButton text='Schedule a Demo' style={{
                        padding: '0 2rem'
                    }}
                        onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.section4_image_container} style={{ height: bannerHeight, width: bannerWidth }}>
                        <Image src={Banner?.image} alt={Banner?.altText} fill />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherHighlights