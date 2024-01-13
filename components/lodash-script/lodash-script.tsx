"use client";

import Script from "next/script";

export const LodashScript = () => {
  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/lib/lodash.js/4.17.20/lodash.min.js"
      onError={(event) => console.log(event)}
    />
  );
};
