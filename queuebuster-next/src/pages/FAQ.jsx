import { inter_Bold } from "@/components/common/Fonts";
import React from "react";
import content from "../language/ENGLISH.json"

const FAQ = () => {
   const { commonViewAllQuestion, commonFrequentlyAskedQuestions } = content
   return (
      <>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               margin: "0 7rem",
               padding: "0 8rem",
            }}
         >
            <center>
               <h1 className={inter_Bold} style={{ marginBottom: "3rem", fontSize: "2.8rem" }}>
                  {commonFrequentlyAskedQuestions}
               </h1>
            </center>
            <div
               style={{
                  border: "0.1rem solid gainsboro",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "4rem 0 3rem 0rem",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.4rem 1.2rem",
               }}
            >
               <h5
                  style={{
                     color: "#2A6AB4",
                     font: "normal normal bold 1.6rem/2.4rem Inter",
                     cursor: "pointer",
                  }}
               >
                  {commonViewAllQuestion}
               </h5>
            </div>
         </div>
      </>
   );
};

export default FAQ;
