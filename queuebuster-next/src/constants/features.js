import content from "../language/ENGLISH.json";

const {
  contactlessOrdering,
  contactlessOrderingDesc,
  customersCanScan,
  qrCode,
  nearestOutlet,
  allowCustomerstext,
  multiplePaymentsText,
  customersCanText,
  pickupText,
  getProductsDeliveredAnywhere,
  speakWithExpert,
  sellAnytimeAnyWhere,
  contactLessTag,
  sellAnytimeAnyWhereTag,
  sellAnytimeAnywhereDesc,
  generateAn,
  estoreLink,
  storeWithInventory,
  shareWithCustomer,
  WaFbInst,
  multiplyYourOrders,
  increaseConsumerBase,
  requestCallback,
  zeroTechInvestement,
  zeroTechInvestementDesc,
  thirdPartyAggregations,
  thirdPartyAggregationsDesc,
  accelerateYourBusiness,
  accelerateYourBusinessDesc,
  manageOnlineOffline,
  manageOnlineOfflineDesc,
  estoreQ1,
  estoreA1,
  estoreQ2,
  estoreA2,
  estoreQ3,
  estoreA3,
  estoreQ4,
  estoreA4,
  estoreQ5,
  estoreA5,
  estoreQ6,
  estoreA6,
  estoreQ7,
  estoreA7,
  estoreQ8,
  estoreA8,
  estoreQ9,
  estoreA9,
  estoreQ10,
  estoreA10,
  retainCustomer,
  retainCustomerDesc,
  retainCustomerTag,
  unifiedView,
  customerData,
  betterUnderstandPreference,
  segmentYourCustomer,
  relevantMarketing,
  informedDecisions,
  productOfferingsText,
  strategies,
  knowAllAboutCustomers,
  knowAllAboutCustomersDesc,
  knowAllAboutCustomersTag,
  getConsistent,
  uptoDateCustomerData,
  acrossAllTouchpoints,
  offerExclusiveCustomer,
  birthdaysAnniversaryText,
  knowYourText,
  hightTicketCustomers,
  loyaltyBenifits,
  custmersBehaviour,
  custmersBehaviourDesc,
  custmersBehaviourTag,
  gainValuableInsights,
  customersPreference,
  behavior,
  createText,
  productsRecommendation,
  loyaltyCampaigns,
  moreLikelyToEngage,
  customersRadar,
  deliveringContent,
  talkToExpert,
  membershipDiscount,
  membershipDiscountDesc,
  promotions,
  promotionsDesc,
  rewardManagement,
  rewardManagementDesc,
  integrations,
  integrationsDesc,
  knowCustomersInOut,
  knowCustomersInOutDesc,
  crmQ1,
  crmA1,
  crmQ2,
  crmA2,
  crmQ3,
  crmA3,
  crmQ4,
  crmA4,
  crmQ5,
  crmA5,
  crmQ6,
  crmA6,
  crmQ7,
  crmA7,
  crmQ8,
  crmA8,
  crmQ9,
  crmA9,
  crmQ10,
  crmA10,
  stockManagementSoftware,
  stockManagementSoftwareDesc,
  stockInStockOut,
  softwareDesigned,
  simpleAndEasy,
  noTrainingReq,
  helpsInManaging,
  inventoryLevels,
  effectivelyAndPredicts,
  offersAutomatic,
  cloudSync,
  upToDateStockInfo,
  warehouseMgmtSft,
  warehouseMgmtSftDesc,
  warehouseMgmtSftTag,
  qbusterConsolidate,
  fromAllStoresAndWarehouses,
  inventoryData,
  enablesYouTo,
  showcaseInventory,
  variousMarketPlaces,
  queuebusterEnhances,
  stockoutsAndOverstockingRisks,
  inventoryVisibilty,
  vendorManagementSoftware,
  vendorManagementSoftwareDesc,
  vendorManagementSoftwareTag,
  streamlineYourProcurment,
  purchaseOrder,
  generation,
  ensureAccurate,
  financialTransaction,
  vendorBilling,
  efficientlyMap,
  categorizeYourProducts,
  versatileTool,
  manageInventoryViaBarcode,
  manageInventoryViaBarcodeDesc,
  centralizedReporting,
  centralizedReportingDesc,
  expiryManagement,
  expiryManagementDesc,
  manageYourMultistore,
  manageYourMultistoreDesc,
  inventoryQ1,
  inventoryA1,
  inventoryQ2,
  inventoryA2,
  inventoryQ3,
  inventoryA3,
  inventoryQ4,
  inventoryA4,
  inventoryQ5,
  inventoryA5,
  inventoryQ6,
  inventoryA6,
  inventoryQ7,
  inventoryA7,
  inventoryQ8,
  inventoryA8,
  inventoryQ9,
  inventoryA9,
  inventoryQ10,
  inventoryA10,
  generateBillInBlink,
  generateBillInBlinkDesc,
  startBilling,
  registrationText,
  isComplete,
  billInBlink,
  withoutAddingInventory,
  usefulForBusiness,
  noCatalog,
  sellingLooseItems,
  talkToUsNow,
  completeInvoiceSolution,
  completeInvoiceSolutionTag,
  completeInvoiceSolutionDesc,
  expediteSalesAgreement,
  proformaInvoices,
  create,
  ensureCompilance,
  gstInvoicing,
  solution,
  efficientlyManage,
  returnOrderReceipts,
  creditTransaction,
  creditReceipts,
  onlineOfflineBilling,
  onlineOfflineBillingDesc,
  cloudDataBackup,
  cloudDataBackupDesc,
  cashDrawer,
  cashDrawerDesc,
  multipleInvoices,
  multipleInvoicesDesc,
  billingQ1,
  billingA1,
  billingQ2,
  billingA2,
  billingQ3,
  billingA3,
  billingQ4,
  billingA4,
  billingQ5,
  billingA5,
  billingQ6,
  billingA6,
  billingQ7,
  billingA7,
  billingQ8,
  billingA8,
  billingQ9,
  billingA9,
  billingQ10,
  billingA10,
  stayFlexible,
  stayFlexibleDesc,
  stayFlexibleTag,
  variousPaymentMethod,
  safteyIntegration,
  moneyTotallySafe,
  fromText,
  digitalWallets,
  qbAcceptsAll,
  whilePaying,
  clubOfferDiscount,
  toGenerateBills,
  edcMachines,
  edcMachinesDesc,
  edcMachinesTag,
  qbSeamlessly,
  androidEDCmachine,
  transactionsSmooth,
  imporovePaymentProcess,
  posOperation,
  qbIsCompatible,
  androidCardSwiping,
  ofAnySize,
  noAdditionalCharges,
  noAdditionalChargesDesc,
  directBankSupport,
  directBankSupportDesc,
  contactlessPayments,
  contactlessPaymentsDesc,
  paymentSolution,
  paymentSolutionDesc,
  paymentQ1,
  paymentA1,
  paymentQ2,
  paymentA2,
  paymentQ3,
  paymentA3,
  paymentQ4,
  paymentA4,
  paymentQ5,
  paymentA5,
  paymentQ6,
  paymentA6,
  paymentQ7,
  paymentA7,
  paymentQ8,
  paymentA8,
  paymentQ9,
  paymentA9,
  recordPayment,
  recordPaymentContent,
  recordPaymentTag,
  easilyManageCustomer,
  paymentsAdvancesEtc,
  recordAnd,
  trackPayments,
  stayOrganized,
  buildTransperancy,
  strongerRelationship,
  notifyCustomers,
  notifyCustomersDesc,
  notifyCustomersTag,
  paymentCollection,
  reminders,
  optimizeCashflow,
  automatedPaymentNotification,
  preventBadDebts,
  trackingPaymentHistory,
  instantly,
  dataBackup,
  dataBackupDesc,
  multilingualSupport,
  multilingualSupportDesc,
  zeroCalculation,
  zeroCaluclationDesc,
  digitalKhata,
  digitalKhataDesc,
  khataQ1,
  khataA1,
  khataQ2,
  khataA2,
  khataQ3,
  khataA3,
  khataQ4,
  khataA4,
  khataQ5,
  khataA5,
  khataQ6,
  khataA6,
  khataQ7,
  khataA7,
  khataQ8,
  khataA8,
  bulkDataManagement,
  bulkDataManagementDesc,
  bulkDataManagementTag,
  withoutBulkData,
  importExportEtc,
  allowBusinesses,
  bulkDataEdits,
  preventingErrors,
  accommodatesTheGrowing,
  versatileSolution,
  smallEnterprises,
  dataTracking,
  dataTrackingDesc,
  dataTrackingTag,
  CDProvides,
  comprehensiveView,
  ensuringYouCanTrack,
  helpsMakeInformedDecision,
  dataInsights,
  imporvingOverallPer,
  itText,
  optimizesProcess,
  enhancesTheEfficency,
  multipleOutlet,
  multipleOutletDesc,
  multipleOutletTag,
  enablesManagement,
  multipleLocations,
  reducingOC,
  itHelps,
  productOfferings,
  maintainConsistency,
  qbIs,
  essentailFor,
  enabingSeamless,
  managePromotion,
  managePromotionDesc,
  detailedReporting,
  detailedReportingDesc,
  deviceManagement,
  deviceManagementDesc,
  centralizedCloudReporting,
  centralizedCloudReportingDesc,
  CDQ1,
  CDA1,
  CDQ2,
  CDA2,
  CDQ3,
  CDA3,
  CDQ4,
  CDA4,
  CDQ5,
  CDA5,
  CDQ6,
  CDA6,
  CDQ7,
  CDA7,
  CDQ8,
  CDA8,
  CDQ9,
  CDA9,
} = content.features;

