import switchStyles from "../styles/desktopMobileSwitch.module.css";
import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";

const ThankYou = dynamic(() => import("../components/ThankYou/ThankYou"), {
   loading: () => <Loading />,
});

const ThankYouMobile = dynamic(() => import("../components/ThankYou/ThankyouMobile"), {
   loading: () => <Loading />,
});

function ThankYouEn() {
   return (
      <>
         <div className={switchStyles.desktop}>
            <ThankYou />
         </div>
         <div className={switchStyles.mobile}>
            <ThankYouMobile />
         </div>
      </>
   );
}

export default ThankYouEn;
