import React from 'react'
import { bannerInfo, ratingInfo } from '../../constants/enterprise.js'
import styles from '../../styles/enterprise/mobileEnterprise.module.css'
import Image from 'next/image'
import Link from 'next/link.js'
import content from '../../language/ENGLISH.json'

const InfoBanner = () => {
    const { scaleupYourBusiness, highlyAccredited, knowMoreAboutQB } = content.enterprise;
    return (
        <div className={styles.info_banner}>
            <h4 className={styles.info_banner_heading}>{scaleupYourBusiness}</h4>
            <p className={styles.info_banner_subheading}>{highlyAccredited}</p>
            <div className={styles.banner_mid_sec}>
            {
                bannerInfo?.map((ele) => {
                    return (
                        <div key={ele?.id} className={styles.banner_element}>
                            <div className={styles.banner_icons}><Image src={ele?.image} alt='banner icons' fill /></div>
                            <div>
                                <p className={styles.banner_icon_number}>{ele?.numbers}</p>
                                <p className={styles.banner_icon_name}>{ele?.name}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>

            <div className={styles.ratings}>
                {
                    bannerInfo?.map((ele)=> {
                        return(
                            <div className={styles.rating_container}>
                                <div className={styles.company_img_container}>
                                    <Image src={ele?.companyImg} alt='company logo' fill />
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <span className={styles.element_rating}>{ele?.rating}</span><span className={styles.outof_rating}>/5</span>
                                    <div className={styles.ratings_img_container}>
                                        <Image src={ele?.ratingImg} alt='ratings' fill />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={styles.know_more_text}><Link href='/'>{`${knowMoreAboutQB} ->`}</Link></p>
        </div>
    )
}

export default InfoBanner