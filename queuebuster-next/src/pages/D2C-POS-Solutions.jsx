import React from 'react';
import Loading from "../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileD2C = dynamic(() => import('../components/d2c/MobileD2C'), {
    loading: () => <Loading />,
    ssr: false,
});
const DesktopD2C = dynamic(() => import('../components/d2c/DesktopD2C'), {
    loading: () => <Loading />,
    ssr: false,
});

const D2C = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title> D2C - POS Solutions for D2C Brands, e-Commerce Platforms</title>
                <meta name="description" content="QueueBuster D2C POS Billing Solutions facilitate the seamless expansion of businesses from online to physical retail outlets, encompassing offline operations." />
                <link rel="canonical" href="https://queuebuster.co/D2C" />
                <link rel="alternate" href="https://queuebuster.co/D2C" hrefLang="en" />
                <meta property="og:title" content="D2C - POS Solutions for D2C Brands and Integrating with ERP, WMS, and OMS Systems." />
                <meta property="og:description" content="QueueBuster D2C POS Billing Solutions facilitate the seamless expansion of businesses from online stores to physical retail outlets, encompassing offline operations, and integrating with ERP, WMS, and OMS systems." />
                <meta property="og:url" content="https://new.queuebuster.co/D2C-POS-Solutions" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/OG_D2C_Npng.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                     "@context": "https://schema.org",
                     "@type": "SoftwareApplication",
                     "name": "QueueBuster POS",
                     "operatingSystem": "Android & Cloud Dashboard",
                     "aggregateRating": {
                       "@type": "AggregateRating",
                       "ratingValue": "4.7",
                       "ratingCount": "1647"
                     }
                   }`,
                    }}
                ></script>
            </Head>
            {
                mobileView ? <MobileD2C /> : <DesktopD2C />
            }
        </>
    )
}

export default D2C