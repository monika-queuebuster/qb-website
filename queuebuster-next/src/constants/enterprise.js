import {
  homePageOurRecom5dot5Desc,
  homePageOurRecom8dot0Desc,
  homePageOurRecom10dot1Des,
  homePageOurRecom13dot1Des,
  homePageOurRecom5Des,
  homePageOurRecom14dot1Des,
  suitableFor,
  homePageOurRecomSmartphoneDesc,
  homePageOurRecom14dot0Des,
  homePageIntegrations,
  commonRetail,
  commonRestaurants,
  commonGrocery,
  commonSpaAndSalon,
  commonElectronics,
  homePageInventoryManagement,
  homePageMultipleCurrencies,
  homePageeStore,
  homePageIntegrationsDes,
  homePageMultipleCurrenciesDes,
} from "../language/ENGLISH.json";

import content from "../language/ENGLISH.json";

const { merchants } = content.timeline;
const {
  countries,
  invoiceGenerated,
  otherIndustries,
  carAccessories,
  bikeAccessories,
  sanitaryStore,
  homeAndLiving,
  breweryStore,
  homeAppliances,
  mobileAndAcc,
  electricShowroom,
  specialtySpas,
  gym,
  singleAndMultiOutlet,
  kiranaStore,
  supermarket,
  hypermarket,
  fruitsAndVegies,
  fmcg,
  fineDine,
  foodTrucks,
  foodCourts,
  barsAndPubs,
  qsr,
  posPointOfSale,
  warehouseManagement,
  supplyChainManagement,
  crmLoyaltyManagement,
  misReporting,
  discountMembership,
  b2bb2cInvoicing,
  apiIntegrations,
  sellProductsAndIntegrate,
  generateTailoredInvoices,
  createAndManageDiscOffer,
  generateComprehensiveMISReport,
  implementLoyaltyProgram,
  inventoryMangementDesc,
  automateBilling,
  warehouseDesc,
  supplyChainDesc,
  businessOptimization,
  businessOptDesc,
  robustScalabilty,
  robustScalabiltyDesc,
  stockManagement,
  stockeManagementDesc,
  liveReporting,
  liveReportingDesc,
  multideviceAccess,
  multideviceAccessDesc,
  securedBackup,
  securedBackupDesc,
  customerInsights,
  customerInsightsDesc,
} = content.enterprise;
const { outletType1, outletType4, outletType5, outletType2, outletType3 } =
  content.retail;

export const bannerInfo = [
  {
    id: "1",
    name: merchants,
    numbers: "65,000+",
    image: "/assets/Enterprise/merchants.svg",
    companyImg: "/assets/googlePlay1.svg",
    ratingImg: "/assets/rating1.svg",
    rating: 4.1,
    color: "#8AE4F626",
  },
  {
    id: "2",
    name: homePageIntegrations,
    numbers: "50+",
    image: "/assets/Enterprise/integration.svg",
    companyImg: "/assets/capterra-inc-vector-logo.svg",
    ratingImg: "/assets/4star-rating.svg",
    rating: 4.0,
    color: "#F8D37826",
  },
  {
    id: "3",
    name: countries,
    numbers: "4+",
    image: "/assets/Enterprise/country.svg",
    companyImg: "/assets/crowd.webp",
    ratingImg: "/assets/Enterprise/fourPointTwoRating.svg",
    rating: 4.2,
    color: "#EEC9FF26",
  },
  {
    id: "4",
    name: invoiceGenerated,
    numbers: "2 Mn+",
    image: "/assets/Enterprise/invoice.svg",
    companyImg: "/assets/softwaresuggest-logo.svg",
    ratingImg: "/assets/5star-rating.svg",
    rating: 5,
    color: "#EAFFF8",
  },
];

export const industryCard = [
  {
    id: 1,
    image: "/assets/Enterprise/bags.svg",
    altText: "reatil",
    industryName: commonRetail,
    facilities: [
      outletType1,
      outletType4,
      outletType5,
      outletType2,
      outletType3,
    ],
    hoverId: "retail",
    url: "/Industries/retail-pos-billing-software",
  },
  {
    id: 2,
    image: "/assets/Enterprise/cutlery.svg",
    altText: "restaurant",
    industryName: commonRestaurants,
    facilities: [fineDine, qsr, barsAndPubs, foodCourts, foodTrucks],
    hoverId: "restaurant",
    url: "/Industries/restaurant-pos-billing-software",
  },
  {
    id: 3,
    image: "/assets/Enterprise/food.svg",
    altText: "grocery",
    industryName: commonGrocery,
    facilities: [kiranaStore, supermarket, hypermarket, fruitsAndVegies, fmcg],
    hoverId: "grocery",
    url: "/Industries/grocery-pos-billing-software",
  },
  {
    id: 4,
    image: "/assets/Enterprise/hairdryer.svg",
    altText: "spa and salon",
    industryName: commonSpaAndSalon,
    facilities: [specialtySpas, gym, singleAndMultiOutlet],
    hoverId: "spa",
    url: "/Industries/spa-and-salon-pos-billing-software",
  },
  {
    id: 5,
    image: "/assets/Enterprise/electrical-appliance.svg",
    altText: "electronics",
    industryName: commonElectronics,
    facilities: [electricShowroom, mobileAndAcc, homeAppliances],
    hoverId: "electronics",
    url: "/Industries/electronic-pos-billing-software",
  },
  {
    id: 6,
    image: "/assets/Enterprise/edc.svg",
    altText: "other",
    industryName: otherIndustries,
    facilities: [
      carAccessories,
      bikeAccessories,
      sanitaryStore,
      homeAndLiving,
      breweryStore,
    ],
    hoverId: "other",
  },
];

export const otherFeature = [
  {
    id: "1",
    icon: "/assets/Other_Feature_HomePage/Product_Catalog.svg",
    title: homePageInventoryManagement,
    desc: "Track stock, items, batches, and more across multiple locations",
  },
  {
    id: "2",
    icon: "/assets/Other_Feature_HomePage/Reports.svg",
    title: "Reports",
    desc: "Get real-time sales updates and analyze your business with 50+ reports.",
  },
  {
    id: "3",
    icon: "/assets/Other_Feature_HomePage/Payments.svg",
    title: "Payments",
    desc: "Accept payments through cash, card,online wallets, UPI, vouchers, credit notes, and cheque.",
  },
  {
    id: "4",
    icon: "/assets/Other_Feature_HomePage/Bulk_Data_Managemnet.svg",
    title: "Bulk Data Management",
    desc: "Managing catalog of hundreds of products got easy with our Excel and CSV based bulk upload tools.",
  },
  {
    id: "5",
    icon: "/assets/Other_Feature_HomePage/Offline_Mode.svg",
    title: "Offline Mode",
    desc: "Bill seamlessly with no internet. Data syncs automatically when online.",
  },
  {
    id: "6",
    icon: "/assets/Other_Feature_HomePage/Roles_and_Permissions.svg",
    title: "Roles and Permissions",
    desc: "Create unlimited users and manage their roles & permissions through your admin dashboard.",
  },
  {
    id: "7",
    icon: "/assets/Other_Feature_HomePage/Multiple_Currencies.svg",
    title: homePageMultipleCurrencies,
    desc: homePageMultipleCurrenciesDes,
  },
  {
    id: "8",
    icon: "/assets/Other_Feature_HomePage/Promotion&Discount.svg",
    title: "Promotions and Discounts",
    desc: "Offer run-time and universal discounts at product level or order level.",
  },
];

export const additionalFeatures = [
  {
    id: 0,
    feature: businessOptimization,
    featureDesc: businessOptDesc,
    image: "/assets/Enterprise/Business-Optimisation.webp",
    height: '45rem',
    width: '45rem',
    icon: "/assets/Enterprise/business-optimization.svg"
  },
  {
    id: 1,
    feature: robustScalabilty,
    featureDesc: robustScalabiltyDesc,
    image: "/assets/Enterprise/Robust-Scalability.webp",
    height: '42rem',
    width: '45rem',
    icon: "/assets/Enterprise/scale.svg"
  },
  {
    id: 3,
    feature: stockManagement,
    featureDesc: stockeManagementDesc,
    image: "/assets/Enterprise/Stock-Management.webp",
    height: '43rem',
    width: '45rem',
    icon: "/assets/Enterprise/stock.svg"
  },
  {
    id: 4,
    feature: liveReporting,
    featureDesc: liveReportingDesc,
    image: "/assets/Enterprise/Live-Tracking.webp",
    height: '40rem',
    width: '45rem',
    icon: "/assets/Enterprise/livereports.svg"
  },
  {
    id: 5,
    feature: multideviceAccess,
    featureDesc:
      "Available on any Android POS device/ mobile, card swiping machine, EDC (Electronic Data Capture) machine etc.",
    image: "/assets/Enterprise/multi-device.webp",
    height: '39rem',
    width: '45rem',
    icon: "/assets/Enterprise/multidevice.svg"
  },
  {
    id: 6,
    feature: securedBackup,
    featureDesc: securedBackupDesc,
    image: "/assets/Enterprise/Secured-Backup.webp",
    height: '45rem',
    width: '45rem',
    icon: "/assets/Enterprise/backup.svg"
  },
  {
    id: 7,
    feature: customerInsights,
    featureDesc: customerInsightsDesc,
    image: "/assets/Enterprise/Customer-Insights.webp",
    height: '43rem',
    width: '45rem',
    icon: "/assets/Enterprise/insights.svg"
  },
];

