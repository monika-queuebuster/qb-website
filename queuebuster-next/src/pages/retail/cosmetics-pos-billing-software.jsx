import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopCosmetics = dynamic(() => import('../../components/retail/cosmetics/DesktopCosmetics'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileCosmetics = dynamic(() => import('../../components/retail/cosmetics/MobileCosmetics'), {
    loading: () => <Loading />,
    ssr: false,
});


const cosmetics = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Beauty & Cosmetic Store Billing Software with POS & Inventory</title>
                <link rel="canonical" href="https://queuebuster.co/retail/cosmetics" />
                <link href="https://queuebuster.co/retail/cosmetics" hrefLang='en' />
                <meta name="description" content="Beauty & Cosmetic Store Billing Software with POS, Inventory management, customer loyalty program, shop management and daily sales reporting. Book a Free Demo" />
                <meta property="og:title" content="Beauty & Cosmetic Store Billing Software with POS & Inventory Management" />
                <meta property="og:description" content="Optimize your beauty and cosmetic store with our robust billing software. From efficient POS and inventory management to customer loyalty programs and shop management, empower your business with insightful daily sales reporting. Book a free demo." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/cosmetics.jpg" />
                <meta property="og:url" content="https://queuebuster.co/retail/cosmetics" />
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
                mobileView ? <MobileCosmetics /> : <DesktopCosmetics />
            }
        </>
    )
}

export default cosmetics