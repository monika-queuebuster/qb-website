// import AllInOneDesktop from "@/components/allInOne/AllInOneDesktop";
// import AllInOneMobile from "@/components/allInOne/AllInOneMobile";
import Loading from "@/components/common/Loading";
import switchStyles from "../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const AllInOneDesktop = dynamic(() => import("../components/allInOne/AllInOneDesktop"), {
   loading: () => <Loading />,
});

const AllInOneMobile = dynamic(() => import("../components/allInOne/AllInOneMobile"), {
   loading: () => <Loading />,
});

const AllInOnePos = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>QueueBuster All-in-One POS Billing Software for  Retail businesses in India</title>
            <meta
               name="description"
               content="QueueBuster POS Billing Software for retail shop, employee management, vendor management. online & offline billing for small & large businesses."
            />
            <link rel="canonical" href="https://queuebuster.co/all-in-one-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/all-in-one-billing-software" hrefLang="en" />
            <meta
               property="og:title"
               content="Make your business Automated with QueueBuster POS!"
            />
            <meta
               property="og:description"
               content="Modify your retail shop with QueueBuster's comprehensive All-in-One POS Billing Software. Simplify operations, manage inventory, and enhance customer experiences. Get free demo today!"
            />
            <meta property="og:url" content="https://queuebuster.co/all-in-one-pos-billing-software" />
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
            mobileView ? <AllInOneMobile /> : <AllInOneDesktop />
         }
      </>
   );
};

export default AllInOnePos;
