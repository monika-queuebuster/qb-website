import React from 'react'
import { trustFactor } from '@/constants/common'
import styles from '../../styles/common/TrustFactor.module.css'
import Image from 'next/image'

const TrustFactor = () => {
  return (
    <div className={styles.trustfactor_container}>
        {
            trustFactor?.map((ele)=> {
                return (
                    <div className={styles.trust_factor_component}>
                        <div className={styles.icon_container}><Image src={ele?.icon} alt='trust factors' fill /></div>
                        <h4 className={styles.title}>{ele?.title}</h4>
                        <p className={styles.desc}>{ele?.desc}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrustFactor