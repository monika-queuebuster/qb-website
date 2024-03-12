import content from "../language/ENGLISH.json";

const {
  f1Heading,
  f1Desc,
  fFeatureP1Pt1,
  fFeatureP1Pt2,
  fFeatureP1Pt3,
  fFeatureP2Pt1,
  fFeatureP2Pt2,
  fFeatureP2Pt3,
  fFeatureP3Pt1,
  fFeatureP3Pt2,
  fFeatureP3Pt3,
  f2Heading,
  f2Desc,
  f2FeatureP1,
  f2FeatureP2,
  f2FeatureP3,
  WSstep1T,
  WSstep1Desc,
  WSstep2T,
  WSstep2Desc,
  WSstep3T,
  WSstep3Desc,
  WSstep4T,
  WSstep4Desc,
} = content.mpos;

export const mposFeature = [
  {
    id: 1,
    heading: f1Heading,
    desc: f1Desc,
    bgColor: "#8AE4F626",
    img: "/assets/mPOS/swiping-machines.webp",
    imgBg: "#8AE4F6",
    imgHt: "40rem",
    imgWt: "35rem",
    MimgHt: "30rem",
    MimgWt: "29rem",
    featurePoint: [
      <>
        {fFeatureP1Pt1} <b>{fFeatureP1Pt2}</b> {fFeatureP1Pt3}
      </>,
      <>
        {fFeatureP2Pt1} <b>{fFeatureP2Pt2}</b> {fFeatureP2Pt3}
      </>,
      <>
        {fFeatureP3Pt1} <b>{fFeatureP3Pt2}</b> {fFeatureP3Pt3}
      </>,
    ],
    linkText: "Talk to us now ->",
  },
  {
    id: 2,
    heading: f2Heading,
    desc: f2Desc,
    bgColor: "#FDACAC26",
    img: "/assets/mPOS/no-cost.webp",
    imgHt: "38rem",
    imgWt: "35rem",
    imgBg: "#FDACAC",
    MimgHt: "28rem",
    MimgWt: "24rem",
    featurePoint: [<>{f2FeatureP1}</>, <>{f2FeatureP2}</>, <>{f2FeatureP3}</>],
    linkText: "Talk to us now ->",
  },
];

export const workingStructure = [
  {
    id: 1,
    title: WSstep1T,
    desc: WSstep1Desc,
    img: "/assets/mPOS/easy-setup.webp",
    imgHt: "45rem",
    imgWt: "35rem",
    MimgHt: "35rem",
    MimgWt: "30rem",
    icon: "/assets/mPOS/easy-steps.svg",
    icon2: "/assets/mPOS/setup-icon.svg",
  },
  {
    id: 2,
    title: WSstep2T,
    desc: WSstep2Desc,
    img: "/assets/mPOS/add-catalog.webp",
    imgHt: "40rem",
    imgWt: "40rem",
    MimgHt: "35rem",
    MimgWt: "35rem",
    icon: "/assets/mPOS/add-inventory.svg",
    icon2: "/assets/mPOS/inventory-icon.svg",
  },
  {
    id: 3,
    title: WSstep3T,
    desc: WSstep3Desc,
    img: "/assets/mPOS/quick-bill.webp",
    imgHt: "40rem",
    imgWt: "40rem",
    MimgHt: "35rem",
    MimgWt: "35rem",
    icon: "/assets/mPOS/billing.svg",
    icon2: "/assets/mPOS/billing-icon.svg",
  },
  {
    id: 4,
    title: WSstep4T,
    desc: WSstep4Desc,
    img: "/assets/mPOS/daily-reports.webp",
    imgHt: "45rem",
    imgWt: "40rem",
    MimgHt: "40rem",
    MimgWt: "35rem",
    icon: "/assets/mPOS/daily-reports.svg",
    icon2: "/assets/mPOS/report-icon.svg",
  },
];

export const outletType = [
  {
    id: 1,
    image: "/assets/mPOS/kiosks.webp",
    bgColor: "#8AE4F667",
    title: "KIOSKS",
    altText: "kiosks",
  },
  {
    id: 2,
    image: "/assets/mPOS/boutique.webp",
    bgColor: "#8AE4F667",
    title: "BOUTIQUE",
    altText: "boutique",
  },
  {
    id: 3,
    image: "/assets/mPOS/icecreamBooth.webp",
    bgColor: "#8AE4F667",
    title: "ICE CREAM BOOTH",
    altText: "ice cream booth",
  },
  {
    id: 4,
    image: "/assets/mPOS/fastFoodStall.webp",
    bgColor: "#8AE4F667",
    title: "FAST FOOD STALLS",
    altText: "fast food stalls",
  },
  {
    id: 5,
    image: "/assets/mPOS/milk.webp",
    bgColor: "#8AE4F667",
    title: "MILK BOOTH",
    altText: "milk",
  },
  {
    id: 6,
    image: "/assets/mPOS/fleaMarket.webp",
    bgColor: "#8AE4F667",
    title: "FLEA MARKET",
    altText: "flea market",
  },
  {
    id: 7,
    image: "/assets/mPOS/cart.webp",
    bgColor: "#8AE4F667",
    title: "CARTS",
    altText: "carts",
  },
  {
    id: 8,
    image: "/assets/mPOS/foodTruck.webp",
    bgColor: "#8AE4F667",
    title: "FOOD TRUCKS",
    altText: "food trucks",
  },
];

export const features = [
  {
    id: 1,
    icon: "/assets/Other_Feature_HomePage/Offline_Mode.svg",
    title: "Online and Offline Mode",
    desc: "QB POS billing software runs both offline and online, seamlessly syncing your data on every transaction.",
  },
  {
    id: 2,
    icon: "/assets/online-store.svg",
    title: "Create Your Online Dukan",
    desc: "Use QB online store to create your own virtual shopping center and take orders from anywhere.",
  },
  {
    id: 3,
    icon: "/assets/Other_Feature_HomePage/Promotion&Discount.svg",
    title: "Run Ads and offers",
    desc: "Create promotions and run digital ads with an advanced and user-friendly CRM feature.",
  },
];
