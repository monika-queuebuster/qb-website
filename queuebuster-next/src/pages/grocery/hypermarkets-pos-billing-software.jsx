import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopHypermarkets = dynamic(() => import('../../components/grocery/hypermarkets/DesktopHypermarkets'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileHypermarkets = dynamic(() => import('../../components/grocery/hypermarkets/MobileHypermarkets'), {
    loading: () => <Loading />,
    ssr: false,
});


const fmcg = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Hypermarket Billing Software in India - Get a Free Demo</title>
                <meta name="description" content="QueueBuster POS offers powerful hypermarket billing software with low stock alerts, inventory management, and a customer loyalty program. Get a Free Demo"
                />
                <link rel="canonical" href="https://queuebuster.co/grocery/hypermarkets-pos-billing-software" />
                <link rel="alternate" href="https://queuebuster.co/grocery/hypermarkets-pos-billing-software" hrefLang="en" />
                <meta property="og:title" content="Hypermarket Billing Software in India - Get a Free Demo" />
                <meta property="og:description" content="QueueBuster POS offers powerful hypermarket billing software with low stock alerts, inventory management, and a customer loyalty program. Get a Free Demo" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/hypermarkets.jpg"
                />
                <meta property="og:url" content="https://queuebuster.co/grocery/hypermarkets-pos-billing-software" />
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
                mobileView ? <MobileHypermarkets /> : <DesktopHypermarkets />
            }
        </>
    )
}

export default fmcg