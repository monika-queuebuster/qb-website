import {
   ComponentHeader,
   ContactUsHomePage,
   HomePageTopCard,
   MarqueeComponentHomePage,
   OtherFeatureCompHomePage,
   OurKeyFeatureHomePage,
   RightOurKeyFeatureHomePage,
   GiveItTry,
   IndustryWiseCard,
   AwardsandRecognition,
} from "@/components/qbStrap";
import styles from "../../styles/qbStrap.module.css";
import FrequentQuestions from "./FrequentQuestions";
import homePageStyle from "../../styles/common/NewHomePage.module.css";
import { OurPartners } from "@/components/homePage/OurPartners";
import OurRecommendedHardware from "@/components/homePage/OurRecommendedHardware";
import ContactUsForm from "@/components/homePage/ContactUsForm";
import content from "../../language/ENGLISH.json";
import { ClientsArr1, ClientsArr2, ClientsArr3 } from "@/constants/common";
import { testimonialData, videoTestimonial } from "@/constants/common";
import TestimonialSection from "../common/TestimonialSection";
import TrustFactor from "../common/TrustFactor";
import VerificationPopup from "../modals/VerificationPopup";
import { useState } from "react";

const DesktopHomePage = () => {
   const {
      homePageQuickBill,
      homePageQuickBillDes1,
      homePageBillingDes1,
      homePageBilling,
      homePageInventoryManagement,
      homePageInventoryManagementDes1,
      homePageCreditSales,
      homePageCreditSalesDes1,
      homePageeStore,
      homePageeStoreDes1,
      homePageQuickBillDes2,
      homePageBillingDes2,
      homePageInventoryManagementDes2,
      homePageCreditSalesDes2,
      homePageeStoreDes2,
      homePageCRMLoyaltyDes2,
      homePageCRMandLoyalty,
      homePageCRMandLoyaltyDes1,
      homePagekeyFeatures,
      homePageTopCardColoredTitle,
      homePageOurClientTitle,
      homePageOurClientDes,
      homePageOtherFeaturestitle,
      homePageOtherFeaturesDes,
      homePageProductCatalog,
      homePageProductCatalogDes,
      homePageOfflineMode,
      homePageOfflineModeDes,
      homePagePayments,
      homePagePaymentsDes,
      homePageBulkDataManagement,
      homePageBulkDataManagementDes,
      homePageMultipleCurrencies,
      homePageMultipleCurrenciesDes,
      homePageRolesandPermissions,
      homePageRolesandPermissionsDes,
      homePagePromotionandDiscount,
      homePagePromotionandDiscountDes,
      homePageReports,
      homePageReportsDes,
      homePageCloudBackup,
      homePageCloudBackupDes,
      homePageMultipleLocations,
      homePageMultipleLocationsDes,
      homePageIntegrations,
      homePageIntegrationsDes,
      homePageOurRecom5dot5Desc,
      homePageOurRecom8dot0Desc,
      homePageOurRecom10dot1Des,
      homePageOurRecom13dot1Des,
      homePageOurRecom5Des,
      homePageOurRecom14dot1Des,
      suitableFor,
      homePageOurRecomSmartphoneDesc,
      homePageOurRecom14dot0Des,
      homePageBusinessType,
      homePageBusinessTypeDes,
      commonRetailPOS,
      homePageRetailDes,
      commonRestaurantsPOS,
      homePageRestaurantslDes,
      commonGroceryPOS,
      homePageGrocerylDes,
      commonSpaAndSalonPOS,
      homePageSpaAndSalonlDes,
      commonElectronicsPOS,
      homePageElectronicslDes,
      homePageRetailColorTitle,
      homePageRestaurantsColorTitle,
      homePageGroceryColorTitle,
      homePageSpaAndSalonColorTitle,
      homePageElectronicsColorTitle,
      homePageRetailKeyFeaturesTitle1,
      homePageRetailKeyFeaturesDes1,
      homePageRetailKeyFeaturesTitle2,
      homePageRetailKeyFeaturesDes2,
      homePageRetailKeyFeaturesTitle3,
      homePageRetailKeyFeaturesDes3,
      homePageRetailKeyFeaturesTitle4,
      homePageRetailKeyFeaturesDes4,
      homePageRetailKeyFeaturesTitle5,
      homePageRetailKeyFeaturesDes5,
      homePageRetailOutLetTypeTitle1,
      homePageRetailOutLetTypeDes1,
      homePageRetailOutLetTypeTitle2,
      homePageRetailOutLetTypeDes2,
      homePageRetailOutLetTypeTitle3,
      homePageRetailOutLetTypeTitle4,
      homePageRetailOutLetTypeTitle5,
      homePageRetailOutLetTypeDes3,
      homePageRetailOutLetTypeTitle6,
      homePageRetailOutLetTypeDes6,
      homePageRetailOutLetTypeDes4,
      homePageRetailOutLetTypeDes5,
      homePageRestaurantsKeyFeaturesTitle1,
      homePageRestaurantsKeyFeaturesDes1,
      homePageRestaurantsKeyFeaturesTitle2,
      homePageRestaurantsKeyFeaturesDes2,
      homePageRestaurantsKeyFeaturesTitle3,
      homePageRestaurantsKeyFeaturesDes3,
      homePageRestaurantsKeyFeaturesTitle4,
      homePageRestaurantsKeyFeaturesDes4,
      homePageRestaurantsKeyFeaturesTitle5,
      homePageRestaurantsKeyFeaturesDes5,
      homePageRestaurantsOutLetTypeTitle1,
      homePageRestaurantsOutLetTypeTitle2,
      homePageRestaurantsOutLetTypeTitle3,
      homePageRestaurantsOutLetTypeTitle4,
      homePageRestaurantsOutLetTypeTitle5,
      homePageRestaurantsOutLetTypeDes1,
      homePageRestaurantsOutLetTypeDes2,
      homePageRestaurantsOutLetTypeDes3,
      homePageRestaurantsOutLetTypeDes4,
      homePageRestaurantsOutLetTypeDes5,
      homePageGroceryKeyFeaturesTitle1,
      homePageGroceryKeyFeaturesTitle2,
      homePageGroceryKeyFeaturesTitle3,
      homePageGroceryKeyFeaturesTitle4,
      homePageGroceryKeyFeaturesTitle5,
      homePageGroceryKeyFeaturesDes1,
      homePageGroceryKeyFeaturesDes2,
      homePageGroceryKeyFeaturesDes3,
      homePageGroceryKeyFeaturesDes4,
      homePageGroceryKeyFeaturesDes5,
      homePageGroceryOutLetTypeTitle1,
      homePageGroceryOutLetTypeTitle2,
      homePageGroceryOutLetTypeTitle3,
      homePageGroceryOutLetTypeTitle4,
      homePageGroceryOutLetTypeTitle5,
      homePageGroceryOutLetTypeDes1,
      homePageGroceryOutLetTypeDes2,
      homePageGroceryOutLetTypeDes3,
      homePageGroceryOutLetTypeDes4,
      homePageGroceryOutLetTypeDes5,
      homePageSpaAndSalonKeyFeaturesTitle1,
      homePageSpaAndSalonKeyFeaturesTitle2,
      homePageSpaAndSalonKeyFeaturesTitle3,
      homePageSpaAndSalonKeyFeaturesTitle4,
      homePageSpaAndSalonKeyFeaturesTitle5,
      homePageSpaAndSalonKeyFeaturesDes1,
      homePageSpaAndSalonKeyFeaturesDes2,
      homePageSpaAndSalonKeyFeaturesDes3,
      homePageSpaAndSalonKeyFeaturesDes4,
      homePageSpaAndSalonKeyFeaturesDes5,
      homePageSpaAndSalonOutLetTypeTitle1,
      homePageSpaAndSalonOutLetTypeTitle2,
      homePageSpaAndSalonOutLetTypeTitle3,
      homePageSpaAndSalonOutLetTypeTitle4,
      homePageSpaAndSalonOutLetTypeTitle5,
      homePageSpaAndSalonOutLetTypeDes1,
      homePageSpaAndSalonOutLetTypeDes2,
      homePageSpaAndSalonOutLetTypeDes3,
      homePageSpaAndSalonOutLetTypeDes4,
      homePageSpaAndSalonOutLetTypeDes5,
      homePageElectronicsKeyFeaturesTitle1,
      homePageElectronicsKeyFeaturesTitle2,
      homePageElectronicsKeyFeaturesTitle3,
      homePageElectronicsKeyFeaturesTitle4,
      homePageElectronicsKeyFeaturesTitle5,
      homePageElectronicsKeyFeaturesDes1,
      homePageElectronicsKeyFeaturesDes2,
      homePageElectronicsKeyFeaturesDes3,
      homePageElectronicsKeyFeaturesDes4,
      homePageElectronicsKeyFeaturesDes5,
      homePageElectronicsOutLetTypeTitle1,
      homePageElectronicsOutLetTypeTitle2,
      homePageElectronicsOutLetTypeTitle3,
      homePageElectronicsOutLetTypeTitle4,
      homePageElectronicsOutLetTypeTitle5,
      homePageElectronicsOutLetTypeDes1,
      homePageElectronicsOutLetTypeDes2,
      homePageElectronicsOutLetTypeDes3,
      homePageElectronicsOutLetTypeDes4,
      homePageElectronicsOutLetTypeDes5,
      commonOurPartners,
      homePageOurPartnerdesc,
      homePageOurRecommendedHardwareTitle,
      homePageOurRecomDesc,
      commonContactUs,
      homePageReadyToGiveItATry,
      homePageReadyToGiveItAtryDesc,
      homePageFAQQuestion1,
      homPageFAQAnswer1,
      homePageFAQQuestion2,
      homPageFAQAnswer2,
      homePageFAQQuestion3,
      homPageFAQAnswer3,
      homePageFAQQuestion4,
      homPageFAQAnswer4,
      homePageFAQQuestion5,
      homPageFAQAnswer5,
      homePageFAQQuestion6,
      homPageFAQAnswer6,
      homePageFAQQuestion7,
      homPageFAQAnswer7,
      homePageFAQQuestion8,
      homPageFAQAnswer8,
      homePageFAQQuestion9,
      homPageFAQAnswer9,
      homePageFAQQuestion10,
      homPageFAQAnswer10,
      homePageFAQQuestion11,
      homPageFAQAnswer11,
      homePageFAQQuestion12,
      homPageFAQAnswer12,
      homePageFAQQuestion13,
      homPageFAQAnswer13,
      homePageFAQQuestion14,
      homPageFAQAnswer14,
      homePageFAQQuestion15,
      homPageFAQAnswer15,
      homePageFAQQuestion16,
      homPageFAQAnswer16,
      homePageFAQQuestion17,
      homPageFAQAnswer17,
      homePageFAQQuestion18,
      homPageFAQAnswer18,
   } = content;
   const {
      startinjustthreesimplesteps,
      startinjustthreesimplestepsDesc,
      downloadtheApp,
      downloadtheAppDesc,
      signupforfree,
      signupforfreeDesc,
      setupyourPOS,
      setupyourPOSDesc,
   } = content.allInOne;


   let keyFeaturearr = [
      {
         icon: "/assets/Key_feature_Icon_homePage/Billing.svg",
         title: homePageBilling,
         placeholder1: homePageBillingDes1,
         placeholder2: homePageBillingDes2,
         id: "ourKeyFeature2",
         altText: "billing icon"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/QuickBill.svg",
         title: homePageQuickBill,
         placeholder1: homePageQuickBillDes1,
         placeholder2: homePageQuickBillDes2,
         altText: "quick bill"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/CreditSales(khata).svg",
         title: homePageCreditSales,
         placeholder1: homePageCreditSalesDes1,
         placeholder2: homePageCreditSalesDes2,
         altText: "credit sales"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/InventoryManagement.svg",
         title: homePageInventoryManagement,
         placeholder1: homePageInventoryManagementDes1,
         placeholder2: homePageInventoryManagementDes2,
         altText: "inventory management"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/Estore.svg",
         title: homePageeStore,
         placeholder1: homePageeStoreDes1,
         placeholder2: homePageeStoreDes2,
         altText: "e store"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/CRM&Loyality.svg",
         title: homePageCRMandLoyalty,
         placeholder1: homePageCRMandLoyaltyDes1,
         placeholder2: homePageCRMLoyaltyDes2,
         altText: "crm & loyalty"
      },
   ];
   let otherFeature = [
      {
         icon: "/assets/Other_Feature_HomePage/Product_Catalog.svg",
         title: homePageProductCatalog,
         text: homePageProductCatalogDes,
         altText: "product catalog"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Offline_Mode.svg",
         title: homePageOfflineMode,
         text: homePageOfflineModeDes,
         altText: "offline mode"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Payments.svg",
         title: homePagePayments,
         text: homePagePaymentsDes,
         altText: "payments"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Bulk_Data_Managemnet.svg",
         title: homePageBulkDataManagement,
         text: homePageBulkDataManagementDes,
         altText: "bulk data management"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Multiple_Currencies.svg",
         title: homePageMultipleCurrencies,
         text: homePageMultipleCurrenciesDes,
         altText: "multiple currencies"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Roles_and_Permissions.svg",
         title: homePageRolesandPermissions,
         text: homePageRolesandPermissionsDes,
         altText: "roles and permissions"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Promotion&Discount.svg",
         title: homePagePromotionandDiscount,
         text: homePagePromotionandDiscountDes,
         altText: "promotions and discount"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Reports.svg",
         title: homePageReports,
         text: homePageReportsDes,
         altText: "reports"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Cloud_Backup.svg",
         title: homePageCloudBackup,
         text: homePageCloudBackupDes,
         altText: "cloud backup"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Multiple_Locations.svg",
         title: homePageMultipleLocations,
         text: homePageMultipleLocationsDes,
         altText: "multiple locations"
      },
      {
         icon: "/assets/Other_Feature_HomePage/Integrations.svg",
         title: homePageIntegrations,
         text: homePageIntegrationsDes,
         altText: "integrations"
      },
   ];
   let keyFeaturesRetail = [
      { heading: homePageRetailKeyFeaturesTitle1, content: homePageRetailKeyFeaturesDes1 },
      { heading: homePageRetailKeyFeaturesTitle2, content: homePageRetailKeyFeaturesDes2 },
      { heading: homePageRetailKeyFeaturesTitle3, content: homePageRetailKeyFeaturesDes3 },
      { heading: homePageRetailKeyFeaturesTitle4, content: homePageRetailKeyFeaturesDes4 },
      { heading: homePageRetailKeyFeaturesTitle5, content: homePageRetailKeyFeaturesDes5 },
   ];
   let outLetTypeRetail = [
      { heading: homePageRetailOutLetTypeTitle1, content: homePageRetailOutLetTypeDes1 },
      { heading: homePageRetailOutLetTypeTitle2, content: homePageRetailOutLetTypeDes2 },
      { heading: homePageRetailOutLetTypeTitle3, content: homePageRetailOutLetTypeDes3 },
      { heading: homePageRetailOutLetTypeTitle4, content: homePageRetailOutLetTypeDes4 },
      { heading: homePageRetailOutLetTypeTitle5, content: homePageRetailOutLetTypeDes5 },
      { heading: homePageRetailOutLetTypeTitle6, content: homePageRetailOutLetTypeDes6 },
   ];
   let keyFeaturesRestaurants = [
      {
         heading: homePageRestaurantsKeyFeaturesTitle1,
         content: homePageRestaurantsKeyFeaturesDes1,
      },
      {
         heading: homePageRestaurantsKeyFeaturesTitle2,
         content: homePageRestaurantsKeyFeaturesDes2,
      },
      {
         heading: homePageRestaurantsKeyFeaturesTitle3,
         content: homePageRestaurantsKeyFeaturesDes3,
      },
      {
         heading: homePageRestaurantsKeyFeaturesTitle4,
         content: homePageRestaurantsKeyFeaturesDes4,
      },
      {
         heading: homePageRestaurantsKeyFeaturesTitle5,
         content: homePageRestaurantsKeyFeaturesDes5,
      },
   ];
   let outLetTypeRestaurants = [
      { heading: homePageRestaurantsOutLetTypeTitle1, content: homePageRestaurantsOutLetTypeDes1 },
      { heading: homePageRestaurantsOutLetTypeTitle2, content: homePageRestaurantsOutLetTypeDes2 },
      { heading: homePageRestaurantsOutLetTypeTitle3, content: homePageRestaurantsOutLetTypeDes3 },
      { heading: homePageRestaurantsOutLetTypeTitle4, content: homePageRestaurantsOutLetTypeDes4 },
      { heading: homePageRestaurantsOutLetTypeTitle5, content: homePageRestaurantsOutLetTypeDes5 },
   ];

   let keyFeaturesGrocery = [
      { heading: homePageGroceryKeyFeaturesTitle1, content: homePageGroceryKeyFeaturesDes1 },
      { heading: homePageGroceryKeyFeaturesTitle2, content: homePageGroceryKeyFeaturesDes2 },
      { heading: homePageGroceryKeyFeaturesTitle3, content: homePageGroceryKeyFeaturesDes3 },
      { heading: homePageGroceryKeyFeaturesTitle4, content: homePageGroceryKeyFeaturesDes4 },
      { heading: homePageGroceryKeyFeaturesTitle5, content: homePageGroceryKeyFeaturesDes5 },
   ];
   let outLetTypeGrocery = [
      { heading: homePageGroceryOutLetTypeTitle1, content: homePageGroceryOutLetTypeDes1 },
      { heading: homePageGroceryOutLetTypeTitle2, content: homePageGroceryOutLetTypeDes2 },
      { heading: homePageGroceryOutLetTypeTitle3, content: homePageGroceryOutLetTypeDes3 },
      { heading: homePageGroceryOutLetTypeTitle4, content: homePageGroceryOutLetTypeDes4 },
      { heading: homePageGroceryOutLetTypeTitle5, content: homePageGroceryOutLetTypeDes5 },
   ];

   let keyFeaturesSpaAndSalon = [
      {
         heading: homePageSpaAndSalonKeyFeaturesTitle1,
         content: homePageSpaAndSalonKeyFeaturesDes1,
      },
      {
         heading: homePageSpaAndSalonKeyFeaturesTitle2,
         content: homePageSpaAndSalonKeyFeaturesDes2,
      },
      {
         heading: homePageSpaAndSalonKeyFeaturesTitle3,
         content: homePageSpaAndSalonKeyFeaturesDes3,
      },
      {
         heading: homePageSpaAndSalonKeyFeaturesTitle4,
         content: homePageSpaAndSalonKeyFeaturesDes4,
      },
      {
         heading: homePageSpaAndSalonKeyFeaturesTitle5,
         content: homePageSpaAndSalonKeyFeaturesDes5,
      },
   ];
   let outLetTypeSpaAndSalon = [
      { heading: homePageSpaAndSalonOutLetTypeTitle1, content: homePageSpaAndSalonOutLetTypeDes1 },
      { heading: homePageSpaAndSalonOutLetTypeTitle2, content: homePageSpaAndSalonOutLetTypeDes2 },
      { heading: homePageSpaAndSalonOutLetTypeTitle3, content: homePageSpaAndSalonOutLetTypeDes3 },
      { heading: homePageSpaAndSalonOutLetTypeTitle4, content: homePageSpaAndSalonOutLetTypeDes4 },
      { heading: homePageSpaAndSalonOutLetTypeTitle5, content: homePageSpaAndSalonOutLetTypeDes5 },
   ];

   let keyFeaturesElectronics = [
      {
         heading: homePageElectronicsKeyFeaturesTitle1,
         content: homePageElectronicsKeyFeaturesDes1,
      },
      {
         heading: homePageElectronicsKeyFeaturesTitle2,
         content: homePageElectronicsKeyFeaturesDes2,
      },
      {
         heading: homePageElectronicsKeyFeaturesTitle3,
         content: homePageElectronicsKeyFeaturesDes3,
      },
      {
         heading: homePageElectronicsKeyFeaturesTitle4,
         content: homePageElectronicsKeyFeaturesDes4,
      },
      {
         heading: homePageElectronicsKeyFeaturesTitle5,
         content: homePageElectronicsKeyFeaturesDes5,
      },
   ];
   let outLetTypeElectronics = [
      { heading: homePageElectronicsOutLetTypeTitle1, content: homePageElectronicsOutLetTypeDes1 },
      { heading: homePageElectronicsOutLetTypeTitle2, content: homePageElectronicsOutLetTypeDes2 },
      { heading: homePageElectronicsOutLetTypeTitle3, content: homePageElectronicsOutLetTypeDes3 },
      { heading: homePageElectronicsOutLetTypeTitle4, content: homePageElectronicsOutLetTypeDes4 },
      { heading: homePageElectronicsOutLetTypeTitle5, content: homePageElectronicsOutLetTypeDes5 },
   ];

   let recommendedHardwareText = {
      five: homePageOurRecom5dot5Desc,
      eight: homePageOurRecom8dot0Desc,
      ten: homePageOurRecom10dot1Des,
      smartphone: homePageOurRecomSmartphoneDesc,
      fourteen: homePageOurRecom14dot0Des,
      suitable: suitableFor,
      thirteen: homePageOurRecom13dot1Des,
      fourteenPlus: homePageOurRecom14dot1Des,
      fiveNew: homePageOurRecom5Des,
   };
   let AwardsandRecognitionData = [
      {
         img: "/assets/AwardsandRecognitionData/img1.webp",
         title: "Most Popular Software",
         desc: "Winter-2023",
         altText: "software suggest"
      },
      {
         img: "/assets/AwardsandRecognitionData/img2.webp",
         title: "BIG Impact Creator 2023",
         desc: "Category- Mobile POS Software",
         altText: "big impact creator"
      },
      {
         img: "/assets/AwardsandRecognitionData/img3.webp",
         title: "Top 100 Startups",
         desc: "in India 2023",
         altText: "top 100 startups"
      },
      {
         img: "/assets/AwardsandRecognitionData/img4.webp",
         title: "Top 10 POS Softwares ",
         desc: "in 2023",
         altText: "top 10 pos software"
      },
   ];

   const FaqTableData = [
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion1}</span>,
         des: homPageFAQAnswer1,
         id: 1,
         activeIndex: 1,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion2}</span>,
         des: homPageFAQAnswer2,
         id: 2,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion3}</span>,
         des: homPageFAQAnswer3,
         id: 3,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion4}</span>,
         des: homPageFAQAnswer4,
         id: 4,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion6}</span>,
         des: homPageFAQAnswer6,
         id: 6,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion8}</span>,
         des: homPageFAQAnswer8,
         id: 8,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion9}</span>,
         des: homPageFAQAnswer9,
         id: 9,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion10}</span>,
         des: homPageFAQAnswer10,
         id: 10,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion11}</span>,
         des: homPageFAQAnswer11,
         id: 11,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion12}</span>,
         des: homPageFAQAnswer12,
         id: 12,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion13}</span>,
         des: homPageFAQAnswer13,
         id: 13,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion14}</span>,
         des: homPageFAQAnswer14,
         id: 14,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion15}</span>,
         des: homPageFAQAnswer15,
         id: 15,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion16}</span>,
         des: homPageFAQAnswer16,
         id: 16,
         activeIndex: 0,
      },
      {
         para: <span style={{ width: "90%" }}>{homePageFAQQuestion17}</span>,
         des: homPageFAQAnswer17,
         id: 17,
         activeIndex: 0,
      },
   ];

   const scrollPage = () => {
      window.scrollTo({ top: 620, behavior: 'smooth' })
   }
   const [demoModal, setDemoModal] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!")

   return (
      <div >
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
         <HomePageTopCard
            img1={"/assets/RealmeTab.webp"}
            img2={"/assets/lapTop.webp"}
            setDemoModal={setDemoModal}
            setHeading={setHeading}
         />
         <ComponentHeader
            title={homePageOurClientTitle}
            barText={homePageOurClientDes}
            titleStyle={{ marginTop: '8rem' }}
            barBg_Color={"#F9D878"}
            desStyle={{ width: "30rem" }}
         />

         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
         </div>
         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage direction={"left"} ClientsArr={ClientsArr2} />
         </div>
         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage ClientsArr={ClientsArr3} />
         </div>
         <div className={homePageStyle.ourKeyFeature_MainContainer}>
            <div className={homePageStyle.jusTRY}>{homePagekeyFeatures}</div>
            <OurKeyFeatureHomePage keyFeatureContent={keyFeaturearr} />
            <RightOurKeyFeatureHomePage />
         </div>
         <ComponentHeader
            title={homePageOtherFeaturestitle}
            barText={homePageOtherFeaturesDes}
            barBg_Color={"#86DBEA"}
            desStyle={{ width: "33.5rem" }}
         />
         <OtherFeatureCompHomePage otherFeature={otherFeature} />
         <IndustryWiseCard
            color={"#F9D878"}
            image={"/assets/BusinessTypes.gif"}
            recipt={"/assets/restaurantRecipt.webp"}
            industry={homePageBusinessType}
            industryDetail={homePageBusinessTypeDes}
         />
         <IndustryWiseCard
            keyFeatures={keyFeaturesRetail}
            outLetType={outLetTypeRetail}
            color={"#B54E3D"}
            image={"/assets/retailGirlNewNew.webp"}
            recipt={"/assets/smallStockCard.svg"}
            industry={commonRetailPOS}
            industryDetail={homePageRetailDes}
            reciptImgStyles={{ marginTop: "2rem", height: '20rem', width: '16rem', position: "relative" }}
            logoText={homePageRetailColorTitle}
            path={"/Industries/retail-pos-billing-software"}
         />
         <IndustryWiseCard
            keyFeatures={keyFeaturesRestaurants}
            outLetType={outLetTypeRestaurants}
            color={"#D90429"}
            image={"/assets/restaurantBoy2.webp"}
            recipt={"/assets/restaurantRecipt.webp"}
            industry={commonRestaurantsPOS}
            industryDetail={homePageRestaurantslDes}
            reciptImgStyles={{ marginLeft: "2rem", width: "16rem", height: "22rem", position: "relative" }}
            logoText={homePageRestaurantsColorTitle}
            path={"/Industries/restaurant-pos-billing-software"}
         />
         <IndustryWiseCard
            keyFeatures={keyFeaturesGrocery}
            outLetType={outLetTypeGrocery}
            color={"#7E9F3C"}
            image={"/assets/groceryMan2.webp"}
            recipt={"/assets/groceryRecipt.webp"}
            industry={commonGroceryPOS}
            industryDetail={homePageGrocerylDes}
            reciptImgStyles={{ width: "16rem", height: "18rem", position: "relative" }}
            logoText={homePageGroceryColorTitle}
            path={"/Industries/grocery-pos-billing-software"}
         />
         <IndustryWiseCard
            keyFeatures={keyFeaturesSpaAndSalon}
            outLetType={outLetTypeSpaAndSalon}
            color={"#7678ED"}
            image={"/assets/spaGirl2.webp"}
            recipt={"/assets/spaRecipt.webp"}
            industry={commonSpaAndSalonPOS}
            industryDetail={homePageSpaAndSalonlDes}
            reciptImgStyles={{ width: "17rem", height: '17rem', position: "relative" }}
            logoText={homePageSpaAndSalonColorTitle}
            path={"/Industries/spa-and-salon-pos-billing-software"}
         />
         <IndustryWiseCard
            keyFeatures={keyFeaturesElectronics}
            outLetType={outLetTypeElectronics}
            color={"#204F98"}
            image={"/assets/electronicsBoy2.webp"}
            recipt={"/assets/electronicRecipt.webp"}
            industry={commonElectronicsPOS}
            industryDetail={homePageElectronicslDes}
            reciptImgStyles={{ marginLeft: "3rem", width: "12rem", height: "17rem", position: "relative" }}
            logoText={homePageElectronicsColorTitle}
            path={"/Industries/electronic-pos-billing-software"}
         />
         <OurPartners title={commonOurPartners} description={homePageOurPartnerdesc} />
         <OurRecommendedHardware
            title={homePageOurRecommendedHardwareTitle}
            description={homePageOurRecomDesc}
            recommendedHardwareText={recommendedHardwareText}
         />
         <div style={{ marginBottom: "9rem" }}>
            <AwardsandRecognition data={AwardsandRecognitionData} />
         </div>
         <div className={styles.testimonial_section}>
            <h3 className={styles.testimonial_heading}>Don't Take Our Word For It!</h3>
            <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
         </div>
         <FrequentQuestions FaqTableData={FaqTableData} />
         <div className={homePageStyle.contactUs_mainContainer}>
            <div>
               <div className={homePageStyle.contactUsTILT_bar}>{commonContactUs}</div>
               <ContactUsHomePage />
            </div>
            <ContactUsForm />
         </div>
         <GiveItTry
            heading={homePageReadyToGiveItATry}
            description={homePageReadyToGiveItAtryDesc}
            image={"/assets/giveItAtryHome.webp"}
            styles={{ bottom: "-4.2rem", right: "0", height: "54rem", width: "61rem" }}
            containerStyles={{ margin: "0 7rem 8.5rem 7rem" }}
            usedIn='home'
         />
         <TrustFactor />
      </div>
   );
};
export default DesktopHomePage;