export const eStore = [
  {
    id: "1",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/online-store/contactless-estore.webp",
    altText: "contactless order",
    title: contactlessOrdering,
    content: contactlessOrderingDesc,
    tag: contactLessTag,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {customersCanScan} <b>{qrCode}</b> {nearestOutlet}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {allowCustomerstext} <b>{multiplePaymentsText}</b>.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {customersCanText} <b>{pickupText}</b>{" "}
            {getProductsDeliveredAnywhere}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
  {
    id: "2",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/online-store/sell-anytime-estore.webp",
    altText: "customer retention",
    title: sellAnytimeAnyWhere,
    tag: sellAnytimeAnyWhereTag,
    tagColor: "#D7C2FC",
    content: sellAnytimeAnywhereDesc,
    points: [
      {
        pointDesc: (
          <>
            {generateAn} <b>{estoreLink}</b> {storeWithInventory}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {shareWithCustomer} <b>{WaFbInst}</b>.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            <b>{multiplyYourOrders}</b> {increaseConsumerBase}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: requestCallback,
  },
];

export const estoreHighlights = [
  {
    icon: "/assets/features/estore/rupee.svg",
    altText: "no rupee icon",
    title: zeroTechInvestement,
    desc: zeroTechInvestementDesc,
  },
  {
    icon: "/assets/features/estore/stop.svg",
    altText: "stop icon",
    title: thirdPartyAggregations,
    desc: thirdPartyAggregationsDesc,
  },
  {
    icon: "/assets/features/estore/speaker.svg",
    altText: "speaker icon",
    title: accelerateYourBusiness,
    desc: accelerateYourBusinessDesc,
  },
];

export const eStoreBanner = {
  title: manageOnlineOffline,
  content: manageOnlineOfflineDesc,
  image:
    "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/online-store/estore-bluefold.webp",
  altText: "demo banner image",
};

export const eStoreFAQ = [
  {
    para: <span style={{ width: "90%" }}>{estoreQ1}</span>,
    des: estoreA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ2}</span>,
    des: estoreA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ3}</span>,
    des: estoreA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ4}</span>,
    des: estoreA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ5}</span>,
    des: estoreA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ6}</span>,
    des: estoreA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ7}</span>,
    des: estoreA7,
    id: 7,
    activeIndex: 0,
  },

  {
    para: <span style={{ width: "90%" }}>{estoreQ8}</span>,
    des: estoreA8,
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ9}</span>,
    des: estoreA9,
    id: 9,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{estoreQ10}</span>,
    des: estoreA10,
    id: 10,
    activeIndex: 0,
  },
];

