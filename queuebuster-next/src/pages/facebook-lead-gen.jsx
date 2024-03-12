import React from 'react'
import Loading from "../components/common/Loading";
import switchStyles from "../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const facebookLeadGen = ({ mobileView }) => {
    const MobileFBLeadGen = dynamic(() => import('../components/FBLeadGen/MobileFBLeadGen'), {
        loading: () => <Loading />,
        ssr: false,
    });

    const DesktopFBLeadGen = dynamic(() => import('../components/FBLeadGen/DesktopFBLeadGen'), {
        loading: () => <Loading />,
        ssr: false,
    });

    return (
        <>
            <Head>
                <title>Facebook Demo Form | QueueBuster Android Billing Software</title>
                <meta name="description" content="Interested in getting in touch with QueueBuster POS team? Simply submit your details for our experts to reach out." />
                <link rel="canonical" href="https://queuebuster.co/facebook-lead-gen" />
                <link rel="alternate" href="https://queuebuster.co/facebook-lead-gen" hrefLang="en" />
                <meta property="og:url" content="https://queuebuster.co/facebook-lead-gen" />
                <meta name="robots" content="noindex"></meta>
                <meta
                    property="og:image"
                    content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/ALL-IN-ONE_OG.png"
                />
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
                mobileView ? <MobileFBLeadGen /> : <DesktopFBLeadGen />
            }
        </>
    )
}

export default facebookLeadGen