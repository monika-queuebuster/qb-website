import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopFMCG = dynamic(() => import('../../components/grocery/fmcg/DesktopFMCG'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileFMCG = dynamic(() => import('../../components/grocery/fmcg/MobileFMCG'), {
    loading: () => <Loading />,
    ssr: false,
});


const fmcg = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Billing Software for FMCG Retailers, Distributors and Wholesalers</title>
                <meta name="description" content="Empower your FMCG business with QueueBuster POS! Tailored billing software for retailers, distributors, and wholesalers. Streamline operations effortlessly."
                />
                <link rel="canonical" href="https://queuebuster.co/grocery/fmcg-pos-billing-software" />
                <link rel="alternate" href="https://queuebuster.co/grocery/fmcg-pos-billing-software" hrefLang="en" />
                <meta property="og:title" content="Billing Software for FMCG Retailers, Distributors and Wholesalers - Get a Free Demo" />
                <meta property="og:description" content="Revolutionize your FMCG business with QueueBuster POS! Our advanced billing software caters to retailers, distributors, and wholesalers, streamlining operations for seamless growth." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/fmcg.jpg"
                />
                <meta property="og:url" content="https://queuebuster.co/grocery/fmcg-pos-billing-software" />
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
                mobileView ? <MobileFMCG /> : <DesktopFMCG />
            }
        </>
    )
}

export default fmcg