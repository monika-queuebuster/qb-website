import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopDryfruits = dynamic(() => import('../../components/grocery/dry-fruits/DesktopDryfruits'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileDryfruits = dynamic(() => import('../../components/grocery/dry-fruits/MobileDryfruits'), {
    loading: () => <Loading />,
    ssr: false,
});


const dryfruits = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Billing Software for Dry Fruits Retailers, Distributors and Wholesalers</title>
                <meta name="description" content="QueueBuster POS offers billing software tailored for retailers, distributors, and wholesalers. Streamline transactions effortlessly. Start 30 Days Free Trial"
                />
                <link rel="canonical" href="https://queuebuster.co/grocery/dryfruits-pos-billing-software" />
                <link rel="alternate" href="https://queuebuster.co/grocery/dryfruits-pos-billing-software" hrefLang="en" />
                <meta property="og:title" content="Billing Software for Dry Fruits Retailers, Distributors and Wholesalers – Get a Free Demo" />
                <meta property="og:description" content="Transform your dry fruits business with QueueBuster POS! Our comprehensive billing software is tailored specifically for retailers, distributors, and wholesalers. Try QueueBuster POS today and take your business to new heights!" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/dryfruits.jpg"
                />
                <meta property="og:url" content="https://queuebuster.co/grocery/dryfruits-pos-billing-software" />
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
                mobileView ? <MobileDryfruits /> : <DesktopDryfruits />
            }
        </>
    )
}

export default dryfruits