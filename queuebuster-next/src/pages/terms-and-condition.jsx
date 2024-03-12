import switchStyles from "../styles/desktopMobileSwitch.module.css";
import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const TermsAndConditionDesktop = dynamic(
   () => import("../components/termsAndCondition/termsAndCondDesktop"),
   {
      loading: () => <Loading />,
   }
);
const TermsAndConditionMobile = dynamic(
   () => import("../components/termsAndCondition/termsAndConditonMobile"),
   {
      loading: () => <Loading />,
   }
);

const TermsAndCondition = (props) => {
   // const { termsData } = props;
   return (
      <>
         <Head>
            <title>QueueBuster Terms and Conditions: Transparency and Trust</title>
            <meta
               name="description"
               content="Discover QueueBuster's transparent and trustworthy Terms and Conditions. Learn about our commitment to fair and secure business practices. Your trust is our priority."
            />
            <link rel="canonical" href="https://queuebuster.co/terms-and-condition" />
            <link rel="alternate" href="https://queuebuster.co/terms-and-condition" hrefLang="en" />
            <meta
               property="og:title"
               content="QueueBuster Terms and Conditions: Transparency and Trust"
            />
            <meta
               property="og:description"
               content="Discover QueueBuster's transparent and trustworthy Terms and Conditions. Learn about our commitment to fair and secure business practices. Your trust is our priority."
            />
            <meta property="og:url" content="https://queuebuster.co/terms-and-condition" />
         </Head>
         
         <div className={switchStyles.desktop}>
         <TermsAndConditionDesktop />
         </div>
         <div className={switchStyles.mobile}>
            <TermsAndConditionMobile />
         </div>
      </>
   );
};

export default TermsAndCondition;
