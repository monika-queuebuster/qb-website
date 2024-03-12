import React from 'react'
import { bannerInfo, ratingInfo } from '../../constants/enterprise.js'
import styles from '../../styles/enterprise/desktopEnterprise.module.css'
import Image from 'next/image'
import Link from 'next/link.js'
import content from '../../language/ENGLISH.json'
import { BlackCustomButton } from '../qbStrap.jsx'
import { useRouter } from 'next/router.js'

const InfoBanner = ({ mobileView }) => {
    const { scaleupYourBusiness, highlyAccredited, knowMoreAboutQB } = content.enterprise;
    const router = useRouter();

    return (
        <div className={styles.info_banner}>
            <div className={styles.info_banner_heading}><h4>{scaleupYourBusiness}</h4> <div className={styles.banner_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
            <div className={styles.banner_mid_sec} style={mobileView && { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                {
                    bannerInfo?.map((ele) => {
                        return (
                            <div key={ele?.id}>
                                <div className={styles.banner_element} style={{ backgroundColor: ele?.color }}>
                                    <p className={styles.banner_icon_number}>{ele?.numbers}</p>
                                    <p className={styles.banner_icon_name}>{ele?.name}</p>
                                </div>
                                {
                                    !mobileView &&
                                    <div className={styles.rating_container}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span className={styles.element_rating}>{ele?.rating}</span><span className={styles.outof_rating}>/5</span>
                                            <div className={styles.ratings_img_container}>
                                                <Image src={ele?.ratingImg} alt='ratings' fill />
                                            </div>
                                        </div>
                                        <div className={styles.company_img_container}>
                                            <Image src={ele?.companyImg} alt='company logo' fill />
                                        </div>
                                    </div>
                                }


                            </div>
                        )
                    })
                }
            </div>
            {
                mobileView &&
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                    {
                        bannerInfo?.map((ele) => {
                            return (
                                <div className={styles.rating_container}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className={styles.element_rating}>{ele?.rating}</span><span className={styles.outof_rating}>/5</span>
                                        <div className={styles.ratings_img_container}>
                                            <Image src={ele?.ratingImg} alt='ratings' fill />
                                        </div>
                                    </div>
                                    <div className={styles.company_img_container}>
                                        <Image src={ele?.companyImg} alt='company logo' fill />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            <BlackCustomButton text='Speak with an expert' style={{ padding: '0 2rem', marginTop: "4rem" }} onClick={() => router.push('/get-free-demo')} />
        </div>
    )
}

export default InfoBanner