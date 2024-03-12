import { inter_Regular, inter_Bold } from "@/components/common/Fonts";
import MobileIndustryWiseCard from "@/components/homePage/MobileIndustryWiseCard";
import MobileKeyFeatures from "@/components/homePage/MobileKeyFeatures";
import MobileOtherFeatures from "@/components/homePage/MobileOtherFeatures";
import FAQmobile from "@/components/Industry/FAQ_mobile";
import GiveItTryMobile from "@/components/Industry/GiveItTry_mobile";
import { ContactUsMobile, RecommendedHardware, ThreeSimpleSteps } from "@/components/mobileQbStrap";
import {
   AwardsandRecognitionMobile,
   BlackCustomButton,
   CustomButton,
   MarqueeComponent,
   MobileIndustrySpecific,
   SwiperForCustomerFeedbackMobile,
   TransparentCustomButton,
} from "@/components/qbStrap";
import { useRouter } from "next/router";
import styles from "../../styles/mobile/homePageMobile.module.css";
import content from "../../language/ENGLISH.json";
import { MobileOurPartners } from "./MobileOurPartners";
import { ClientsArr1, ClientsArr2, ClientsArr3 } from "@/constants/common";
import { testimonialData, videoTestimonial } from "@/constants/common";
import TestimonialSection from "../common/TestimonialSection";
import MobileTestimonialSection from "../common/MobileTestimonialSection";
import TrustFactor from "../common/TrustFactor";
import { useState } from "react";
import VerificationPopup from "../modals/VerificationPopup";

