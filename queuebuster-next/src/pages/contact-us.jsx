import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const DesktopContactUs = dynamic(() => import("../components/contactUs/DesktopContactUs"), {
   ssr: false,
   loading: () => <Loading />,
});

const MobileContactUs = dynamic(() => import("../components/contactUs/MobileContactUs"), {
   loading: () => <Loading />,
   ssr: false,
});

const ContactUs = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>Contact QueueBuster POS Billing Software - Call 7876 180 180</title>
            <meta name="description" content="Contact QueueBuster today at 7876 180 180 for seamless transactions and enhanced efficiency. Discover the future of billing solutions & Schedule a Free Demo." />
            <link rel="canonical" href="https://queuebuster.co/contact-us" />
            <link rel="alternate" href="https://queuebuster.co/contact-us" hrefLang="en" />
            <meta property="og:title" content="Contact QueueBuster POS Billing Software |  Call 78 76 180 180" />
            <meta property="og:description" content="Connect with QueueBuster, your ultimate destination for POS billing solutions. Reach out for expert guidance on our Android POS app and streamline your business effortlessly." />
            <meta property="og:url" content="https://queuebuster.co/contact-us" />
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
            mobileView ? <MobileContactUs /> : <DesktopContactUs />
         }
      </>
   );
};

export default ContactUs;