export const recommendedHardwareText = {
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

export const deviceData = [
  {
    deviceSize: "5.5”",
    deviceContent: homePageOurRecom5dot5Desc,
    sourceImage: "/assets/M2pro.webp",
    bgColor: "#F5F4FF",
  },
  {
    deviceSize: "8.0”",
    deviceContent: homePageOurRecom8dot0Desc,
    sourceImage: "/assets/eightPointeight.webp",
    bgColor: "#EFF6FF",
  },
  {
    deviceSize: "5.0”",
    deviceContent: homePageOurRecom5Des,
    sourceImage: "/assets/whiteMobPos1.webp",
    // suitableFor: suitableFor,
    bgColor: "#E1F3EC",
  },
  {
    deviceSize: "13.0”",
    deviceContent: homePageOurRecom13dot1Des,
    sourceImage: "/assets/whitePos1.webp",
    // suitableFor: suitableFor,
    bgColor: "#EFF6FF",
  },
  {
    deviceSize: "10.1”",
    deviceContent: homePageOurRecom10dot1Des,
    sourceImage: "/assets/tenPointOne2.webp",
    // suitableFor: suitableFor,
    bgColor: "#E1F3EC",
  },
  {
    deviceSize: "14.0+”",
    deviceContent: homePageOurRecom14dot0Des,
    sourceImage: "/assets/fourPointZero1.webp",
    // suitableFor: suitableFor,
    bgColor: "#F0FCFF",
  },
  {
    deviceSize: "Smartphone",
    deviceContent: homePageOurRecomSmartphoneDesc,
    sourceImage: "/assets/newSmartPhone1.webp",
    bgColor: "#F5F4FF",
  },
];

export const enterpriseFAQ = [
  {
    para: <span style={{ width: "90%" }}>What is an Integrated Omnichannel POS Solution?</span>,
    des: "An Integrated Omnichannel POS Solution brings together different ways your business sells things, like online, in-store, and through mobile devices. This helps manage transactions, inventory, and customer info all in one system.",
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>What are the Key Features of QueueBuster's Enterprise POS Solutions?</span>,
    des: "QueueBuster’s Enterprise POS Solution has powerful features. It helps control inventory from one place, gives real-time insights, supports multiple stores, works on mobile devices, and connects with various payment systems",
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>How does an Omnichannel POS System Benefit My Business?</span>,
    des: "An Omnichannel POS System syncs sales data from different places, shows one view of all your products, makes customers' experiences better, and helps you make smart decisions based on data.",
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>Can QueueBuster's Solution Integrate with Existing Systems or Software?</span>,
    des: "Yes, our POS solution can connect with other systems you're already using, like accounting software, CRM tools, and e-commerce platforms.",
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>Is the System Scalable for Businesses of Different Sizes?</span>,
    des: "Absolutely. Our solutions can grow with your business, no matter how big or small.",
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>How Secure is the Payment Processing with QueueBuster's POS Solution?</span>,
    des: "We take security seriously. Our POS system follows industry rules and uses special codes to keep payment info safe.",
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>What Kind of Customer Support is Provided with QueueBuster's Enterprise POS Solutions?</span>,
    des: "We give you all the help you need – dedicated product support, online resources, and tech support to make sure things go smoothly.",
    id: 7,
    activeIndex: 0,
  },

  {
    para: <span style={{ width: "90%" }}>Can I Customize the POS System to Fit Specific Business Needs?</span>,
    des: "Yes, you can adjust our solutions to fit exactly what your business needs. We make it work for you.",
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>How User-Friendly is the QueueBuster POS System?</span>,
    des: "Our POS system is easy for everyone to use. The design is simple, and we offer training and support to make sure it's a breeze.",
    id: 9,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>What is the Implementation Process for Integrating QueueBuster's POS System Into My Business?</span>,
    des: "Getting our POS system into your business depends on how big and complicated it is. Our team helps you every step of the way, making sure it's smooth and easy.",
    id: 10,
    activeIndex: 0,
  },
];
