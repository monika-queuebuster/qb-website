import { useEffect, useRef, useState } from "react";
import { timeZoneCityToCountry } from "../src/language/regionWiseCountries";
import countryAbrivations from "./language/CountryAbrivations";

const getUserCountry = () => {
  let userTimeZone;
  let tzArr;
  let userCity;
  let userCountry;
  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    tzArr = userTimeZone.split("/");
    userCity = tzArr[tzArr.length - 1];
    userCountry = timeZoneCityToCountry[userCity];
  }
  let countryCode = countryAbrivations.find(
    (item) => item.name === userCountry
  );
  return countryCode;
};

const useIsInViewport = (options) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return [targetRef, isInViewport];
};

export { getUserCountry, useIsInViewport };