// --------------------------crm and loyalty--------------------------

export const crmAndLoyalty = [
  {
    id: "1",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/CRM/retain-customers.webp",
    altText: "customer retention",
    title: retainCustomer,
    content: retainCustomerDesc,
    tag: retainCustomerTag,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {unifiedView} <b>{customerData}</b> {betterUnderstandPreference}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {segmentYourCustomer} <b>{relevantMarketing}</b>
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {informedDecisions} <b>{productOfferingsText}</b> {strategies}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
  {
    id: "2",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/CRM/know-customers.webp",
    altText: "customer retention",
    title: knowAllAboutCustomers,
    content: knowAllAboutCustomersDesc,
    tag: knowAllAboutCustomersTag,
    tagColor: "#D7C2FC",
    points: [
      {
        pointDesc: (
          <>
            {getConsistent} <b>{uptoDateCustomerData}</b> {acrossAllTouchpoints}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {offerExclusiveCustomer} <b>{birthdaysAnniversaryText}</b>
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {knowYourText} <b>{hightTicketCustomers}</b> {loyaltyBenifits}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: requestCallback,
  },
  {
    id: "3",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/CRM/customers-behaviour.webp",
    altText: "customer retention",
    title: custmersBehaviour,
    content: custmersBehaviourDesc,
    tag: custmersBehaviourTag,
    tagColor: "#FFC391",
    points: [
      {
        pointDesc: (
          <>
            {gainValuableInsights} <b>{customersPreference}</b> {behavior}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {createText} <b>{productsRecommendation}</b> {loyaltyCampaigns}
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {customersRadar} <b>{deliveringContent}</b> {moreLikelyToEngage}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: talkToExpert,
  },
];

export const crmHighlights = [
  {
    icon: "/assets/features/crm/Group 73153 (1).svg",
    altText: "create",
    title: membershipDiscount,
    desc: membershipDiscountDesc,
  },
  {
    icon: "/assets/features/crm/Group 73150 (1).svg",
    altText: "membership",
    title: promotions,
    desc: promotionsDesc,
  },
  {
    icon: "/assets/features/crm/Group 73154 (1).svg",
    altText: "reward",
    title: rewardManagement,
    desc: rewardManagementDesc,
  },
  {
    icon: "/assets/features/crm/Group 73395.svg",
    altText: "reward",
    title: integrations,
    desc: integrationsDesc,
  },
];

export const crmBanner = {
  title: knowCustomersInOut,
  content: knowCustomersInOutDesc,
  image:
    "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/CRM/crm-blue-fold.webp",
  altText: "demo banner image",
};

export const crmFAQ = [
  {
    para: <span style={{ width: "90%" }}>{crmQ1}</span>,
    des: crmA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ2}</span>,
    des: crmA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ3}</span>,
    des: crmA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ4}</span>,
    des: crmA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ5}</span>,
    des: crmA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ6}</span>,
    des: crmA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ7}</span>,
    des: crmA7,
    id: 7,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ8}</span>,
    des: crmA8,
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ9}</span>,
    des: crmA9,
    id: 9,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{crmQ10}</span>,
    des: crmA10,
    id: 10,
    activeIndex: 0,
  },
];

