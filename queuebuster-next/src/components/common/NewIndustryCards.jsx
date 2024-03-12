import React, { useState } from 'react'
import styles from '../../styles/common/NewIndustries.module.css'
import { industryCard } from '../../constants/enterprise';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';


const newIndustryCards = () => {
    const router = Router
    return (
        <div className={styles.industries_background}>
            {
                industryCard?.map((ele) => {
                    return (
                        <div key={ele?.id} className={`${styles.industry_card} ${ele?.hoverId}`}>
                            <div className={styles.industry_logo}><Image src={ele?.image} alt={ele?.altText} fill /></div>
                            <h4 className={styles.industry_name}>{ele?.industryName}</h4>
                            <div className={styles.features_facilities_container}>
                                {
                                    ele?.facilities?.map((item)=> {
                                        return(
                                            <div className={styles.item}>{item}</div>
                                        )
                                    })
                                }
                            </div>
                            {
                                ele?.industryName != "Others Industries" &&
                                <button className={styles.industry_card_btn} onClick={()=>router.push(ele?.url)}>Explore&nbsp;{ele?.industryName} POS</button>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default newIndustryCards