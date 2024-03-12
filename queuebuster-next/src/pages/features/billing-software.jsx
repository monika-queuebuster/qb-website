import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopBilling = dynamic(() => import('../../components/billing/DesktopBilling'), {
    loading: () => <Loading />,
    ssr: false,
})
const MobileBilling = dynamic(() => import('../../components/billing/MobileBilling'), {
    loading: () => <Loading />,
    ssr: false,
})
const billing = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Best Billing Software for Retailers with Free GST Invoice</title>
                <link rel="canonical" href="https://queuebuster.co/features/billing-software" />
                <link rel="alternate" href="https://queuebuster.co/features/billing-software" hrefLang="en" />
                <meta name="description" content="Get the best billing software for retailers! Free GST invoice generation, seamless transactions, and effortless management. Upgrade your business today!" />
                <meta property="og:title" content="QB Billing- Best Billing Software for Retailers with Free GST Invoice Generation" />
                <meta property="og:description" content="Upgrade your retail business with QB Billing, the best billing software offering free GST invoice generation. Streamline transactions and manage inventory effortlessly. Elevate your efficiency today!" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/OG-Image_Billing+(1).jpg" />
                <meta property="og:url" content="https://queuebuster.co/features/billing-software" />
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
            {mobileView ? <MobileBilling /> : <DesktopBilling />}
        </>
    )
}

export default billing