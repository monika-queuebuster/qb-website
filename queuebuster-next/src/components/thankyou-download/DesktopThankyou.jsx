import { inter_semi_bold } from "@/components/common/Fonts";
import { CustomButton } from "@/components/qbStrap";
import { useRouter } from "next/router";
import React from "react";
import content from "../../language/ENGLISH.json";
import Image from "next/image";
import { blogData } from "@/constants/common";
import styles from '../../styles/ContactPage/contact.module.css';
import Link from "next/link";

const ThankYou = () => {
    const { insightsToGrowText } = content.contact;

    const router = useRouter();
    return (
        <div>
            <div style={{ width: "100%", marginTop: "7.3rem" }}>
                <center>
                    <div style={{ width: "45rem", height: "20rem", position: 'relative' }}>
                        <Image
                            src="/assets/thankYou.svg"
                            alt="thankyou"
                            fill
                        />
                    </div>
                </center>
            </div>
            <div>
                <center>
                    <h1
                        style={{ width: "55%", fontSize: "2.4rem", margin: "1.4rem 0 3.6rem 0", lineHeight: "4rem" }}
                        className={inter_semi_bold.className}
                    >
                        We have received your details successfully. Please click on the link below to download the QueueBuster POS app on your mobile.
                    </h1>
                    <p style={{ width: "60%" }}>
                        If you wish to further speak to our team, let's get on a quick chat!
                    </p>
                </center>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CustomButton
                        text="Download now"
                        styles={{
                            backgroundColor: "#3C69AF",
                            height: "4.5rem",
                            width: "14rem",
                            marginTop: "2rem",
                            marginRight: "1rem",
                            border: `none`,
                            color: "#fffff",
                            fontWeight: "600",
                        }}
                        onClick={() => {
                            window.open("https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos");
                        }}
                    />
                    <CustomButton
                        text="Connect me now"
                        styles={{
                            backgroundColor: "transparent",
                            height: "4.5rem",
                            width: "15rem",
                            marginTop: "2rem",
                            marginRight: "1rem",
                            border: `2px solid #3C69AF`,
                            color: "#3C69AF",
                            fontWeight: "600",
                        }}
                        onClick={() => {
                            window.open("https://wa.me/919311101455?text=Hello");
                        }}
                    />
                </div>
                <div style={{ margin: "6rem 9.3rem" }}>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                        <h3 className={styles.section_heading}>{insightsToGrowText}</h3>
                        <div className={styles.stroke_container}><Image src="/assets/ContactPage/features_stroke.svg" alt="storke" fill /></div>
                    </div>
                    <div className={styles.blog_data_container}>
                        {
                            blogData?.map((ele) => {
                                return (
                                    <div key={ele?.id} className={styles.blog_card}>
                                        <div className={styles.blog_img_container}>
                                            <Image src={ele?.img} alt={ele?.title} fill />
                                            <div className={styles.date_container}>{ele?.date}</div>
                                        </div>
                                        <div className={styles.blog_body}>
                                            <h4>{ele?.title}</h4>
                                            <p>{ele?.desc}</p>
                                            <Link href={ele?.link}>Read More</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
