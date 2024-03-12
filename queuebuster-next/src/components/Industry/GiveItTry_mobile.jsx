import { BlackCustomButton, CustomButton } from "../qbStrap";
import styles from "../../styles/qbStrap.module.css";
import { inter_Bold } from "../common/Fonts";
import content from "../../language/ENGLISH.json";
import { useRouter } from "next/router";
import { useBusinessContext } from "@/services/BuisnessTypeContext";
import Image from "next/image";

const GiveItTryMobile = (props) => {
   const router = useRouter();
   const { homePageReadyToGiveItATry, homePageReadyToGiveItAtryDesc, contatcSales } = content;
   const { businessType, setBusinessType } = useBusinessContext();
   return (
      <>
         <div style={{ margin: "17rem 2rem 0 2rem" }}>
            <div
               style={{
                  borderRadius: "1.5rem 1.5rem 0 0",
                  height: "14rem",
               }}
            >
               <div style={{ width: "36rem", height: "30rem", position: "relative", bottom: "12rem" }}>
                  <Image
                     style={{
                        ...props.imgStyle,
                     }}
                     src={props.image}
                     alt="err"
                     fill
                  />
               </div>
            </div>
            <h4
               className={inter_Bold.className}
               style={{
                  font: "normal normal 700 2.5rem/3rem Inter",
                  color: " #222222",
                  margin: "6rem 0 0 0",
                  width: "80%",
               }}
            >
               {props.heading ? props.heading : homePageReadyToGiveItATry}
            </h4>
            <p style={{ margin: "2.5rem 0 0 0" }}>
               {props.description ? props.description : homePageReadyToGiveItAtryDesc}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
               <BlackCustomButton text={props?.btnText ? props?.btnText : contatcSales} style={{ padding: "0 2rem", marginTop: "2rem" }}
                  onClick={(e) => {
                     setBusinessType(props?.usedIn);
                     router.push(props?.redirectionLink ? props?.redirectionLink : "/contact-sales");
                  }} />
               {props?.usedIn === 'pricing' &&
                  // <CustomButton
                  //    text="Get Free Demo"
                  //    styles={{
                  //       backgroundColor: "#000D4B",
                  //       fontSize: "1.31rem",
                  //       color: "#FFFFFF",
                  //       height: "4.5rem",
                  //       width: "14.6rem",
                  //       marginTop: "2rem",
                  //       fontWeight: "600",
                  //       border: `0.1rem solid #000D4B`,
                  //    }}
                  //    onClick={() => router.push("/get-free-demo")}
                  // />
                  <BlackCustomButton text="Get Free Demo" style={{ padding: "0 2rem" }} onClick={() => router.push("/get-free-demo")} />
               }
            </div>
         </div>
      </>
   );
};
export default GiveItTryMobile;
