import React from 'react';
import styles from '../../styles/common/IndustryFeatures.module.css'
import Image from 'next/image';

const IndustryFeatures = ({features, mobileView, cardMaxHeight}) => {
  return (
    <div className={styles.features_container}>
        <div className={styles.color_popup}></div>
        <p>Level up your profits with an end-to-end storefront solution tailored to suit any retail business across multiple industries. Get details of what the QueueBuster POS system is capable of to expand your business.</p>
        <div className={styles.feature_element_container} style={features.length === 3 && !mobileView ? { gridTemplateColumns: "repeat(3, 1fr)", width: "85%" } : {}}>
            {
                features?.map((ele)=> {
                    return(
                        <div className={styles.feature_element} style={{ height: cardMaxHeight ? cardMaxHeight : null}}>
                            <div className={styles.icon_container}><Image src={ele?.icon} alt='features icon' fill /></div>
                            <h4>{ele?.title}</h4>
                            <p>{ele?.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default IndustryFeatures