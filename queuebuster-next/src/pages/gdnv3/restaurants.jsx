import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopRestaurant = dynamic(() => import("../../components/gdnv3/restraurants/DesktopRestaurant"), {
    loading: () => <Loading />,
}
);

const MobileRestaurant = dynamic(() => import("../../components/gdnv3/restraurants/MobileRestaurant"), {
    loading: () => <Loading />,
}
);

const restaurants = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>QueueBuster™ All-in-One POS - India's Business Super App!</title>
                <meta
                    name="description"
                    content="QueueBuster POS: Elevate your cafe, fine dining, and pizzeria experience with our specialized restaurant billing software. Streamline operations effortlessly."
                />
                <link rel="alternate" hreflang="en-us" href="https://queuebuster.co" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="noindex"></meta>
            </Head>
            {
                mobileView ? <MobileRestaurant /> : <DesktopRestaurant />
            }
        </>
    );
};

export default restaurants;