// ------------------------inventory management----------------------
export const inventory = [
  {
    id: "1",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/stock.webp",
    altText: "stock management",
    title: stockManagementSoftware,
    content: stockManagementSoftwareDesc,
    tag: stockInStockOut,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {softwareDesigned}
            <b>{simpleAndEasy}</b> {noTrainingReq}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {helpsInManaging}
            <b>{inventoryLevels}</b> {effectivelyAndPredicts}
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {offersAutomatic} <b>{cloudSync}</b> {upToDateStockInfo}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
  {
    id: "2",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/warehouse.webp",
    altText: "warehouse management",
    title: warehouseMgmtSft,
    content: warehouseMgmtSftDesc,
    tag: warehouseMgmtSftTag,
    tagColor: "#D7C2FC",
    points: [
      {
        pointDesc: (
          <>
            {qbusterConsolidate}
            <b>{inventoryData}</b> {fromAllStoresAndWarehouses}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {enablesYouTo}
            <b>{showcaseInventory}</b> {variousMarketPlaces}
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {queuebusterEnhances}
            <b>{inventoryVisibilty}</b>, {stockoutsAndOverstockingRisks}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: requestCallback,
  },
  {
    id: "3",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/vendor.webp",
    altText: "vendor management",
    title: vendorManagementSoftware,
    content: vendorManagementSoftwareDesc,
    tag: vendorManagementSoftwareTag,
    tagColor: "#FFC391",
    points: [
      {
        pointDesc: (
          <>
            {streamlineYourProcurment} <b>{purchaseOrder}</b>
            {generation}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {ensureAccurate}
            <b>{vendorBilling}</b>
            {financialTransaction}
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {efficientlyMap}
            <b>{categorizeYourProducts}</b>
            {versatileTool}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: talkToExpert,
  },
];

export const inventoryHighlights = [
  {
    icon: "/assets/features/inventory/barcode-scanner.svg",
    altText: "manage inventory",
    title: manageInventoryViaBarcode,
    desc: manageInventoryViaBarcodeDesc,
  },
  {
    icon: "/assets/features/inventory/centralised-reporting.svg",
    altText: "centralized reporting",
    title: centralizedReporting,
    desc: centralizedReportingDesc,
  },
  {
    icon: "/assets/features/inventory/expiry-management.svg",
    altText: "expiry management",
    title: expiryManagement,
    desc: expiryManagementDesc,
  },
];

export const inventoryBanner = {
  title: manageYourMultistore,
  content: manageYourMultistoreDesc,
  image:
    "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/inventory-blue-fold.webp",
  altText: "demo banner image",
};

export const inventoryFAQ = [
  {
    para: <span style={{ width: "90%" }}>{inventoryQ1}</span>,
    des: inventoryA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ2}</span>,
    des: inventoryA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ3}</span>,
    des: inventoryA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ4}</span>,
    des: inventoryA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ5}</span>,
    des: inventoryA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ6}</span>,
    des: inventoryA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ7}</span>,
    des: inventoryA7,
    id: 7,
    activeIndex: 0,
  },

  {
    para: <span style={{ width: "90%" }}>{inventoryQ8}</span>,
    des: inventoryA8,
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ9}</span>,
    des: inventoryA9,
    id: 9,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{inventoryQ10}</span>,
    des: inventoryA10,
    id: 10,
    activeIndex: 0,
  },
];

