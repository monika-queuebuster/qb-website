import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopDermatologist = dynamic(() => import('../../components/spa-salon/dermatologist/DesktopDermatologist'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileDermatologist = dynamic(() => import('../../components/spa-salon/dermatologist/MobileDermatologist'), {
    loading: () => <Loading />,
    ssr: false,
});

const dermatologistPOSBillingSoftware = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Skin Clinic Billing & Management Software - Get a Free Demo</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/fine-dine" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/fine-dine" hrefLang='en' />
                <meta name="description" content="Discover comprehensive Skin Clinic Billing & Management Software by QueueBuster POS. Streamline operations for dermatology, Botox, and Trichology." />
                <meta property="og:title" content="Skin Clinic Billing & Management Software in India - Get Started With a Free Trial" />
                <meta property="og:description" content="Discover comprehensive Skin Clinic Billing & Management Software by QueueBuster POS. Streamline operations for dermatology, Botox, and trichology. Request your free demo now!" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/derma.jpg" />
                <meta property="og:url" content="https://queuebuster.co/restaurants/fine-dine" />
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
                mobileView ? <MobileDermatologist /> : <DesktopDermatologist />
            }
        </>
    )
}

export default dermatologistPOSBillingSoftware