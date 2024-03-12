import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopGrocery = dynamic(() => import("../../components/gdnv3/grocery/DesktopGrocery"), {
    loading: () => <Loading />,
}
);

const MobileGrocery = dynamic(() => import("../../components/gdnv3/grocery/MobileGrocery"), {
    loading: () => <Loading />,
}
);

const grocery = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>QueueBuster™ All-in-One POS - India's Business Super App!</title>
                <link rel="alternate" hreflang="en-us" href="https://queuebuster.co" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="noindex"></meta>
            </Head>
            {
                mobileView ? <MobileGrocery /> : <DesktopGrocery />
            }
        </>
    );
};

export default grocery;
