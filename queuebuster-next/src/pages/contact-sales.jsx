import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const DesktopEnterpriseForm = dynamic(() => import("../components/enterpriseForm/DesktopEnterpriseForm"), {
  ssr: false,
  loading: () => <Loading />,
});

const MobileEnterpriseForm = dynamic(() => import("../components/enterpriseForm/MobileEnterpriseForm"), {
  loading: () => <Loading />,
  ssr: false,
});

const contactSales = ({ mobileView }) => {
  return (
    <>
      <Head>
        <title>Contact Sales for Enterprise POS Solution by QueueBuster</title>
        <meta name="description" content="Tailored for large-scale operations, our powerful Point of Sale system streamlines processes, boosts sales, and maximizes productivity. Contact our sales team today." />
        <link rel="canonical" href="https://queuebuster.co/contact-sales" />
        <link rel="alternate" href="https://queuebuster.co/contact-sales" hrefLang="en" />
        <meta property="og:title" content="Contact Sales for Enterprise POS Solution by QueueBuster - Talk to An Expert" />
        <meta property="og:description" content="Unlock efficiency and elevate your business with QueueBuster's Enterprise POS Solution. Tailored for large-scale operations, our powerful Point of Sale system streamlines processes, boosts sales, and maximizes productivity. Contact our sales team today." />
        <meta property="og:url" content="https://queuebuster.co/contact-sales" />
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
        mobileView ? <MobileEnterpriseForm /> : <DesktopEnterpriseForm />
      }
    </>
  );
};

export default contactSales;
