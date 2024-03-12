import React from 'react'
import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";

const DesktopPlanCheckout = dynamic(() => import("../components/planCheckout/DesktopPlanCheckout"), {
  loading: () => <Loading />,
})

const MobilePlanCheckout = dynamic(() => import("../components/planCheckout/MobilePlanCheckout"), {
  loading: () => <Loading />
})

const planCheckout = ({ mobileView }) => {
  return (
    <>
      {
        mobileView ? <MobilePlanCheckout /> : <DesktopPlanCheckout />
      }
    </>
  )
}

export default planCheckout