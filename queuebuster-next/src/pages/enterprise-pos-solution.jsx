import React from 'react'
import Loading from "../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileEnterprise = dynamic(() => import('../components/enterprise/MobileEnterprise'), {
  loading: () => <Loading />,
  ssr: false,
});
const DesktopEnterprise = dynamic(() => import('../components/enterprise/DesktopEnterprise'), {
  loading: () => <Loading />,
  ssr: false,
});

const enterprise = ({mobileView}) => {
  return (
    <>
      <Head>
        <title>Making Big Businesses Bigger With Omnichannel POS Solutions</title>
        <meta name="description" content="Streamlined business management and unified commerce solutions that simplify retail to provide a seamless experience through advanced POS Solutions for your business and customers." />
        <link rel="canonical" href="https://queuebuster.co/enterprise-pos-solution" />
        <link rel="alternate" href="https://queuebuster.co/enterprise-pos-solution" hrefLang="en" />
        <meta property="og:title" content="Making Big Businesses Bigger With Omnichannel POS Solutions" />
        <meta property="og:description" content="Streamlined business management and unified commerce solutions that simplify retail to provide a seamless experience through advanced POS Solutions for your business and customers." />
        <meta property="og:url" content="https://queuebuster.co/enterprise-pos-solution" />
        <meta
          property="og:image"
          content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/ALL-IN-ONE_OG.png"
        />
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
        mobileView ? <MobileEnterprise /> : <DesktopEnterprise />
      }
    </>
  )
}

export default enterprise