import Loading from "@/components/common/Loading";
import switchStyles from "../styles/desktopMobileSwitch.module.css";
// import GetFreeDemoDesktopNew from "../components/getFreeDemo/getfreedemoactual";
// import GetFreeDemoMobile from "@/components/getFreeDemo/GetFreeDemoMobile";
import dynamic from "next/dynamic";
import Head from "next/head";

const GetFreeDemoDesktopNew = dynamic(() => import("../components/getFreeDemo/getfreedemoactual"), {
   loading: () => <Loading />,
   ssr: false,
});

const GetFreeDemoMobile = dynamic(() => import("../components/getFreeDemo/GetFreeDemoMobile"), {
   loading: () => <Loading />,
   ssr: false,
});

const GetFreeDemoEn = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>Personalised Demo from QueueBuster POS Billing Software Company</title>
            <meta name="description" content="Experience the future of business management with a personalized demo from QueueBuster, a leading POS billing software company. Request your demo today!" />
            <link rel="canonical" href="https://queuebuster.co/get-free-demo" />
            <link rel="alternate" href="https://queuebuster.co/get-free-demo" hrefLang="en" />
            <meta property="og:title" content="Personalised Demo from QueueBuster POS Billing Software Company" />
            <meta property="og:description" content="Experience the future of business management with a personalized demo from QueueBuster, a leading POS billing software company. Discover the power of seamless operations and enhanced efficiency. Request your demo today!" />
            <meta property="og:url" content="https://queuebuster.co/get-free-demo" />
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
            mobileView ? <GetFreeDemoMobile /> : <GetFreeDemoDesktopNew />
         }
      </>
   );
};

export default GetFreeDemoEn;
