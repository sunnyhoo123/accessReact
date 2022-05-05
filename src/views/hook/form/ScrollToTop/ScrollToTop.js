import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This is a utility component that scrolls a page to the top whenever the URL changes.
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // NS query - prevent auto scroll-to-top in certain cases
    if (search.includes("ns=true")) return;

    document.body.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export const flattenObject = (obj) => {
  const flattened = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]));
    } else {
      flattened[key] = obj[key];
    }
  });
  return flattened;
};

export function ScrollToTopFormikError(formik) {
  let topY = Number.MAX_VALUE;
  let topElement = null;

  Object.keys(flattenObject(formik.errors)).forEach((errorFieldID) => {
    const element = document.getElementById(errorFieldID);
    if (element != null) {
      const rect = element.getBoundingClientRect();
      if (rect.top < topY) {
        topY = rect.top;
        topElement = element;
      }
    }
  });
  console.log(topY, topElement);
  if (topElement !== null)
    document.body.scrollBy({ top: topY - 32, left: 0, behavior: "smooth" });
}

export default ScrollToTop;
