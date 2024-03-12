import Image from "next/image";
import content from "../../language/ENGLISH.json";

const BusinessSuperApp = () => {
   const {
      quickBill,
      Billing,
      Khata,
      cRMLoyalty,
      ewayBilling,
      eStore,
      eInvoicing,
      reporting,
      digitalPayments,
      inventoryManagement,
      allinonePOS,
      businessSuperApp,
   } = content.allInOne;

   const leftIconsData = [
      {
         image: "/assets/AllInOne/quickBill.svg",
         title: quickBill,
         altText: 'quick bill',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/billing.svg",
         title: Billing,
         altText: 'billing',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/inventoryManagement.svg",
         title: inventoryManagement,
         altText: 'inventory management',
         width: '10rem'
      },
      {
         image: "/assets/AllInOne/estore.svg",
         title: eStore,
         altText: 'estore',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/khata.svg",
         title: Khata,
         altText: 'khata',
         width: '6rem'
      },
   ];
   const rightIconsData = [
      {
         image: "/assets/AllInOne/crm-logo.svg",
         title: cRMLoyalty,
         altText: 'crm',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/digitalPayments.svg",
         title: digitalPayments,
         altText: 'digital payments',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/reporting.svg",
         title: reporting,
         altText: 'reporting',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/ebilling.svg",
         title: ewayBilling,
         altText: 'ebilling',
         width: '6rem'
      },
      {
         image: "/assets/AllInOne/einvoicing.svg",
         title: eInvoicing,
         altText: 'einvoicing',
         width: '6rem'
      },
   ];
   return (
      <div style={{ textAlign: "center" }}>
         <h2 style={{ fontSize: "4rem", fontWeight: "600" }}>{allinonePOS}</h2>
         <div style={{ fontSize: "4rem", fontWeight: "300" }}>{businessSuperApp}</div>
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
               marginLeft: "15rem",
               marginRight: "15rem",
               marginTop: "4.5rem",
            }}
         >
            <div>
               {leftIconsData.map((item) => {
                  return (
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "2rem",
                           marginBottom: "4rem",
                           width: "25rem",
                        }}
                     >
                        <div style={{ height: "6rem", width: item.width, position: 'relative' }}><Image src={item.image} alt={item?.altText} fill /></div>
                        <div style={{ fontSize: "2.5rem", textAlign: "left" }}>{item.title}</div>
                     </div>
                  );
               })}
            </div>
            <div style={{ position: "relative" }}>
               <div style={{ position: "absolute", height: "55rem", width: '33.5rem', zIndex: "1", left: "-28rem" }}>
               <Image
                  src="/assets/AllInOne/LeftMobile.webp"
                  alt="mobile"
                  fill
               />
               </div>
               <div style={{ position: "absolute", height: "55rem", width: '30rem', left: "-10rem", top: "-2rem" }}>
               <Image
                  src="/assets/AllInOne/RightMobile.webp"
                  alt="mobile"
                  fill
               />
               </div>
            </div>
            <div>
               {rightIconsData.map((item) => {
                  return (
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "2rem",
                           marginBottom: "4rem",
                           width: "25rem",
                        }}
                     >
                        <div style={{ height: "6rem", width: item.width, position: 'relative' }}><Image src={item.image} alt={item?.altText} fill /></div>
                        <div style={{ fontSize: "2.5rem", textAlign: "left" }}>{item.title}</div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default BusinessSuperApp;
