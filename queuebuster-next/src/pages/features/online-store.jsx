import React from 'react'
import Loading from "../../components/common/Loading";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileEStore = dynamic(() => import('../../components/eStore/MobileEStore'), {
  loading: () => <Loading />,
  ssr: false,
})
const DesktopEStore = dynamic(() => import('../../components/eStore/DesktopEStore'), {
  loading: () => <Loading />,
  ssr: false,
})
const eStore = ({ mobileView }) => {
  return (
    <>
      <Head>
        <title>QB eStore- Create a Free Online Store for Your Shop & Outlets</title>
        <link rel="canonical" href="https://queuebuster.co/features/online-store" />
        <link rel="alternate" href="https://queuebuster.co/features/online-store" hrefLang="en" />
        <meta name="description" content="QueueBuster eStore: Build a Free Online Store or eCommerce website for Your Shop & Outlets. Quick setup, seamless transactions. Start selling online today!" />
        <meta property="og:title" content="QB eStore- Create a Free Online Store or eCommerce Website for Your Shop & Outlets" />
        <meta property="og:description" content="QueueBuster eStore enables you to easily create a Free Online Store or eCommerce website for your shop and outlets. Seamless setup, enhanced customer experience. Start selling online today!" />
        <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/New-OG-Image-04+(1).jpg" />
        <meta property="og:url" content="https://queuebuster.co/features/online-store" />
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
      {mobileView ? <MobileEStore /> : <DesktopEStore />}
    </>
  )
}

export default eStore