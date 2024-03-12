import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const SpaAndSalon = dynamic(() => import("../../components/industries/SpaAndSalon/SpaAndSalon"), {
   loading: () => <Loading />,
});

const MobileSpaAndSalon = dynamic(() => import("../../components/industries/SpaAndSalon/MobileSpaAndSalon"), {
   loading: () => <Loading />,
});

const SpaSalon = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>Spa & Salon Management Software for Billing and Bookings</title>
            <meta name="description" content="Streamline spa & salon operations with our software. Seamlessly manage billing, appointments, and bookings. Experience a free demo and elevate customer today." />
            <link rel="canonical" href="https://queuebuster.co/Industries/spa-and-salon-pos-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/Industries/spa-and-salon-pos-billing-software" hrefLang="en" />
            <meta property="og:title" content="India's No.1 POS Billing Software for Spa & Salon & Beauty Parlour - Get a Free Demo" />
            <meta property="og:description" content="Discover India's No.1 POS Billing Software for Spa, Salon, and Beauty Parlours - Effortlessly manage appointments, billing, inventory, and more! Download the QueueBuster POS app and start your free experience with us." />
            <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/images-website/og-spasalon.jpg" />
            <meta property="og:url" content="https://queuebuster.co/Industries/spa-and-salon-pos-billing-software" />
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
         {mobileView ? <MobileSpaAndSalon /> : <SpaAndSalon />}
      </>
   );
};

export default SpaSalon;
