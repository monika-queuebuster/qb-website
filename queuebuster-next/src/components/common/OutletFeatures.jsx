import { fineDinefeatures } from '@/constants/outlets'
import styles from '../../styles/common/OutletFeatures.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BlackCustomButton } from '../qbStrap'
import { useRouter } from 'next/router'

const OutletFeatures = ({ features, mobileView, setDemoModal, setHeading }) => {
    const [showMore, setShowMore] = useState({ state: false, idx: null });
    const router = useRouter();

    const scrollRef = useRef();

    useEffect(() => {
        const scrollContainer = scrollRef.current
        scrollContainer.addEventListener("scroll", () => {
            scrollContainer.scrollTop && setShowMore({ state: false })
        });
    }, []);

    return (
        <div className={styles.card_wrapper} ref={scrollRef}>
            {
                features?.map((ele, idx) => {
                    return (
                        <div className={styles.feature_container} style={{ backgroundColor: ele?.bgColor, position: "sticky" }}>
                            <div className={styles.left_section}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div className={styles.icon}><Image src={ele?.icon} alt='icon' fill /></div>
                                    <div className={styles.tag_text} style={{ backgroundColor: ele?.tagColor }}>{ele?.tag}</div>
                                </div>
                                <h4 className={styles.feature_heading}>{ele?.title}</h4>
                                {
                                    mobileView &&
                                    <div className={styles.right_side} style={{ margin: "6rem 0 3rem 0" }}>
                                        <div className={styles.stack_container}>
                                            <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor4, bottom: '0rem', right: '0.5rem' }}></div>
                                            <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor3, bottom: '0.5rem', right: '1rem' }}></div>
                                            <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor2, bottom: '1rem', right: '1.5rem' }}></div>
                                            <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor1, bottom: '1.5rem', right: '2rem' }}></div>
                                            <div className={styles.stack_card} style={{ bottom: '2rem', right: '2.5rem' }}><Image src={ele?.image} alt={ele?.title} fill /></div>
                                        </div>
                                    </div>
                                }
                                <p className={styles.feature_body_text} style={{ color: "#5a5a5a" }}>{ele?.desc}</p>
                                <div className={styles.readMoreParentDiv}>
                                    {
                                        ele?.points?.map((item, index) => {
                                            return (
                                                <div className={styles.feature_body_text}
                                                    style={{
                                                        borderLeft: `4px solid ${ele?.tagColor}`, paddingLeft: "1.25rem", marginTop: "1.5rem",
                                                    }}>
                                                    {item}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <BlackCustomButton 
                                text={ele?.btnText}
                                 style={mobileView ? { padding: "0 2rem", margin: '3rem 0' } : { padding: "0 2rem", marginTop: '3rem' }}
                                 onClick={()=> (setDemoModal(true), setHeading(ele?.btnText === "Request a callback" ? "We’ll call you soon!" : "Our Product Experts will call you soon!"))}  />
                            </div>
                            {
                                !mobileView &&
                                <div className={styles.right_side}>
                                    <div className={styles.stack_container}>
                                        <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor4, bottom: '0rem', right: '0.5rem' }}></div>
                                        <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor3, bottom: '0.5rem', right: '1rem' }}></div>
                                        <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor2, bottom: '1rem', right: '1.5rem' }}></div>
                                        <div className={styles.stack_card} style={{ backgroundColor: ele?.stackColor1, bottom: '1.5rem', right: '2rem' }}></div>
                                        <div className={styles.stack_card} style={{ bottom: '2rem', right: '2.5rem' }}><Image src={ele?.image} alt={ele?.title} fill /></div>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OutletFeatures