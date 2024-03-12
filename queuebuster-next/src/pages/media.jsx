import React from 'react'
import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const MediaDesktop = dynamic(() => import("../components/media/MediaDesktop"), {
  loading: () => <Loading />,
})

const MediaMobile = dynamic(() => import("../components/media/MediaMobile"), {
  loading: () => <Loading />,
});

const media = ({ mobileView }) => {
  return (
    <>
      <Head>
        <title>Explore News, Awards and Recognition About QB POS</title>
        <meta name="description" content="Explore news, stories, awards, and recognition about QueueBuster POS in the media. Trusted by 65,000+ happy merchants. Call Us & Schedule a Free Demo" />
        <link rel="canonical" href="https://queuebuster.co/media" />
        <link rel="alternate" href="https://queuebuster.co/media" hrefLang="en" />
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

      {mobileView ? <MediaMobile /> : <MediaDesktop />}
    </>
  )
}

export default media