// ----------------billing-----------------
export const billing = [
  {
    id: "1",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/billing/generate-bills.webp",
    altText: "generate bills",
    title: generateBillInBlink,
    content: generateBillInBlinkDesc,
    tag: "Quick Bill",
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {startBilling}
            <b>{registrationText}</b>
            {isComplete}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {billInBlink}
            <b>{withoutAddingInventory}</b>
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {usefulForBusiness}
            <b>{noCatalog}</b>
            {sellingLooseItems}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: talkToUsNow,
  },
  {
    id: "2",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/billing/complete-invoice.webp",
    altText: "customer retention",
    title: completeInvoiceSolution,
    tag: completeInvoiceSolutionTag,
    tagColor: "#D7C2FC",
    content: completeInvoiceSolutionDesc,
    points: [
      {
        pointDesc: (
          <>
            {create}
            <b>{proformaInvoices}</b>
            {expediteSalesAgreement}
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {ensureCompilance}
            <b>{gstInvoicing}</b>
            {solution}.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {efficientlyManage}
            <b>{returnOrderReceipts}.</b>
          </>
        ),
        borderColor: "#8AE4F6",
      },
      {
        pointDesc: (
          <>
            {creditTransaction}
            <b>{creditReceipts}</b>
          </>
        ),
        borderColor: "#A0FF8E",
      },
    ],
    linkTitle: speakWithExpert,
  },
];

export const billingHighlights = [
  {
    icon: "/assets/features/billing/Group 73150.svg",
    altText: "billing",
    title: onlineOfflineBilling,
    desc: onlineOfflineBillingDesc,
  },
  {
    icon: "/assets/features/billing/Group 73153.svg",
    altText: "data backup",
    title: cloudDataBackup,
    desc: cloudDataBackupDesc,
  },
  {
    icon: "/assets/features/billing/Group 73154.svg",
    altText: "cash drawer",
    title: cashDrawer,
    desc: cashDrawerDesc,
  },
];

export const billingBanner = {
  title: multipleInvoices,
  content: multipleInvoicesDesc,
  image:
    "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/billing/billing-blue-fold.webp",
  altText: "banner image",
};

export const billingFAQ = [
  {
    para: <span style={{ width: "90%" }}>{billingQ1}</span>,
    des: billingA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ2}</span>,
    des: billingA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ3}</span>,
    des: billingA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ4}</span>,
    des: billingA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ5}</span>,
    des: billingA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ6}</span>,
    des: billingA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ7}</span>,
    des: billingA7,
    id: 7,
    activeIndex: 0,
  },

  {
    para: <span style={{ width: "90%" }}>{billingQ8}</span>,
    des: billingA8,
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ9}</span>,
    des: billingA9,
    id: 9,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{billingQ10}</span>,
    des: billingA10,
    id: 10,
    activeIndex: 0,
  },
];

