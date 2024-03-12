import React, { useEffect, useState } from 'react';
import { planName } from '@/constants/common';
import styles from '../../styles/pricing/pricingDesktop.module.css';
import { IoCheckmark } from "react-icons/io5";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useRouter } from 'next/router';
import Image from 'next/image';
import content from '../../language/ENGLISH.json';
import VerificationPopup from '../modals/VerificationPopup';

const PricingPlan = ({ mobileView, setDemoModal, setHeading }) => {
    const [plan, setPlan] = useState("yearly");
    const [stickyBtns, setStickyBtn] = useState(false);
    const router = useRouter()
    const { savingText, billedMonthly, billedAnnually, individualText, yearlyContent, monthlyContent, enterpriseText, enterpriseContent, tableFooterHeading, getStartedBtn, contactSalesBtn } = content.pricing

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 1250 && window.scrollY < 3000 && mobileView ? setStickyBtn(true) : setStickyBtn(false);
        });
    }, []);

    return (
        <div>

            <div className={`${styles.mobile_choose_btn}`} style={stickyBtns ? { position: 'fixed', top: '70px', display: 'flex', width: '100%', right: "0%" } : { display: 'none' }}>
                <div><span>Individual</span></div>
                <div><span>Enterprise</span></div>
            </div>
            <div className={styles.table_filter}>
                <div className={styles.monthly_yearly}>
                    {/* <div className={styles.arrow_container}>{savingText}<div className={styles.curved_arrow}><Image src="/assets/pricing/curved-arrow.svg" alt="arrow" fill /></div></div> */}
                    {/* <div className={styles.choose_btn}>
                            <div className={`${plan === "monthly" ? styles.selected_plan : styles.nonselected_plan}`} onClick={() => setPlan("monthly")}>
                                {plan === "monthly" && <RiCheckboxCircleFill className={styles.colored_check} />}<span>{billedMonthly}</span>
                            </div>
                            <div className={`${plan === "yearly" ? styles.selected_plan : styles.nonselected_plan}`} onClick={() => setPlan("yearly")}>
                                {plan === "yearly" && <RiCheckboxCircleFill className={styles.colored_check} />}<span>{billedAnnually}</span>
                            </div>
                        </div> */}
                </div>

                <div className={styles.tick_header}>
                    <div className={styles.plan_name}>
                        {/* {
                            plan === "yearly" &&
                            <div style={{ position: 'absolute', top: '-2rem' }}><div className={styles.best_seller}><Image src="/assets/pricing/best-seller.svg" alt='best seller' fill /></div></div>
                        } */}
                        <p className={styles.tick_heading}>{individualText}</p>
                        {/* <div>
                            {
                                plan === "yearly" ?
                                    <p className={styles.plan_name_value}>₹9999 <span className={styles.p_plan_name_value}>₹11998</span></p>
                                    :
                                    <p className={styles.plan_name_value}>₹999</p>
                            }
                        </div> */}
                        {/* <p className={styles.light_text}>{plan === "yearly" ? yearlyContent : monthlyContent}</p> */}
                        <p className={styles.light_text}>For SMBs and businesses with a requirement of up to 10 licenses.</p>
                    </div>
                    <div className={styles.enterprise}>
                        <p className={styles.tick_heading}>{enterpriseText}</p>
                        <p className={styles.light_text}>{enterpriseContent}</p>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                {
                    planName?.map((ele, idx) => {
                        return (
                            <div key={ele?.plan} className={`${styles.row} ${idx % 2 === 0 ? styles.even_row : styles.odd_row}`}>
                                <div style={{ width: '50%' }} className={`${styles.table_data} ${styles.table_data1}`}>{ele?.plan}</div>
                                <div style={{ width: '25%' }} className={`${styles.table_data} ${ele?.bgColor ? styles.table_data2 : styles.no_bg_data}`}>{ele?.yearlyPlan && <IoCheckmark />}</div>
                                <div style={{ width: '25%' }} className={`${styles.table_data} ${ele?.bgColor ? styles.table_data3 : styles.no_bg_data}`}>{ele?.yearlyEnterprise && <IoCheckmark />}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.table_footer}>
                <p>{tableFooterHeading}</p>
                {/* <div className={styles.pricing_btn_container}> */}
                {/* <div className={styles.pink_pricing_btn}><button onClick={() => router.push(plan === "yearly" ? "/plan-checkout/yearly" : "/plan-checkout/monthly")}>{getStartedBtn}</button></div> */}
                <div className={styles.pink_pricing_btn}><button onClick={() => (setDemoModal(true), setHeading("Ready to Elevate your Business?"))}>Request a Quote</button></div>
                <div className={styles.blue_pricing_btn}><button onClick={() => router.push('/contact-sales')}>{contactSalesBtn}</button></div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default PricingPlan