const MobileHomePage = () => {
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
      homePageOurRecomSmartphoneDesc,
      homePageOurRecom14dot0Des,
      suitableFor,
      homePageOurRecom13dot1Des,
      homePageOurRecom14dot1Des,
      homePageOurRecom5Des,
      homePageBusinessType,
      homePageBusinessTypeDes,
      commonRetail,
      homePageRetailDes,
      commonRestaurants,
      homePageRestaurantslDes,
      commonGrocery,
      homePageGrocerylDes,
      commonSpaAndSalon,
      homePageSpaAndSalonlDes,
      commonElectronics,
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
      homePageTopCardSecondTitle,
      homePageTopCardDescription,
      homePageTopCardThirdTitle,
      commonGetFreeDemo,
      commonSignUp,
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
      homePageBusinessTypeColorDes
   } = content;
   const { desc1, desc2, desc3, desc4 } = content.testimonial;
   let recommendedHardwareText = {
      fivepointfive: homePageOurRecom5dot5Desc,
      eight: homePageOurRecom8dot0Desc,
      ten: homePageOurRecom10dot1Des,
      smartphone: homePageOurRecomSmartphoneDesc,
      fourteen: homePageOurRecom14dot0Des,
      suitable: suitableFor,
      thirteen: homePageOurRecom13dot1Des,
      fourteenPlus: homePageOurRecom14dot1Des,
      fiveNew: homePageOurRecom5Des,
   };

   const router = useRouter();
   const industries = [
      { title: "Retail", color: "#A85443" },
      { title: "Restaurants", color: "#D90429" },
      { title: "Grocery Stores", color: "#7E9F3C" },
      { title: "Spa & Salon", color: "#7678ED" },
      { title: "Electronics", color: "#204F98" },
   ];
   let keyFeaturearr = [
      {
         icon: "/assets/Key_feature_Icon_homePage/QuickBill.svg",
         title: homePageQuickBill,
         placeholder1: homePageQuickBillDes1,
         placeholder2: "Placeholeder 2",
         altText: "quick bill"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/Billing.svg",
         title: homePageBilling,
         placeholder1: homePageBillingDes1,
         placeholder2: "Placeholeder 2",
         altText: "billing icon"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/InventoryManagement.svg",
         title: homePageInventoryManagement,
         placeholder1: homePageInventoryManagementDes1,
         placeholder2: "Placeholeder 2",
         altText: "inventory management"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/CreditSales(khata).svg",
         title: homePageCreditSales,
         placeholder1: homePageCreditSalesDes1,
         placeholder2: "Placeholeder 2",
         altText: "credit sales"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/Estore.svg",
         title: homePageeStore,
         placeholder1: homePageeStoreDes1,
         placeholder2: "Placeholeder 2",
         altText: "e store"
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/CRM&Loyality.svg",
         title: homePageCRMandLoyalty,
         placeholder1: homePageCRMandLoyaltyDes1,
         placeholder2: "Placeholeder 2",
         altText: "crm & loyalty"
      },
   ];
   let deviceData = [
      {
         deviceSize: "5.5”",
         deviceContent: homePageOurRecom5dot5Desc,
         sourceImage: "/assets/five-five.png",
         bgColor: "#F5F4FF",
      },
      {
         deviceSize: "8.0”",
         deviceContent: homePageOurRecom8dot0Desc,
         sourceImage: "/assets/eight-zero.png",
         bgColor: "#EFF6FF",
      },
      {
         deviceSize: "5.0”",
         deviceContent: homePageOurRecom5Des,
         sourceImage: "/assets/whiteMobPos1.webp",
         bgColor: "#E1F3EC",
      },
      {
         deviceSize: "13.0”",
         deviceContent: homePageOurRecom13dot1Des,
         sourceImage: "/assets/whitePos1.webp",
         bgColor: "#EFF6FF",
      },
      {
         deviceSize: "10.1”",
         deviceContent: homePageOurRecom10dot1Des,
         sourceImage: "/assets/ten-one.png",
         bgColor: "#E1F3EC",
      },
      {
         deviceSize: "14.0+”",
         deviceContent: homePageOurRecom14dot0Des,
         sourceImage: "/assets/fourteen-zero.png",
         bgColor: "#F0FCFF",
      },
      {
         deviceSize: "Smartphone",
         deviceContent: homePageOurRecomSmartphoneDesc,
         sourceImage: "/assets/newSmartPhone1.webp",
         bgColor: "#F5F4FF",
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
   const industryContent = [
      {
         title: commonRetail,
         placeholder: homePageRetailColorTitle,
         desc: homePageRetailDes,
         keyFeature: [
            { heading: homePageRetailKeyFeaturesTitle1, content: homePageRetailKeyFeaturesDes1 },
            { heading: homePageRetailKeyFeaturesTitle2, content: homePageRetailKeyFeaturesDes2 },
            { heading: homePageRetailKeyFeaturesTitle3, content: homePageRetailKeyFeaturesDes3 },
            { heading: homePageRetailKeyFeaturesTitle4, content: homePageRetailKeyFeaturesDes4 },
            { heading: homePageRetailKeyFeaturesTitle5, content: homePageRetailKeyFeaturesDes5 },
         ],
         outletTypes: [
            { heading: homePageRetailOutLetTypeTitle1, content: homePageRetailOutLetTypeDes1 },
            { heading: homePageRetailOutLetTypeTitle2, content: homePageRetailOutLetTypeDes2 },
            { heading: homePageRetailOutLetTypeTitle3, content: homePageRetailOutLetTypeDes3 },
            { heading: homePageRetailOutLetTypeTitle4, content: homePageRetailOutLetTypeDes4 },
            { heading: homePageRetailOutLetTypeTitle5, content: homePageRetailOutLetTypeDes5 },
         ],
         color: "#B54E3D",
         image1: "/assets/retailGirlNewNew.webp",
         image2: "/assets/smallStockCard.svg",
      },
      {
         title: commonRestaurants,
         placeholder: homePageRestaurantsColorTitle,
         desc: homePageRestaurantslDes,
         keyFeature: [
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
         ],
         outletTypes: [
            {
               heading: homePageRestaurantsOutLetTypeTitle1,
               content: homePageRestaurantsOutLetTypeDes1,
            },
            {
               heading: homePageRestaurantsOutLetTypeTitle2,
               content: homePageRestaurantsOutLetTypeDes2,
            },
            {
               heading: homePageRestaurantsOutLetTypeTitle3,
               content: homePageRestaurantsOutLetTypeDes3,
            },
            {
               heading: homePageRestaurantsOutLetTypeTitle4,
               content: homePageRestaurantsOutLetTypeDes4,
            },
            {
               heading: homePageRestaurantsOutLetTypeTitle5,
               content: homePageRestaurantsOutLetTypeDes5,
            },
         ],
         color: "#D90429",
         image1: "/assets/restaurantBoy2.webp",
         image2: "/assets/restaurantRecipt.webp",
      },
      {
         title: commonGrocery,
         placeholder: homePageGroceryColorTitle,
         desc: homePageGrocerylDes,
         keyFeature: [
            { heading: homePageGroceryKeyFeaturesTitle1, content: homePageGroceryKeyFeaturesDes1 },
            { heading: homePageGroceryKeyFeaturesTitle2, content: homePageGroceryKeyFeaturesDes2 },
            { heading: homePageGroceryKeyFeaturesTitle3, content: homePageGroceryKeyFeaturesDes3 },
            { heading: homePageGroceryKeyFeaturesTitle4, content: homePageGroceryKeyFeaturesDes4 },
            { heading: homePageGroceryKeyFeaturesTitle5, content: homePageGroceryKeyFeaturesDes5 },
         ],
         outletTypes: [
            { heading: homePageGroceryOutLetTypeTitle1, content: homePageGroceryOutLetTypeDes1 },
            { heading: homePageGroceryOutLetTypeTitle2, content: homePageGroceryOutLetTypeDes2 },
            { heading: homePageGroceryOutLetTypeTitle3, content: homePageGroceryOutLetTypeDes3 },
            { heading: homePageGroceryOutLetTypeTitle4, content: homePageGroceryOutLetTypeDes4 },
            { heading: homePageGroceryOutLetTypeTitle5, content: homePageGroceryOutLetTypeDes5 },
         ],
         color: "#7E9F3C",
         image1: "/assets/groceryMan2.webp",
         image2: "/assets/groceryRecipt.webp",
      },
      {
         title: commonSpaAndSalon,
         placeholder: homePageSpaAndSalonColorTitle,
         desc: homePageSpaAndSalonlDes,
         keyFeature: [
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
         ],
         outletTypes: [
            {
               heading: homePageSpaAndSalonOutLetTypeTitle1,
               content: homePageSpaAndSalonOutLetTypeDes1,
            },
            {
               heading: homePageSpaAndSalonOutLetTypeTitle2,
               content: homePageSpaAndSalonOutLetTypeDes2,
            },
            {
               heading: homePageSpaAndSalonOutLetTypeTitle3,
               content: homePageSpaAndSalonOutLetTypeDes3,
            },
            {
               heading: homePageSpaAndSalonOutLetTypeTitle4,
               content: homePageSpaAndSalonOutLetTypeDes4,
            },
            {
               heading: homePageSpaAndSalonOutLetTypeTitle5,
               content: homePageSpaAndSalonOutLetTypeDes5,
            },
         ],
         color: "#7678ED",
         image1: "/assets/spaGirl2.webp",
         image2: "/assets/spaRecipt.webp",
      },
      {
         title: commonElectronics,
         placeholder: homePageElectronicsColorTitle,
         desc: homePageElectronicslDes,
         keyFeature: [
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
         ],
         outletTypes: [
            {
               heading: homePageElectronicsOutLetTypeTitle1,
               content: homePageElectronicsOutLetTypeDes1,
            },
            {
               heading: homePageElectronicsOutLetTypeTitle2,
               content: homePageElectronicsOutLetTypeDes2,
            },
            {
               heading: homePageElectronicsOutLetTypeTitle3,
               content: homePageElectronicsOutLetTypeDes3,
            },
            {
               heading: homePageElectronicsOutLetTypeTitle4,
               content: homePageElectronicsOutLetTypeDes4,
            },
            {
               heading: homePageElectronicsOutLetTypeTitle5,
               content: homePageElectronicsOutLetTypeDes5,
            },
         ],
         color: "#204F98",
         image1: "/assets/electronicsBoy2.webp",
         image2: "/assets/electronicRecipt.webp",
      },
   ];
   const Testimonials = [
      {
         img: "/assets/Brands/heineken.webp",
         name: "Chima Uba",
         designation: "QSR Head",
         description: desc1,
         company: "Heineken, Nigeria",
         width: '14rem'
      },
      {
         img: "/assets/Brands/rareplanet.webp",
         name: "Ranodeep Saha",
         designation: "Co-Founder",
         description: desc3,
         company: "Rare Planet",
         width: '11rem'
      },
      {
         img: "/assets/Brands/happilo.webp",
         name: "Vikas D Nahar",
         designation: "Founder and CEO",
         description: desc2,
         company: "Happilo",
         width: '9rem'
      },
   ];
   let AwardsandRecognitionData = [
      {
         img: "/assets/AwardsandRecognitionData/img1.webp",
         title: "Most Popular Software",
         desc: "Winter-2023",
         altText: "Most Popular Software",
      },
      {
         img: "/assets/AwardsandRecognitionData/img2.webp",
         title: "BIG Impact Creator 2023",
         desc: "Category- Mobile POS Software",
         altText: "BIG impact creator"
      },
      {
         img: "/assets/AwardsandRecognitionData/img3.webp",
         title: "Top 100 Startups",
         desc: "in India 2023",
         altText: "Top 100 startups"
      },
      {
         img: "/assets/AwardsandRecognitionData/img4.webp",
         title: "Top 10 POS Softwares ",
         desc: "in 2023",
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

   const [demoModal, setDemoModal] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!")

   return (
      <div className={styles.container}>
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
         <video
            style={{
               width: "100%",
            }}
            autoPlay
            muted
            loop
            playsInline
         >
            <source
               src={
                  "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/herovideo_576.mp4"
               }
            />
         </video>
         <div style={{ padding: "0 2rem", marginBottom: "2.5rem" }}>
            <div
               style={{
                  font: "normal normal bold 2rem/4rem Inter",
               }}
            >
               {homePageTopCardSecondTitle}

               <h1
                  style={{
                     color: "#006CBA",
                     font: "normal normal bold 3.5rem/4rem Inter",
                  }}
               >
                  {homePageTopCardThirdTitle}
               </h1>
            </div>
            <div
               className={`${inter_Regular.className}`}
               style={{
                  font: "normal normal normal 1.8rem/3rem Inter",
                  paddingTop: "1rem",
                  color: "#5A5A5A",
               }}
            >
               {homePageTopCardDescription}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "2rem", justifyContent: "center", width: '100%' }}>
               <BlackCustomButton text={commonGetFreeDemo} style={{ width: "100%", padding: "0 2rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
               <TransparentCustomButton text="Contact Sales" style={{ width: "100%", padding: "0 2rem" }} onClick={() => {
                  router.push("/contact-sales");
               }} />
            </div>
         </div>
         <div style={{ marginTop: "5rem" }}>
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <h2
                  className={`${inter_Bold.className}`}
                  style={{ fontSize: "2.5rem", textAlign: "center" }}
               >
                  {homePageOurClientTitle}
               </h2>
               <div
                  style={{
                     backgroundColor: "#F9D878",
                     padding: "0.5rem",
                     textAlign: "center",
                     borderRadius: "5px",
                     marginTop: "1.6rem",
                     color: "#020D48",
                     width: "30rem",
                  }}
               >
                  {homePageOurClientDes}
               </div>
            </div>
            <div style={{ backgroundColor: "#F7F9FF" }}>
               <MarqueeComponent ClientsArr={ClientsArr1} margin={"3rem 0 0 0"} header={true} />
               <MarqueeComponent
                  ClientsArr={ClientsArr2}
                  direction={"left"}
                  paraStyle={{ display: "none" }}
               />
               <MarqueeComponent ClientsArr={ClientsArr3} paraStyle={{ display: "none" }} />
            </div>
         </div>
         <div style={{ marginTop: "5rem" }}>
            <MobileKeyFeatures keyFeaturearr={keyFeaturearr} />
         </div>
         <MobileOtherFeatures otherFeature={otherFeature} />
         <MobileIndustryWiseCard
            heading={homePageBusinessTypeColorDes}
            subHeading={homePageBusinessType}
            desc={homePageBusinessTypeDes}
            industries={industries}
         />
         <MobileIndustrySpecific industries={industries} industryContent={industryContent} />
         <MobileOurPartners title={commonOurPartners} description={homePageOurPartnerdesc} />
         <RecommendedHardware
            deviceData={deviceData}
            recommendedHardwareText={recommendedHardwareText}
            headingText={homePageOurRecommendedHardwareTitle}
         />
         <div style={{ margin: "5rem 1rem 5rem 1rem" }}>
            <AwardsandRecognitionMobile data={AwardsandRecognitionData} />
         </div>
         <div className={styles.testimonial_section}>
            <h3 className={styles.testimonial_heading}>Don't Take Our Word For It!</h3>
            <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
         </div>
         <FAQmobile FaqTableData={FaqTableData} width={"auto"} />
         <ContactUsMobile />
         <GiveItTryMobile
            image={"/assets/giveItAtryHome.webp"}
            title={homePageReadyToGiveItATry}
            description={homePageReadyToGiveItAtryDesc}
         />
         <TrustFactor />
      </div>
   );
};

export default MobileHomePage;
