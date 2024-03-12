import axios from "axios";
import { Toaster, toast } from "sonner";

axios.defaults.baseURL = "https://api.queuebuster.co/API/public/v2/merchant";
// http://beta.queuebuster.co/API/public/v2/merchant/countryPricing
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "https://queuebuster.co/";



const sendOtp = (userData, setShowOtpBox, setMyOtpToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(`/sendOtpWeb`, userData, {
        withCredentials: false,
      });
      if (data.status == 0) throw data;
      else {
        setShowOtpBox(1);
        setMyOtpToken(data.otp);
        resolve(data.message);
      }
    } catch (data) {
      reject(data.message);
    }
  });
};

const checkOtp = (userData, setUserVerified) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("/verifyOtp", userData);
      if (data.status == false) throw data;
      else {
        setUserVerified(true);
        resolve(data.message);
      }
    } catch (data) {
      reject(data.message);
    }
  });
};

const countryPlanPricing = async (userData) => {
  try {
    const { data } = await axios.post("/countryPricing", userData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getFreeDemo = (userData, router, url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("/demoRequest", userData);
      router.push(url ? url : "/thank-you");
      resolve("Team will contact you soon");
    } catch (error) {
      toast.error("Something went wrong");
      reject("Something went wrong");
    }
  });
};

const contactUsApi = (userData, router) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("/contactUs", userData);
      router.push("/thank-you");
      resolve("Team will contact you soon");
    } catch (error) {
      reject("Something went wrong");
    }
  });
};

const getPolicyData = async (userData) => {
  try {
    const { data } = await axios.post("/fetchPolicies", userData);
    return data.content;
  } catch (error) {
    console.error("error");
  }
};

const getAvailableVacancy = async () => {
  try {
    const { data } = await axios.get("/fetchJobs");
    return data;
  } catch (error) {
    console.error(error);
  }
};

// const getTeamsData = async () => {
//    try {
//       const { data } = await axios.get("/fetchTeams");
//       return data;
//    } catch (error) {
//       console.error(error);
//    }
// };

const enterpriseFormApi = async (userData, router) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("/enterpriseRequest", userData);
      router.push("/thank-you");
      resolve("Team will contact you soon");
    } catch (error) {
      toast.error("Something went wrong");
      reject("Something went wrong");
    }
  });
};

const pricingCheckoutPlan = async (userData, router) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("/planCheckout", userData);
      router.push("/thank-you");
      resolve("Team will contact you soon");
    } catch (error) {
      toast.error("Something went wrong");
      reject("Something went wrong");
    }
  });
};

export {
  sendOtp,
  checkOtp,
  countryPlanPricing,
  getFreeDemo,
  getPolicyData,
  contactUsApi,
  getAvailableVacancy,
  // getTeamsData,
  enterpriseFormApi,
  pricingCheckoutPlan
};
