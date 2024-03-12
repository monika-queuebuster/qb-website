import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopSupermarket = dynamic(() => import('../../components/grocery/supermarkets/DesktopSupermarket'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileSupermarket = dynamic(() => import('../../components/grocery/supermarkets/MobileSupermarket'), {
    loading: () => <Loading />,
    ssr: false,
});


const fmcg = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Supermarket Billing Software | Supermarket Billing System</title>
                <meta name="description" content="Power-packed Supermarket Billing Software featuring Barcode Billing, Inventory Management, Online Selling with QB eStore, and Purchase Management. Get a Free Demo"
                />
                <link rel="canonical" href="https://queuebuster.co/grocery/supermarket-pos-billing-software" />
                <link rel="alternate" href="https://queuebuster.co/grocery/supermarket-pos-billing-software" hrefLang="en" />
                <meta property="og:title" content="Supermarket Billing Software | Supermarket Billing System - Get a Free Demo" />
                <meta property="og:description" content="Discover our supercharged Supermarket Billing Software! Enjoy Barcode Billing, Inventory Management, Online Selling via QB eStore, and Purchase Management all in one powerful platform." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/supermarkets.jpg"
                />
                <meta property="og:url" content="https://queuebuster.co/grocery/supermarket-pos-billing-software" />
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
                mobileView ? <MobileSupermarket /> : <DesktopSupermarket />
            }
        </>
    )
}

export default fmcg