// ---------digital payments-----------

export const payments = [
  {
    id: "1",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/payment/multiple-pay-mode.webp",
    altText: "customer retention",
    title: stayFlexible,
    content: stayFlexibleDesc,
    tag: stayFlexibleTag,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {variousPaymentMethod}
            <b>{safteyIntegration}</b>, {moneyTotallySafe}.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {fromText}
            <b>{digitalWallets}</b>, {qbAcceptsAll}.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {whilePaying}
            <b>{clubOfferDiscount}</b>
            {toGenerateBills}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
  {
    id: "2",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/payment/edc-machines.webp",
    altText: "customer retention",
    title: edcMachines,
    tag: edcMachinesTag,
    tagColor: "#D7C2FC",
    content: edcMachinesDesc,
    points: [
      {
        pointDesc: (
          <>
            {qbSeamlessly}
            <b>{androidEDCmachine}</b>, {transactionsSmooth}.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {imporovePaymentProcess}
            <b>{posOperation}</b>.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {qbIsCompatible}
            <b>{androidCardSwiping}</b>
            {ofAnySize}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: requestCallback,
  },
];

export const paymentHighlights = [
  {
    icon: "/assets/features/payments/no-additional-charges.svg",
    altText: "billing",
    title: noAdditionalCharges,
    desc: noAdditionalChargesDesc,
  },
  {
    icon: "/assets/features/payments/bank-support.svg",
    altText: "data backup",
    title: directBankSupport,
    desc: directBankSupportDesc,
  },
  {
    icon: "/assets/features/payments/contactless-payment.svg",
    altText: "cash drawer",
    title: contactlessPayments,
    desc: contactlessPaymentsDesc,
  },
];

export const paymentBanner = {
  title: paymentSolution,
  content: paymentSolutionDesc,
  image:
    "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/payment/payments-blue-fold.webp",
  altText: "banner image",
};

export const paymentFAQ = [
  {
    para: <span style={{ width: "90%" }}>{paymentQ1}</span>,
    des: paymentA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ2}</span>,
    des: paymentA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ3}</span>,
    des: paymentA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ4}</span>,
    des: paymentA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ5}</span>,
    des: paymentA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ6}</span>,
    des: paymentA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ7}</span>,
    des: paymentA7,
    id: 7,
    activeIndex: 0,
  },

  {
    para: <span style={{ width: "90%" }}>{paymentQ8}</span>,
    des: paymentA8,
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{paymentQ9}</span>,
    des: paymentA9,
    id: 9,
    activeIndex: 0,
  },
];

// ---------khata---------

