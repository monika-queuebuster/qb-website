import React from 'react'
import Loading from "../../components/common/Loading";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileCrmLoyalty = dynamic(() => import('../../components/crmAndLoyalty/MobileCrmLoyalty'), {
  loading: () => <Loading />,
  ssr: false,
})
const DesktopCrmLoyalty = dynamic(() => import('../../components/crmAndLoyalty/DesktopCrmLoyalty'), {
  loading: () => <Loading />,
  ssr: false,
})
const crmLoyalty = ({ mobileView }) => {
  return (
    <>
      <Head>
        <title>QueueBuster's CRM & Loyalty Program Features- Try It Today!</title>
        <link rel="canonical" href="https://queuebuster.co/features/customer-loyalty-program" />
        <link rel="alternate" href="https://queuebuster.co/features/customer-loyalty-program" hrefLang="en" />
        <meta name="description" content="Discover seamless customer management with QueueBuster's CRM & Loyalty Program features. Enhance loyalty, streamline communication & boost sales. Try it today!" />
        <meta property="og:title" content="Boost Customer Engagement: Explore QueueBuster's CRM & Loyalty Program Features!" />
        <meta property="og:description" content="Elevate customer relationships with QueueBuster's CRM & Loyalty Program features! Strengthen engagement, drive loyalty, and increase sales. Explore today for seamless customer management!" />
        <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/New+OG+Image-05+(1).jpg" />
        <meta property="og:url" content="https://queuebuster.co/features/customer-loyalty-program" />
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
      {mobileView ? <MobileCrmLoyalty /> : <DesktopCrmLoyalty />}
    </>
  )
}

export default crmLoyalty