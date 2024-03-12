import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopKiranStores = dynamic(() => import('../../components/grocery/kirana-stores/DesktopKiranaStores'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileKiranaStores = dynamic(() => import('../../components/grocery/kirana-stores/MobileKiranaStores'), {
    loading: () => <Loading />,
    ssr: false,
});


const fmcg = ({ mobileView }) => {
    return (
        <><Head>
            <title>Kirana Billing Software with Inventory, Online Store, CRM & Loyalty</title>
            <meta name="description" content="Efficient kirana billing software: Streamline billing, manage inventory, CRM, and loyalty programs seamlessly for your convenience. Start 30 Days Free Trail"
            />
            <link rel="canonical" href="https://queuebuster.co/grocery/kirana-stores-pos-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/grocery/kirana-stores-pos-billing-software" hrefLang="en" />
            <meta property="og:title" content="Kirana Billing Software with Inventory, Online Store, CRM & Loyalty" />
            <meta property="og:description" content="Efficient kirana billing software: Streamline billing, manage inventory, CRM, and loyalty programs seamlessly for your convenience. Start 30 Days Free Trail" />
            <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/kirana-stores.jpg"
            />
            <meta property="og:url" content="https://queuebuster.co/grocery/kirana-stores-pos-billing-software" />
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
                mobileView ? <MobileKiranaStores /> : <DesktopKiranStores />
            }
        </>
    )
}

export default fmcg