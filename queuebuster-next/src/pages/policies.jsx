import Loading from "@/components/common/Loading";

import dynamic from "next/dynamic";

const PoliciesDesktop = dynamic(() => import("../components/policies/PoliciesDesktop"), {
   loading: () => <Loading />,
});


const Privacy = () => {
   return (
      <>
         <PoliciesDesktop/>
      </>
   );
};

export default Privacy;
