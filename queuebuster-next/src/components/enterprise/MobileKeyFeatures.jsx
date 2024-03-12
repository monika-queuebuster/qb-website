import React from 'react'
import styles from '../../styles/enterprise/mobileEnterprise.module.css'
import Image from 'next/image'


const MobileKeyFeatures = () => {
    return (
        <div className={styles.horizontal_scroller}>
            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>

            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>

            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>

            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>

            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>

            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>

            <div className={styles.features_box}>
                <div className={styles.right_side}><div className={styles.feature_img}><Image src='/assets/Enterprise/inventoryStructuring.png' alt='feature related image' fill /></div></div>
            </div>
        </div>
    )
}

export default MobileKeyFeatures