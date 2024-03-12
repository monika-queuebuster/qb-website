import React from 'react'
import Loading from "../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileMPOS = dynamic(() => import('../components/mPos/MobileMPOS'), {
  loading: () => <Loading />,
  ssr: false,
});
const DesktopMPOS = dynamic(() => import('../components/mPos/DesktopMPOS'), {
  loading: () => <Loading />,
  ssr: false,
});

const enterprise = ({mobileView}) => {
  return (
    <>
      <Head>
        <title>QB mPOS - Use Your Android Mobile Like POS Billing Machine</title>
        <meta name="description" content="Transform your Android phone into a powerful POS billing machine with QB mPOS. Accept payments seamlessly and manage your online and offline store with ease." />
        <meta property="og:title" content="QueueBuster mPOS - Use Your Android Mobile Like POS Billing Machine | Android POS Billing" />
        <meta property="og:description" content="Elevate your business with QueueBuster mPOS – harness the capabilities of an Android mobile as a POS billing machine. Experience efficiency and reliability for seamless Android POS billing." />
        {/* <meta property="og:url" content="https://queuebuster.co/enterprise-pos-solution" /> */}
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
        mobileView ? <MobileMPOS /> : <DesktopMPOS />
      }
    </>
  )
}

export default enterprise