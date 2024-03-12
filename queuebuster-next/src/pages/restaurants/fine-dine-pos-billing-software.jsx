import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopFoodTruck = dynamic(() => import('../../components/restaurants/fineDine/DesktopFineDine'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileFoodTruck = dynamic(() => import('../../components/restaurants/fineDine/MobileFineDine'), {
    loading: () => <Loading />,
    ssr: false,
});

const fineDine = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Fine Dining POS Billing Software & Management Systems</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/fine-dine" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/fine-dine" hrefLang='en' />
                <meta name="description" content=" Refine your fine dining experience with sophisticated billing software and POS management systems. Streamline your daily operations, including KOT and inventory" />
                <meta property="og:title" content="Fine Dining POS Billing Software & Restaurant Management Systems" />
                <meta property="og:description" content="Refine your fine dining experience with sophisticated billing software and precision management systems. Streamline your daily operations, including KOT and inventory management, seamlessly." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/fine-dine.jpg" />
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
                mobileView ? <MobileFoodTruck /> : <DesktopFoodTruck />
            }
        </>
    )
}

export default fineDine