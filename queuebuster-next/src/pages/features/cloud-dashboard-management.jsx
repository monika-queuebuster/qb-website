import React from 'react'
import Loading from "../../components/common/Loading";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileCloudDashboard = dynamic(() => import('../../components/cloudDashboard/MobileCloudDashboard'), {
  loading: () => <Loading />,
  ssr: false,
})
const DesktopCloudDashboard = dynamic(() => import('../../components/cloudDashboard/DesktopCloudDashboard'), {
  loading: () => <Loading />,
  ssr: false,
})
const cloudDashboard = ({ mobileView }) => {
  return (
    <>
      <Head>
        <title>Business Managed Anytime, Anywhere with QB Cloud Dashboard</title>
        <link rel="canonical" href="https://queuebuster.co/features/cloud-dashboard-management" />
        <link rel="alternate" href="https://queuebuster.co/features/cloud-dashboard-management" hrefLang="en" />
        <meta name="description" content="Elevate your business with QueueBuster Cloud Dashboard. Manage anytime, anywhere. Streamline operations, boost productivity. Your business, your control." />
        <meta property="og:title" content="Business Managed Anytime, Anywhere with QueueBuster Cloud Dashboard - Try It For Free" />
        <meta property="og:description" content="Discover seamless business management anytime, anywhere with QueueBuster Cloud Dashboard. Streamline operations, enhance productivity, and stay in control, all at your fingertips. Experience the power of efficient management with our innovative solution." />
        <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/cloud-dashboard.jpg" />
        <meta property="og:url" content="https://queuebuster.co/features/cloud-dashboard-management" />
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
      {mobileView ? <MobileCloudDashboard /> : <DesktopCloudDashboard />}
    </>
  )
}

export default cloudDashboard