export const khata = [
  {
    id: "1",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/khata/record-payments.webp",
    altText: "stay flexible",
    title: recordPayment,
    content: recordPaymentContent,
    tag: recordPaymentTag,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {easilyManageCustomer}
            <b>{paymentsAdvancesEtc}</b>.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {recordAnd}
            <b>{trackPayments}</b>
            {stayOrganized}.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            <b>{buildTransperancy}</b>
            {strongerRelationship}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
  {
    id: "2",
    image:
      "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/khata/notify-customers.webp",
    altText: "customer retention",
    title: notifyCustomers,
    content: notifyCustomersDesc,
    tag: notifyCustomersTag,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {paymentCollection}
            <b>{reminders}</b>.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {optimizeCashflow}
            <b>{automatedPaymentNotification}</b>.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {preventBadDebts}
            <b>{trackingPaymentHistory}</b>
            {instantly}.
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
];

export const khataHighlights = [
  {
    icon: "/assets/features/khata/data-backup.svg",
    altText: "data backup",
    title: dataBackup,
    desc: dataBackupDesc,
  },
  {
    icon: "/assets/features/khata/zero-calculation.svg",
    altText: "data backup",
    title: zeroCalculation,
    desc: zeroCaluclationDesc,
  },
  {
    icon: "/assets/features/khata/multilingual-support.svg",
    altText: "cash drawer",
    title: multilingualSupport,
    desc: multilingualSupportDesc,
  },
];

export const khataBanner = {
  title: digitalKhata,
  content: digitalKhataDesc,
  image:
    "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/khata/khata-blue-fold.webp",
  altText: "banner image",
};

export const khataFAQ = [
  {
    para: <span style={{ width: "90%" }}>{khataQ1}</span>,
    des: khataA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{khataQ2}</span>,
    des: khataA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{khataQ3}</span>,
    des: khataA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{khataQ4}</span>,
    des: khataA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{khataQ5}</span>,
    des: khataA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{khataQ6}</span>,
    des: khataA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{khataQ7}</span>,
    des: khataA7,
    id: 7,
    activeIndex: 0,
  },

  {
    para: <span style={{ width: "90%" }}>{khataQ8}</span>,
    des: khataA8,
    id: 8,
    activeIndex: 0,
  },
];

// -----------cloud dashboard-----------

export const cloudDashboard = [
  {
    id: "1",
    image: "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/dashboard/bulk-data.webp",
    altText: "customer retention",
    title: bulkDataManagement,
    content: bulkDataManagementDesc,
    tag: bulkDataManagementTag,
    tagColor: "#A0FF8E",
    points: [
      {
        pointDesc: (
          <>
            {withoutBulkData}
            <b>{importExportEtc}</b>.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {allowBusinesses}
            <b>{bulkDataEdits}</b>, {preventingErrors}.
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {accommodatesTheGrowing}
            <b>{versatileSolution}</b>
            {smallEnterprises}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: speakWithExpert,
  },
  {
    id: "2",
    image: "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/dashboard/data-tracking.webp",
    altText: "data tracking",
    title: dataTracking,
    tag: dataTrackingTag,
    tagColor: "#D7C2FC",
    content: dataTrackingDesc,
    points: [
      {
        pointDesc: (
          <>
            {CDProvides}
            <b>{comprehensiveView}</b>, {ensuringYouCanTrack}.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {helpsMakeInformedDecision}
            <b>{dataInsights}</b>
            {imporvingOverallPer}
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {itText}
            <b>{optimizesProcess}</b>
            {enhancesTheEfficency}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: requestCallback,
  },
  {
    id: "3",
    image: "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/dashboard/multi-outlet.webp",
    altText: "multi outlet",
    title: multipleOutlet,
    tag: multipleOutletTag,
    tagColor: "#FFC391",
    content: multipleOutletDesc,
    points: [
      {
        pointDesc: (
          <>
            {enablesManagement}
            <b>{multipleLocations}</b>, {reducingOC}.
          </>
        ),
        borderColor: "#F8D378",
      },
      {
        pointDesc: (
          <>
            {itHelps}
            <b>{maintainConsistency}</b>
            {productOfferings}
          </>
        ),
        borderColor: "#EEC9FF",
      },
      {
        pointDesc: (
          <>
            {qbIs}
            <b>{essentailFor}</b>
            {enabingSeamless}
          </>
        ),
        borderColor: "#8AE4F6",
      },
    ],
    linkTitle: requestCallback,
  },
];

export const CDHighlights = [
  {
    icon: "/assets/features/cloud/promotions.svg",
    altText: "data backup",
    title: managePromotion,
    desc: managePromotionDesc,
  },
  {
    icon: "/assets/features/cloud/reporting.svg",
    altText: "data backup",
    title: detailedReporting,
    desc: detailedReportingDesc,
  },
  {
    icon: "/assets/features/cloud/device-management.svg",
    altText: "cash drawer",
    title: deviceManagement,
    desc: deviceManagementDesc,
  },
];

export const CDBanner = {
  title: centralizedCloudReporting,
  content: centralizedCloudReportingDesc,
  image: "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/dashboard/cloud-dashboard-blue-fold.webp",
  altText: "banner image",
};

export const CDFAQ = [
  {
    para: <span style={{ width: "90%" }}>{CDQ1}</span>,
    des: CDA1,
    id: 1,
    activeIndex: 1,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ2}</span>,
    des: CDA2,
    id: 2,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ3}</span>,
    des: CDA3,
    id: 3,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ4}</span>,
    des: CDA4,
    id: 4,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ5}</span>,
    des: CDA5,
    id: 5,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ6}</span>,
    des: CDA6,
    id: 6,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ7}</span>,
    des: CDA7,
    id: 7,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ8}</span>,
    des: CDA8,
    id: 8,
    activeIndex: 0,
  },
  {
    para: <span style={{ width: "90%" }}>{CDQ9}</span>,
    des: CDA9,
    id: 9,
    activeIndex: 0,
  },
];
