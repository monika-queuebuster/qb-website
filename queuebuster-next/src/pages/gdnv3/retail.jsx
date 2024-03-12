import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopRetail = dynamic(() => import("../../components/gdnv3/retail/DesktopRetail"), {
   loading: () => <Loading />,
}
);

const MobilRetail = dynamic(() => import("../../components/gdnv3/retail/MobileRetail"), {
   loading: () => <Loading />,
}
);

const retail = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>QueueBuster™ All-in-One POS - India's Business Super App!</title>
            <link rel="alternate" hreflang="en-us" href="https://queuebuster.co" />
            <meta property="og:type" content="website" />
            <meta name="robots" content="noindex"></meta>
         </Head>
         {
            mobileView ? <MobilRetail /> : <DesktopRetail />
         }
      </>
   );
};

export default retail;
