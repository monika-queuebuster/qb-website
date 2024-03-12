import React from 'react'
import { WhiteCustomButton } from '../qbStrap'
import styles from '../../styles/common/BluefoldBanner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BlueFoldBanner = ({ img, imgHeight, imgWidth, heading, desc, bannerHeight, setDemoModal, setHeading }) => {
    const router = useRouter();
    return (
        <div className={styles.blue_fold} style={{ height: bannerHeight }}>
            <div className={styles.left_side}>
                <h2 className={styles.blue_fold_heading}>{heading}</h2>
                <p className={styles.blue_fold_desc}>{desc}</p>
                <WhiteCustomButton text='Schedule a Demo' style={{
                    padding: '0 2rem',
                    width: 'fit-content'
                }}
                    onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))}
                />
            </div>
            <div className={styles.blue_fold_img_container}>
                <div style={{ height: imgHeight, width: imgWidth }} className={styles.img_container}><Image src={img} altText='blue fold image' fill /></div>
            </div>
        </div>
    )
}

export default BlueFoldBanner