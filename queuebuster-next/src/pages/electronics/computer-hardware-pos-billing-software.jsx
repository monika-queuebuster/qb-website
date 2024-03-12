import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopCompHardware = dynamic(() => import('../../components/electronics/computer-hardware/DesktopComputerHardware'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileCompHardware = dynamic(() => import('../../components/electronics/computer-hardware/MobileComputerHardware'), {
    loading: () => <Loading />,
    ssr: false,
});
const electronicsShowroom = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Computer Hardware Store Billing Software & POS Solutions</title>
                <link rel="canonical" href="https://queuebuster.co/electronics/computer-hardware" />
                <link rel="alternate" href="https://queuebuster.co/electronics/computer-hardware" hrefLang='en' />
                <meta name="description" content="Optimize your computer hardware store with cutting-edge billing software and efficient POS solutions. Streamline transactions & manage daily stock effortlessly." />
                <meta property="og:title" content="Computer Hardware Store Billing Software & POS Solutions | QueueBuster Android POS" />
                <meta property="og:description" content="Optimize your computer hardware store with cutting-edge billing software and efficient POS solutions. Streamline transactions, manage inventory, and enhance customer service seamlessly with QueueBuster POS." />
                <meta property="og:url" content="https://queuebuster.co/electronics/computer-hardware" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/computer-hardware.jpg" />
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
            {mobileView ? <MobileCompHardware /> : <DesktopCompHardware />}
        </>
    )
}
export default electronicsShowroom