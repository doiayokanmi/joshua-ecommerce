'use client'

import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";


const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6585775e70c9f2407f828842/1hi8lkiv1'; // Replace with your actual Tawk.to widget code URL
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Helmet>
      {/* Add any additional meta tags or script dependencies here */}
    </Helmet>
  );
};

export default TawkTo;