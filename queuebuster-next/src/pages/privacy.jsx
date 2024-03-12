import switchStyles from "../styles/desktopMobileSwitch.module.css";
import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";


const PrivacyDesktop = dynamic(() => import("../components/privacy/PrivacyDesktop"), {
   loading: () => <Loading />,
});
const PrivacyMobile = dynamic(() => import("../components/privacy/PrivacyMobile"), {
   loading: () => <Loading />,
});

const Privacy = () => {
   return (
      <>
         <Head>
            <title>QueueBuster Privacy Policy: Your Data, Our Commitment</title>
            <meta
               name="description"
               content="Explore QueueBuster's Privacy Policy - We're dedicated to safeguarding your data. Discover how we prioritize your privacy and security. Trust QueueBuster for a secure experience."
            />
            <link rel="canonical" href="https://queuebuster.co/privacy" />
            <link rel="alternate" href="https://queuebuster.co/privacy" hrefLang="en" />
            <meta
               property="og:title"
               content="QueueBuster Privacy Policy: Your Data, Our Commitment"
            />
            <meta
               property="og:description"
               content="Explore QueueBuster's Privacy Policy - We're dedicated to safeguarding your data. Discover how we prioritize your privacy and security. Trust QueueBuster for a secure experience."
            />
            <meta property="og:url" content="https://queuebuster.co/privacy" />
         </Head>
         <div className={switchStyles.desktop}>
            <PrivacyDesktop />
         </div>
         <div className={switchStyles.mobile}>
            <PrivacyMobile />
         </div>
      </>
   );
};

export default Privacy;
